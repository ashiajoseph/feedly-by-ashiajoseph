import React, {setState, useState} from 'react'
import ReactDOM from "react-dom"
import { Input } from "@bigbinary/neetoui/v2";
import { Search } from "@bigbinary/neeto-icons";
const SearchBar = ({openSearchBox,setOpenSearchBox}) => {
    const [keyword, setKeyword] = useState("")
    if(!openSearchBox) return <div></div>

    return  ReactDOM.createPortal(
      
        <div className="bg-gray-500	absolute inset-0 bg-opacity-40" onClick={()=> {setOpenSearchBox(false)}} >
            <div className=" w-4/12 fixed top-1/3 left-1/3 " onClick={(e)=>e.stopPropagation()}>
                <Input placeholder="Search for an article." prefix={<Search size={16} />} value={keyword} onChange={(e)=>{ setKeyword(e.target.value)}}/>
            </div>
        </div> , document.getElementById('portal') )
}

export default SearchBar
