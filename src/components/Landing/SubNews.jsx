import React from 'react'
import MiniNews from './MiniNews'
const SubNews= ({category, data, fullnews}) => {
    return (
        <div className="flex flex-row flex-wrap my-3 py-6 border-b-2 justify-between">
           {  data.map((news,index) => <MiniNews key={index} data={news} category={category} fullnews= {fullnews}/>) 
           }   
        </div>
    )
}

export default SubNews
