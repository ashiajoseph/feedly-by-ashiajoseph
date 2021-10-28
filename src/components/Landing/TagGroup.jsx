import React, {useContext} from 'react'
import { categoryContext } from '../categoryContext';
import { Tag } from "@bigbinary/neetoui/v2";
import TagItem from './TagItem';


const TagGroup = () => {
    const {categoryCheckbox,toggleFilter}= useContext(categoryContext)
    const filteredCategories= Object.keys(categoryCheckbox.current).filter((category) => categoryCheckbox.current[category])

    const handleClose= (category) => {
        categoryCheckbox.current[category]= false
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
