import React from 'react'
import NoNews from './NoNews'
import SubNews from './SubNews'
const NoArticleFound = ({news}) => {
    return (
        <div>
            <NoNews />
            <div className="flex flex-col items-center ">
              <SubNews category='national' data={news['national'].slice(1,5)} fullnews= {news['national']} /> 
            </div>           
        </div>
    )
}

export default NoArticleFound
