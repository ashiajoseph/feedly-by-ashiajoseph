import React,{ useState, useEffect, useContext} from 'react'
import NewsCategory from './NewsCategory'
import axios from 'axios'
import Container from "../Container";
import { categoryContext } from '../categoryContext';
import TagGroup from './TagGroup';
const Landing= () => {
    const {categoryCheckbox, archive, filter}= useContext(categoryContext)
    const [loading, setLoading] = useState(true)
    const [news, setNews]= useState({})
      
    
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

    if (loading)
        return <h3>Loading ...</h3>
    
    return (
        
            <Container>
                    { <div className="flex flex-col"> 
                        <TagGroup />
                        { Object.keys(news).filter((category)=> categoryCheckbox.current[category]).map((category,index)=> <NewsCategory key={index} category={category} categoryNews={news[category]} /> 
                        )}
                    </div> }
            </Container>
        
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
export default Landing;


