import React,{useEffect} from 'react'
import { Typography} from "@bigbinary/neetoui/v2"
import {Link} from 'react-router-dom'
const MainNews= ({category,data,fullnews}) => {
    const heading =  category[0].toUpperCase()+ category.slice(1).toLowerCase()

    useEffect(()=> {

    },[data])
    return (
        <div className=" mt-10  border-b-2 ">
            <Typography style="h2" className="neeto-ui-text-gray-800">
                {`${heading} News`}
            </Typography>
            <div className="flex flex-row my-6 justify-between ">
                <div className="w-1/2"><img src="https://picsum.photos/id/164/520/260" alt=""/></div>
                <div className="flex flex-col  w-1/2 mr-2">
                    <Typography style="h3" className="neeto-ui-text-gray-700 mt-2 tracking-wide	leading-8">
                        {data.title}
                    </Typography>
                    <Typography style="body2" className="neeto-ui-text-gray-500 self-end mt-3">
                         {`${data.author} at ${data.time} on ${data.date}`} 
                    </Typography>
                    <Typography style="body2" className="neeto-ui-text-gray-700 mt-3 text-justify	">
                         {data.content.slice(0,300)}..... 
                    </Typography>
                    
                    <Link to={{ pathname:`/article/${data.url.slice(33)}`,state: {img_src:"https://picsum.photos/id/164/520/260",category, ...data,fullnews}  }} className="mt-3 text-read_more">Read More</Link>
                    
                </div>
            </div>
        </div>
    )
}

export default MainNews
