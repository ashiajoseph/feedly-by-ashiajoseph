import React, {useState} from 'react'
import { Typography, Button, Tooltip} from "@bigbinary/neetoui/v2";
import { Search, Filter, Notification } from "@bigbinary/neeto-icons";
import ShowPane from './ShowPane.jsx'
import { Subscribe } from './Subscribe.jsx';
import SearchBar from './SearchBar.jsx';
import { useHistory } from 'react-router-dom';

const Navbar= ()=>{
    const [showPane, setShowPane] = useState(false);
    const [showSubscribeModal , setShowSubscribeModal] = useState(false);
    const [ openSearchBox, setOpenSearchBox]= useState(false)
    const history = useHistory() 

    const handleClick = () => {
        history.push('/')
    }
    return (
        <div className="flex flex-row justify-between border-b-2 border-opacity-75 mb-5">
            <div className="p-3 m-2 ">
            <Typography style="h4" weight="semibold" className="neeto-ui-text-gray-500 cursor-pointer" onClick={handleClick}>
            Feed.ly
            </Typography>
            </div>
            <div className="flex flex-row items-center ">
                <Tooltip placement={"bottom-start"} content={"Search"}> 
                    <button><Search className="mr-5 cursor-pointer" onClick={()=> {setOpenSearchBox(!openSearchBox)}}/></button>
                </Tooltip>
                <Tooltip placement={"bottom-start"} content={"Subscribe"}>
                    <button><Notification className="mr-5 cursor-pointer" onClick={()=> {setShowSubscribeModal(true)}}/></button>
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
              <Subscribe showSubscribeModal={showSubscribeModal} setShowSubscribeModal={setShowSubscribeModal}/>
              <SearchBar openSearchBox={openSearchBox} setOpenSearchBox={setOpenSearchBox}  />
            </div>
        </div> 
 
    )
}

export default Navbar

