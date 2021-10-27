import React,{ useRef } from 'react'
import { Typography} from "@bigbinary/neetoui/v2"
import {Link} from 'react-router-dom'
function MiniNews({category,data}) {
    //const numRef= useRef(Math.floor(Math.random() * 100 ))
    const img_src= `https://picsum.photos/id/33/`
    return (
        <div className="flex flex-row my-3 w-48 justify-around">
                <div className=""><img src={`${img_src}150/150`} alt="" className=""/></div>
                <div className="flex flex-col w-85 ml-5">
                    <Typography style="h5" className="neeto-ui-text-gray-700 tracking-wide mt-1	">
                        {data.title}
                    </Typography>
                    <Typography style="h5" className="neeto-ui-text-gray-500 mt-3">
                         {`${data.author} at ${data.time} on ${data.date}`} 
                    </Typography>
                    
                    <Link to={{ pathname: "/article",state: {img_src:`${img_src}550/300`,category, ...data}  }} className="mt-3 text-read_more">Read More</Link>
  
                    
                </div>
            </div>
    )
}

export default MiniNews
