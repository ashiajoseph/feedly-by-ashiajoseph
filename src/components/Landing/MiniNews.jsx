import React from 'react'
import { Typography} from "@bigbinary/neetoui/v2"
import {Link} from 'react-router-dom'
function MiniNews({data}) {
    return (
        <div className="flex flex-row my-3 ">
                <div className=""><img src="https://picsum.photos/100" alt=""/></div>
                <div className="flex flex-col w-2/3 ml-5">
                    <Typography style="h5" className="neeto-ui-text-gray-700 ">
                        {data.title}
                    </Typography>
                    <Typography style="h5" className="neeto-ui-text-gray-500 mt-2">
                         {`${data.author} at ${data.time} on ${data.date}`} 
                    </Typography>
                    
                    <Link to="" className="mt-2 text-read_more">Read More</Link>
                    
                </div>
            </div>
    )
}

export default MiniNews
