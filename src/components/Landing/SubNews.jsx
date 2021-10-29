import React from 'react'
import MiniNews from './MiniNews'
const SubNews= ({category, data, fullnews}) => {
    let width= data.length ? "w-full" : " " 
    return (
        <div className={`flex flex-row flex-wrap my-3 py-6 border-b-2 justify-between ${width}`}>
           {  data.map((news,index) => <MiniNews key={index} data={news} category={category} fullnews= {fullnews}/>) 
           }   
        </div>
    )
}

export default SubNews