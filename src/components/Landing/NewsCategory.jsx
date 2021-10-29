import React,{useState, useContext} from 'react'
import MainNews from './MainNews'
import SubNews from './SubNews'
import { categoryContext } from '../categoryContext';


const NewsCategory = ({category,categoryNews}) => {
    const {archive, categoryCount}= useContext(categoryContext)
    let filteredNews = []
    const filterNews= () => {
        let today= new Date().toDateString()
            return categoryNews.filter((news) => {
             let newsDate= new Date(news.date.slice(0,11)).toDateString()

              return today===newsDate? true: false;
            })
    }
   
    filteredNews= (!archive.current)? filterNews() : categoryNews
    const renderComponent= filteredNews.length ? true : false
    categoryCount.current[category]= filteredNews.length
    console.log(category,categoryCount.current[category] )

    return (
        <div className="flex flex-col items-center ">
            { renderComponent &&  <MainNews category={category} data={filteredNews[0]} fullnews= {categoryNews} /> }
            { renderComponent && <SubNews category={category} data={filteredNews.slice(1,5)} fullnews= {categoryNews} /> }
        </div>
    )
}

export default NewsCategory
