import React from 'react'
import { Checkbox } from "@bigbinary/neetoui/v2";

const CategoryCheckbox = ({id,toggleCheckbox, checked}) => {
    const label= id[0].toUpperCase()+ id.slice(1).toLowerCase()
    const handleChange = (e) => {
        const {id,checked}= e.target
        toggleCheckbox( prev => {
            return {...prev,[id]: checked}})
    }
    return (
        <div className="my-6 neeto-ui-text-gray-700
        ">
            <Checkbox 
                id={id}
                label={label}
                checked={checked}
                onChange={ handleChange}/>
        </div>
    )
}

export default CategoryCheckbox
