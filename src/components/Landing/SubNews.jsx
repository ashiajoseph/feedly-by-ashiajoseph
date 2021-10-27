import React from 'react'

import MiniNews from './MiniNews'
function SubNews({category, data}) {
    //console.log(data)
    return (
        <div className="grid grid-cols-2 my-3 py-6 w-78 border-b-2 text-justify ">
           {  data.map(news => <MiniNews data={news}/>) 
           }   
        </div>
    )
}

export default SubNews
