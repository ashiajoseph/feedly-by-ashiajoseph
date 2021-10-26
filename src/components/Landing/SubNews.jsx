import React from 'react'

import MiniNews from './MiniNews'
function SubNews({category, data}) {
    //console.log(data[0])
    return (
        <div className="grid grid-cols-2 py-6 w-4/5 border-b-2">
           <MiniNews data={data[0]}/> 
           <MiniNews data={data[1]}/>    
           <MiniNews data={data[2]}/> 
           <MiniNews data={data[3]}/>      
        </div>
    )
}

export default SubNews
