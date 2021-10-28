import React,{useState, useContext} from 'react'
import MainNews from './MainNews'
import SubNews from './SubNews'
import { categoryContext } from '../categoryContext';


const NewsCategory = ({category,categoryNews}) => {
    const {categoryCheckbox,archive}= useContext(categoryContext)

    const filterNews= () => {
        let today= new Date().toDateString()
            return categoryNews.filter((news) => {
             let newsDate= new Date(news.date.slice(0,11)).toDateString()

              return today===newsDate? true: false;
            })
    }
   
    const filteredNews= (!archive.current)? filterNews() : categoryNews
    const renderComponent= filteredNews.length ? true : false
    return (
        <div className="flex flex-col items-center ">
            { renderComponent &&  <MainNews category={category} data={filteredNews[0]} fullnews= {categoryNews} /> }
            { renderComponent && <SubNews category={category} data={filteredNews.slice(1,5)} fullnews= {categoryNews} /> }
        </div>
    )
}

export default NewsCategory
