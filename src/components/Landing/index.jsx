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
  
        setLoading(false)
    }
    useEffect(()=> {
        fetchNews()   
    },[])

    const categories= Object.keys(newsData)
    console.log(newsData)
    if(loading)
        return <div className="text-center">
            <h2>LOADING...</h2>
            </div>

    return (
        <div className=""> 
            { categories.map((category,index)=>{
                return (
                    <div key={index} className="flex flex-col items-center ">
                        <MainNews category={category} data={newsData[category][0]} />
                        <SubNews data={newsData[category].slice(1,5)} />
                    </div>
                )
            })}
        </div>
    )
}

export default Landing
//<MainNews category='sports' data={newsData.sports[0]} />