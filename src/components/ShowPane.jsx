import React, {useState,useContext} from 'react'
import { Pane } from "@bigbinary/neetoui/v2";
import { Check } from "@bigbinary/neeto-icons";
import { Typography, Button} from "@bigbinary/neetoui/v2";
import  CategoryCheckbox from './CategoryCheckbox';
import { categoryContext } from './categoryContext';

const ShowPane = ({showPane,setShowPane}) => {
    const [categoryCheckbox, toggleSave, save]= useContext(categoryContext)
 
    return (
        <div>
            <Pane isOpen={showPane} onClose={() => setShowPane(false)}>
            <Pane.Header className="mt-4">
            <Typography style="h2" weight="semibold">
                Filter Articles
            </Typography>
            </Pane.Header>
            <Pane.Body>
            <Typography style="h4" weight="semibold" className="neeto-ui-text-gray-700">
                Category
            </Typography>
             <div className="ml-6">
                {Object.keys(categoryCheckbox.current).map((id,index) => <CategoryCheckbox key={index} id={id} /> )}
            </div> 
            <div className="ml-4 pl-2 border-t-2 neeto-ui-text-gray-300 w-90">
            <CategoryCheckbox  id={'include archived articles'}/>
            </div>
            </Pane.Body>
            <Pane.Footer className="flex items-center space-x-4 border-t-2 neeto-ui-text-gray-300 ">
            <Button
                icon={Check}
                size="large"
                label="Save Changes"
                onClick={() => { toggleSave(!save); setShowPane(false)}}
                className="mb-5"
            />
            <Button
                style="text"
                size="large"
                label="Cancel"
                onClick={() => setShowPane(false)}
                className="mb-5"
            />
            </Pane.Footer>
        </Pane>
        </div>
    )
}

export default ShowPane
