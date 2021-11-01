import React,{useContext, useRef} from 'react'
import NewsCategory from './NewsCategory'
import Container from "../Container";
import { filterContext } from '../filterContext';
import TagGroup from './TagGroup';
import NoArticleFound from './NoArticleFound';
import { newsContext} from '../newsContext'

const Landing= () => {
    const {categoryCheckbox, archive, categoryCount,getCategoryCount}= useContext(filterContext)
    const {news,categoryNews}= useContext(newsContext)
    const articlesNotFound= useRef(0)
    
    const filteredCategoryList = Object.keys(categoryCheckbox.current).filter((category)=> categoryCheckbox.current[category])
    let filteredCategory_array= filteredCategoryList.map((category) => { 
        if(typeof news[category] !== 'undefined')
        {   categoryCount.current[category]= news[category].length
            categoryNews.current[category] = news[category]
        }   
        return  [ category , news[category]] })
      

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
        
            <Container >
                    { <div className="flex flex-col"> 
                        <TagGroup />
                        { filteredCategory_array.map(([category,categoryNews],index)=> <NewsCategory key={index} category={category} categoryNews={categoryNews} /> 
                        )}
                    </div> }
                    {  articlesNotFound.current &&<NoArticleFound/>}
            </Container>   
            
        
    )
}

export default Landing
