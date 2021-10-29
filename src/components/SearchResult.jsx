import React from 'react'
import {Link} from 'react-router-dom'

const SearchResult = () => {
    return (
        <Link to={{ pathname:`/article/${data.url.slice(33)}`,state: {img_src:"https://picsum.photos/id/164/520/260",category, ...data,fullnews}  }} className="mt-3 text-read_more">Read More</Link>
    )
}

export default SearchResult
