import React,{ useState, useEffect, useContext} from 'react'
import NewsCategory from './NewsCategory'
import axios from 'axios'
import Container from "../Container";
import { categoryContext } from '../categoryContext';

const Landing= () => {
    const [categoryCheckbox, filter]= useContext(categoryContext)
    // const [newsData,setNewsData] = useState(['national','sports','business','world'])
    // const [ categoryCheckbox, toggleCheckbox] = useState({national: true,business: false, sports: true, world: false})
      
    //const newsContext = createContext({});
    // const filterNews= (category) => {

    //         return newsData[category].filter((news) => {
    //           let today= new Date().toDateString()
    //           let newsDate= new Date(news.date.slice(0,11)).toDateString()
    //           return today===newsDate? true: false;
    //         })
    // }
    const fetchCategoryNews = async (category) => {
        try{
        const response= await axios.get(`https://inshortsapi.vercel.app/news?category=${category}`)
        const data= await response.data.data
        return data
        }catch(error)
        { console.error(error)}
    }
    useEffect(() => {
        
    }, [filter])
    return (
        
            <Container>
                    { <div className="flex flex-col"> 

                        { Object.keys(categoryCheckbox.current).filter((category)=> categoryCheckbox.current[category]).map((category,index)=> <NewsCategory key={index} category={category}  fetchCategoryNews={fetchCategoryNews} /> 
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


