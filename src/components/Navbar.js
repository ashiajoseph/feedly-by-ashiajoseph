import React from 'react'
import { Typography, Button} from "@bigbinary/neetoui/v2";
import { Search, Filter, Notification } from "@bigbinary/neeto-icons";


function Navbar() {
    const toggle= ()=> { console.log('icon ')}
    return (
        <div className="flex flex-row justify-between border-b-2 border-opacity-75">
            <div className="p-3 m-2">
            <Typography style="h4" weight="semibold" className="neeto-ui-text-gray-500">
            Feed.ly
            </Typography>
            </div>
            
        </div> 
    )
}

export default Navbar

