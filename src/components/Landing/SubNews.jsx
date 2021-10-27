import React from 'react'

import MiniNews from './MiniNews'
function SubNews({category, data}) {
    //console.log(data[0])
    return (
        <div className="grid grid-cols-2 my-3 py-6 w-78 border-b-2 text-justify ">
           <MiniNews data={data[0]}/> 
           <MiniNews data={data[1]}/>    
           <MiniNews data={data[2]}/> 
           <MiniNews data={data[3]}/>      
        </div>
    )
}

export default SubNews
