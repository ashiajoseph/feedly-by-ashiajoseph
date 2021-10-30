import React,{useState, useContext} from 'react'
import MainNews from './MainNews'
import SubNews from './SubNews'
import { filterContext } from '../filterContext';

const NewsCategory = ({category,categoryNews}) => {
    
    const renderComponent= categoryNews.length ? true : false   

    return (
        <div className="flex flex-col items-center ">
            { renderComponent &&  <MainNews category={category} data={categoryNews[0]} fullnews= {categoryNews} /> }
            { renderComponent && <SubNews category={category} data={categoryNews.slice(1,5)} fullnews= {categoryNews} /> }
        </div>
    )
}

export default NewsCategory
