import React from 'react'
import { Typography} from "@bigbinary/neetoui/v2"
import {Link} from 'react-router-dom'
function MiniNews({data}) {
    const img_src= "https://picsum.photos/"
    return (
        <div className="flex flex-row my-3 ">
                <div className=""><img src={`${img_src}100`} alt=""/></div>
                <div className="flex flex-col w-2/3 ml-5">
                    <Typography style="h5" className="neeto-ui-text-gray-700 tracking-wide	">
                        {data.title}
                    </Typography>
                    <Typography style="h5" className="neeto-ui-text-gray-500 mt-2">
                         {`${data.author} at ${data.time} on ${data.date}`} 
                    </Typography>
                    
                    <Link to={{ pathname: "/article",state: {img_src:`${img_src}550/300`, ...data}  }} className="mt-2 text-read_more">Read More</Link>
  
                    
                </div>
            </div>
    )
}

export default MiniNews
