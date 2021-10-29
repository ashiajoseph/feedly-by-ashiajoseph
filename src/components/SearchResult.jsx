
import React from 'react'
import {Link} from 'react-router-dom'

const SearchResult = () => {
    return (
        <Link to={{ pathname:`/article/${url.slice(33)}`,state: {img_src:"https://picsum.photos/id/164/520/260",category, title,url,category, author, content,date, readMoreUrl,fullnews:details }  }} className="text-black my-1 bg-gray-200 p-2 rounded-sm">{title}</Link>
    )
}

export default SearchResult
