import React,{ useState, useEffect,createContext, useContext, useRef} from 'react'
import NewsCategory from './NewsCategory'
import axios from 'axios'
import Container from "../Container";
import { filterContext } from '../filterContext';
import TagGroup from './TagGroup';
import NoArticleFound from './NoArticleFound';
export const newsContext = createContext({})

const Landing= () => {
    const {categoryCheckbox, archive, categoryCount,getCategoryCount}= useContext(filterContext)
    const [loading, setLoading] = useState(true)
    const [news, setNews]= useState({})
    const articlesNotFound= useRef(0)
    

    // const fetchCategoryNews = async (category) => {
    //     try{
    //     const response= await axios.get(`https://inshortsapi.vercel.app/news?category=${category}`)
    //     const data= await response.data
    //     return data
    //     }catch(error)
    //     { console.error(error)}
    // }
    const fetchNews= async () => {
        const categories= Object.keys(categoryCheckbox.current)
        try{
        let res= await categories.reduce( async (prevPromise, category)=>{
            const acc= await prevPromise
            const response= await axios.get(`https://inshortsapi.vercel.app/news?category=${category}`)
            const resObj= await response.data
            const data=  resObj.data
            acc[category]= data
            return {...acc}
        },Promise.resolve({}))
        await setNews(res)
        await setLoading(false)       
        }catch(error)
        { console.log(error)}

    }
    useEffect(()=> {
      fetchNews() 
    },[])
    
    const filteredCategoryList = Object.keys(categoryCheckbox.current).filter((category)=> categoryCheckbox.current[category])
    let filteredCategory_array= filteredCategoryList.map((category) => { 
        if(typeof news[category] !== 'undefined')
            categoryCount.current[category]= news[category].length
        return  [ category , news[category]]})
  

    if (loading)
        return <h3>Loading ...</h3>

    const filterNews= (categoryNews) => {
            let today= new Date().toDateString()
            return categoryNews.filter((news) => {
                let newsDate= new Date(news.date.slice(0,11)).toDateString()
                return today===newsDate
                })
    }

    if(!archive.current)
    {
        filteredCategory_array=filteredCategory_array.map(([category,array]) => {
           let reduced_array= filterNews(array)
           categoryCount.current[category]= reduced_array.length
           return [category, reduced_array]
        })
    }


    articlesNotFound.current= getCategoryCount()
    return (
        <newsContext.Provider value={news}>
            <Container >
                    { <div className="flex flex-col"> 
                        <TagGroup />
                        { filteredCategory_array.map(([category,categoryNews],index)=> <NewsCategory key={index} category={category} categoryNews={categoryNews} /> 
                        )}
                    </div> }
                    {  articlesNotFound.current &&<NoArticleFound news={news}/>}
            </Container>
        </newsContext.Provider>    
            
        
    )
}
/* Object.keys(newsData).map((category,index)=>{
                let categoryNews= !filter ? filterNews(category) : newsData[category]} 
                
  useEffect(()=> {
        const fetchNews= async () => {
        
            try{
            let res= await Object.keys(newsData).reduce( async (prevPromise, category)=>{
                const acc= await prevPromise
                const response= await axios.get(`https://inshortsapi.vercel.app/news?category=${category}`)
                const resObj= await response.data
                const data=  resObj.data
                acc[category]= data
                return {...acc}
            },Promise.resolve({}))
            setNewsData(res)
            }catch(error)
            { console.log(error)}
            
            // const response= await axios.get('https://inshortsapi.vercel.app/news?category=sports')
            // const data= await response.data.data
            // setNewsData( prev => {return{...prev,['sports']: data}})

        }
       // fetchNews()  

    },[])*/
export default Landing
