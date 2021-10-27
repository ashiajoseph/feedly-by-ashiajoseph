import React from 'react'

import MiniNews from './MiniNews'
function SubNews({category, data}) {
    //console.log(data)
    return (
        <div className="grid grid-cols-2 my-3 py-6 w-78 border-b-2 ">
           {  data.map((news,index) => <MiniNews key={index} data={news}/>) 
           }   
        </div>
    )
}

export default SubNews
