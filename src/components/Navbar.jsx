import React, {useState} from 'react'
import { Typography, Button, Tooltip} from "@bigbinary/neetoui/v2";
import { Search, Filter, Notification } from "@bigbinary/neeto-icons";
import ShowPane from './ShowPane.jsx'

const Navbar= ()=>{
    const [showPane, setShowPane] = useState(false);

    return (
        <div className="flex flex-row justify-between border-b-2 border-opacity-75 mb-5">
            <div className="p-3 m-2">
            <Typography style="h4" weight="semibold" className="neeto-ui-text-gray-500">
            Feed.ly
            </Typography>
            </div>
            <div className="flex flex-row items-center ">
                <Tooltip placement={"bottom-start"} content={"Search"}> 
                    <button><Search className="mr-5 cursor-pointer" onClick={()=> {}}/></button>
                </Tooltip>
                <Tooltip placement={"bottom-start"} content={"Subscribe"}>
                    <button><Notification className="mr-5 cursor-pointer" onClick={()=> {}}/></button>
                </Tooltip>              
                <Button
                onClick={() => setShowPane(true)}
                size="large"
                label="Filter"
                style="secondary"
                icon={Filter}
                className= "mr-5"
              />
              <ShowPane showPane={showPane} setShowPane={setShowPane} />
            </div>
        </div> 
    )
}

export default Navbar

