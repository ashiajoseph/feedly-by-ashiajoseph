import React,{useState, useEffect} from 'react'
import MainNews from './MainNews'
import SubNews from './SubNews'


const NewsCategory = ({category,fetchCategoryNews}) => {
    const [loading, setLoading] = useState(true)
    const [categoryNews, setCategoryNews]= useState([])
    
    const fetchNews= async () => {
        const data= await fetchCategoryNews(category);
        setCategoryNews(data)
        setLoading(false)

    }
    useEffect(()=>{
        fetchNews()
    },[])
    
    if (loading)
        return <h3>Loading ...</h3>
    return (
        <div className="flex flex-col items-center ">
            <MainNews category={category} data={categoryNews[0]} fullnews= {categoryNews} />
            <SubNews category={category} data={categoryNews.slice(1,5)} fullnews= {categoryNews} /> 
        </div>
    )
}

export default NewsCategory
