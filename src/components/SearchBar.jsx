import React, {useState, useEffect, useContext, useCallback} from 'react'
import ReactDOM from "react-dom"
import { Input } from "@bigbinary/neetoui/v2";
import { Search,Close,Right } from "@bigbinary/neeto-icons";
import { categoryContext } from './categoryContext';
import { newsContext } from './Landing';
import {Link} from 'react-router-dom'
import { debounce } from 'lodash';

const SearchBar = ({openSearchBox,setOpenSearchBox}) => {
    const [keyword, setKeyword] = useState("")
    const {categoryCheckbox}= useContext(categoryContext)
    const newsDetails = useContext(newsContext)
    const deb = useCallback( debounce((searchword) => {setKeyword(searchword) 
    
    },500),[])
    if(!openSearchBox) return <div></div>
   
    let searchList =[]

    const filteredCategoryList = Object.keys(categoryCheckbox.current).filter((category)=> categoryCheckbox.current[category])
    const category_array25= filteredCategoryList.map((category) => { return  [ category , newsDetails[category]]})
   
    category_array25.forEach(([category,array]) => {
      let obj= array.map(({title,url,category, author, content,date, readMoreUrl,})=> { return {title,url,category, author, content,date, readMoreUrl, details: array} })
      searchList= searchList.concat(obj)
   } )

    const filterNews= (searchList) => {    
        let filteredList= []
        if(keyword)
            filteredList= searchList.filter(({title}) => title.toLowerCase().includes(keyword))
        return filteredList
   }

   
     
   const handleChange= (searchword) => {
        deb(searchword.toLowerCase())
     }

    const handleClose= () => {
        setKeyword("")
        setOpenSearchBox(false)
    }
    const handleMouseEnter= (e) => {
        e.target.className= "text-white my-1 bg-black p-2 rounded-sm bg-opacity-90"
    }
    const handleMouseLeave= (e) => {
        e.target.className= "text-black  my-1 bg-gray-200 p-2 rounded-sm"
    }
    const bgColor = filterNews(searchList).length ? 'bg-gray-50' : null 
    return  ReactDOM.createPortal(      
        <div className="bg-gray-500	fixed inset-0 bg-opacity-40  "  >
            <div className=" w-4/12 fixed top-1/4 left-1/3 mx-auto" >
                <button><Close className="cursor-pointer absolute left-full top-5 	" size={28} onClick={handleClose}/></button>
                <Input placeholder="Search for an article." prefix={<Search size={16} />}  onChange={(e) => handleChange(e.target.value)}/>  
                <div className={`my-3  ${bgColor} p-3 rounded flex flex-col max-h-96 overflow-clip overflow-hidden overflow-y-auto`}>
                    {
                        filterNews(searchList).map(({title,url,category, author, content,date, readMoreUrl, details},index) => <Link to={{ pathname:`/article/${url.slice(33)}`,state: {img_src:"https://picsum.photos/id/164/520/260",category, title,url,category, author, content,date, readMoreUrl,fullnews:details }  }} className="text-black my-1 bg-gray-200 p-2 rounded-sm" onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter} key={index}>
                            {title}
                        </Link>)
                    }
                </div>            
            </div>
        </div> , document.getElementById('portal') )
}

export default SearchBar
//{ filteredList.map((news,index) => <h4 key={index}> {news.title}</h4> )}
//onClick={(e)=> e.stopPropagation()}
//onClick={()=> {setOpenSearchBox(false)}}