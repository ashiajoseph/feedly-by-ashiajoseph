import React, {useState, useContext, useCallback} from 'react'
import ReactDOM from "react-dom"
import { Input } from "@bigbinary/neetoui/v2";
import { Search } from "@bigbinary/neeto-icons";
import { newsContext } from './newsContext';
import {Link} from 'react-router-dom'
import { debounce } from 'lodash';

const SearchBar = ({openSearchBox,setOpenSearchBox}) => {
    const [keyword, setKeyword] = useState("")
    const {categoryNews} = useContext(newsContext)
    const deb = useCallback( debounce((searchword) => {setKeyword(searchword) 
    
    },400),[])
    if(!openSearchBox) return <div></div>
   
    let searchList =[]

    const category_array25 = Object.keys(categoryNews.current).map((category) => { return  [ category , categoryNews.current[category]]})
    category_array25.forEach(([category,array]) => {
      let obj= array.map(({title,url, author, content,date, readMoreUrl})=> { return {title,url,category, author, content,date, readMoreUrl, details: array} })
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

    const handleMouseEnter= (e) => {
        e.target.className= "text-white my-1 bg-black p-2 rounded-sm bg-opacity-90"
    }
    const handleMouseLeave= (e) => {
        e.target.className= "text-black  my-1 bg-gray-200 p-2 rounded-sm"
    }
    const closeSearchBox = ( ) => {
        setKeyword("")
        setOpenSearchBox(false)

    }

    const bgColor = filterNews(searchList).length ? 'bg-gray-50' : null 
    return  ReactDOM.createPortal(      
        <div className="bg-gray-500	fixed inset-0 bg-opacity-40  " onClick={closeSearchBox}  >
            <div className=" w-4/12 fixed top-1/4 left-1/3 mx-auto"onClick={(e)=> e.stopPropagation()}>
           
                <Input placeholder="Search for an article." prefix={<Search size={16} />}  onChange={(e) => handleChange(e.target.value)}/>  
                <div className={`my-3  ${bgColor} p-3 rounded flex flex-col max-h-96 overflow-clip overflow-hidden overflow-y-auto`}>
                    {
                        filterNews(searchList).map(({title,url,category, author, content,date, readMoreUrl, details},index) => <Link to={{ pathname:`/article/${url.slice(33)}`,state: {img_src:"https://picsum.photos/id/164/520/260",category, title,url, author, content,date, readMoreUrl,fullnews:details }  }} className="text-black my-1 bg-gray-200 p-2 rounded-sm" onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter} key={index} onClick={closeSearchBox} >
                            {title}
                        </Link>)
                    }
                </div>            
            </div>
        </div> , document.getElementById('portal') )
}

export default SearchBar
