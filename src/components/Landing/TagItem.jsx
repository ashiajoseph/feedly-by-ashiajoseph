import React from 'react'
import { Tag } from "@bigbinary/neetoui/v2";

const TagItem = ({label, category, handleClose}) => {
    return (
        <div>
            <Tag
                label={label}
                onClose={()=> {handleClose(category)}}
                size="large"
                />
        </div>
    )
}

export default TagItem
