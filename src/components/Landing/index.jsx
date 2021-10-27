import axios from 'axios'
import React,{ useState, useEffect } from 'react'
import MainNews from './MainNews'
import SubNews from './SubNews'
function Landing() {
    const [loading, setLoading]= useState(true)
    const [newsData, setNewsData] = useState({
        national: [],
        sports: [],
        business: [],
        world: []})
    const [filter, setFilter]= useState(false)   
    const fetchNews= async () => {
        const categories= Object.keys(newsData)
    
        try{
        let res= await categories.reduce( async (prevPromise, category)=>{
            const acc= await prevPromise
            const response= await axios.get(`https://inshortsapi.vercel.app/news?category=${category}`)
            const resObj= await response.data
            const data=  resObj.data
            //console.log(data)
            acc[category]= data
            return {...acc}
        },Promise.resolve({}))
        //console.log(res)
        setNewsData(res)
        }catch(error)
        { console.log(error)}
        
        // const response= await axios.get('https://inshortsapi.vercel.app/news?category=sports')
        // const data= await response.data.data
        // setNewsData( prev => {return{...prev,['sports']: data}})
  
        setLoading(false)
    }
    const filterNews= (category) => {

            return newsData[category].filter((news) => {
              let today= new Date().toDateString()
              let newsDate= new Date(news.date.slice(0,11)).toDateString()
              return today===newsDate? true: false;
            })
    }

    useEffect(()=> {
        fetchNews()  
        //console.log(new Date('26 Oct 2021').toDateString()) 
    },[])

    const categories= Object.keys(newsData)
    //console.log(newsData)
    if(loading)
        return <div className="text-center">
            <h2>LOADING...</h2>
            </div>
    return (
        <div className=""> 
            {  Object.keys(newsData).map((category,index)=>{
                let categoryNews= !filter ? filterNews(category) : newsData[category]
                console.log(categoryNews.slice(1,5))      
                return (
                    <div key={index} className="flex flex-col items-center ">
                        <MainNews category={category} data={categoryNews[0]} />
                        <SubNews category={category} data={categoryNews.slice(1,5)} />
                    </div>
                )
            })}
        </div>
    )
}

export default Landing
//<MainNews category='sports' data={newsData.sports[0]} />