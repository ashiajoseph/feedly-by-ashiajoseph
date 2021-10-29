import React, {setState, useEffect, useState, useContext} from 'react'
import ReactDOM from "react-dom"
import { Input } from "@bigbinary/neetoui/v2";
import { Search } from "@bigbinary/neeto-icons";
import { categoryContext } from './categoryContext';
import { newsContext } from './Landing';

const SearchBar = ({openSearchBox,setOpenSearchBox}) => {
    const [keyword, setKeyword] = useState("")
    const {categoryCheckbox}= useContext(categoryContext)
    const newsDetails = useContext(newsContext)
    if(!openSearchBox) return <div></div>
   
    let searchList =[]
    const filteredCategoryList = Object.keys(categoryCheckbox.current).filter((category)=> categoryCheckbox.current[category])
    const category_array25= filteredCategoryList.map((category) => { return  [ category , newsDetails[category]]})
   
    category_array25.forEach(([category,array]) => {
      let obj= array.map(({title,url})=> { return {title,url,category, details: array} })
      searchList= searchList.concat(obj)
   } )
   

    
   const handleChange= (e) => {
        setKeyword(e.target.value)
    }

    return  ReactDOM.createPortal(      
        <div className="bg-gray-500	absolute inset-0 bg-opacity-40" onClick={()=> {setOpenSearchBox(false)}} >
            <div className=" w-4/12 fixed top-1/3 left-1/3 " onClick={(e)=> e.stopPropagation()}>
                <Input placeholder="Search for an article." prefix={<Search size={16} />} value={keyword} onChange={handleChange}/>
                
            </div>
        </div> , document.getElementById('portal') )
}

export default SearchBar
