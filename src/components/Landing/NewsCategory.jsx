import React from 'react'
import MainNews from './MainNews'
import SubNews from './SubNews'

const NewsCategory = ({category,categoryNews}) => {
    
    const renderComponent= categoryNews.length ? true : false   
    
    return (
        <div className="flex flex-col items-center ">
            { renderComponent &&  <MainNews category={category} data={categoryNews[0]}  /> }
            { renderComponent && <SubNews category={category} data={categoryNews.slice(1,5)}  /> }
        </div>
    )
}

export default NewsCategory
