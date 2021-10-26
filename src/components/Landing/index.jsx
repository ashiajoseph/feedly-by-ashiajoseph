import axios from 'axios'
import React,{ useState, useEffect } from 'react'

function Landing() {
    const [newsData, setNewsData] = useState({
        national: [],
        sports: [],
        business: [],
        world: []})
    const fetchNews= async () => {
        const categories= Object.keys(newsData)
    
        try{
        let res= await categories.reduce( async (prevPromise, category)=>{
            const acc= await prevPromise
            const response= await axios.get(`https://inshortsapi.vercel.app/news?category=${category}`)
            const resObj= await response.data
            const data=  resObj.data
            //console.log(data)
            return {...acc,[category]: data}
        },Promise.resolve({}))
        console.log(res)
        setNewsData(res)
        }catch(error)
        { console.log(error)}
        
        // const response= await axios.get('https://inshortsapi.vercel.app/news?category=sports')
        // const data= await response.data.data
        // setNewsData( prev => {return{...prev,['sports']: data}})
        
        
        
    }
    useEffect(()=> {
        fetchNews()   
    },[])
    console.log('--',newsData)
    return (
        <div>
         
        </div>
    )
}

export default Landing
