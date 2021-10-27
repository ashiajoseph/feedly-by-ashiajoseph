import React from 'react'
import { Typography, Button} from "@bigbinary/neetoui/v2";
import { Search, Filter, Notification } from "@bigbinary/neeto-icons";


const Navbar= ()=>{
    const toggle= ()=> { console.log('icon ')}
    return (
        <div className="flex flex-row justify-between border-b-2 border-opacity-75 mb-5">
            <div className="p-3 m-2">
            <Typography style="h4" weight="semibold" className="neeto-ui-text-gray-500">
            Feed.ly
            </Typography>
            </div>
            <div className="flex flex-row items-center ">
                <Search className="mr-5 cursor-pointer" onClick={toggle}/>
                <Notification className="mr-5 cursor-pointer" onClick={toggle}/>                
                <Button
                onClick={()=> {}}
                size="large"
                label="Filter"
                style="secondary"
                icon={Filter}
                className= "mr-5"
              />
            </div>
        </div> 
    )
}

export default Navbar

