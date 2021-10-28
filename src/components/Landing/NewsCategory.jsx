import React,{useState, useEffect,useRef, useContext} from 'react'
import MainNews from './MainNews'
import SubNews from './SubNews'
import { categoryContext } from '../categoryContext'

const NewsCategory = ({category,categoryNews}) => {
    // const [categoryCheckbox, filter] = useContext(categoryContext)
    // const [loading, setLoading] = useState(false)
    // const [categoryNews, setCategoryNews]= useState([])
    //const isMounted = useRef(false)
    // const fetchNews= async () => {
    //     const data= await fetchCategoryNews(category);
    //     //if (isMounted)
    //         setCategoryNews(data)
    //     setLoading(false)

    // }
    // useEffect(()=>{
    //     //isMounted.current= true
    //     fetchNews()
    //     return () => { setCategoryNews([]); }
    // },[])
  
    return (
        <div className="flex flex-col items-center ">
            <MainNews category={category} data={categoryNews[0]} fullnews= {categoryNews} />
            <SubNews category={category} data={categoryNews.slice(1,5)} fullnews= {categoryNews} /> 
        </div>
    )
}

export default NewsCategory
