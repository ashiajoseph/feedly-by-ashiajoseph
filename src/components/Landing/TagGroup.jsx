import React, {useContext} from 'react'
import TagItem from './TagItem';
import { filterContext } from '../filterContext';
import { newsContext } from '../newsContext';
const TagGroup = () => {
    const {categoryCheckbox,toggleFilter, categoryCount}= useContext(filterContext)
    const {categoryNews} = useContext(newsContext)
    const filteredCategories= Object.keys(categoryCheckbox.current).filter((category) => categoryCheckbox.current[category])

    const handleClose= (category) => {
        categoryCheckbox.current[category]= false
        categoryCount.current[category]= 0
        categoryNews.current[category]= []
        toggleFilter((prev)=> !prev)

    }
    return (
        <div className="flex">
            { 
                filteredCategories.map((category,index)=> { 
                let label= category[0].toUpperCase() + category.slice(1)
                return (<div key={index} className="mx-2">
                    <TagItem label={label} category={category} handleClose={handleClose}/>
                </div>)
                })
            }
        </div>
    )
}

export default TagGroup



