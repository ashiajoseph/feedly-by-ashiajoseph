import React, {useState, useContext} from 'react'
import { Checkbox } from "@bigbinary/neetoui/v2";
import { categoryContext } from './categoryContext';

const CategoryCheckbox = ({id}) => {
    const [categoryCheckbox]= useContext(categoryContext)
    const [check,toggle] = useState(categoryCheckbox.current[id])
    const label= id[0].toUpperCase()+ id.slice(1).toLowerCase()
    const handleChange = (e) => {
        const {id,checked}= e.target
        categoryCheckbox.current[id] = checked
        toggle(checked)
    }
    return (
        <div className="my-6 neeto-ui-text-gray-700
        ">
            <Checkbox 
                id={id}
                label={label}
                checked={check}
                onChange={ handleChange}/>
        </div>
    )
}

export default CategoryCheckbox
