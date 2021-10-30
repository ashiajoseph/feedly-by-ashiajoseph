import React, {useState, useContext} from 'react'
import { Checkbox } from "@bigbinary/neetoui/v2";
import { filterContext } from './filterContext';

const CategoryCheckbox = ({id, checkGroup, archivetemp}) => {
    const {categoryCount}= useContext(filterContext)
    const  initialCheckedValue = (id === 'include archived articles')? archivetemp.current : checkGroup[id];
    const [check,toggle] = useState(initialCheckedValue)
    const label= id[0].toUpperCase()+ id.slice(1).toLowerCase()
    

    const handleChange = (e) => {
        const {id,checked}= e.target
        if(id==='include archived articles')
            archivetemp.current= checked
    
        else
           { categoryCount.current[id]= checked? 1 :0;
            checkGroup[id] = checked
              }
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