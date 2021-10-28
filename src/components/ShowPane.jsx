import React, {useState} from 'react'
import { Pane } from "@bigbinary/neetoui/v2";
import { Check } from "@bigbinary/neeto-icons";
import { Typography, Button} from "@bigbinary/neetoui/v2";
import  CategoryCheckbox from './CategoryCheckbox';

const ShowPane = ({showPane,setShowPane}) => {
    

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
            {/* <div className="ml-4">
                {Object.keys(categoryCheckbox).map((id,index) => <CategoryCheckbox key={index} id={id} checked={categoryCheckbox[id]} toggleCheckbox={toggleCheckbox}/> )}
            </div> */}
            </Pane.Body>
            <Pane.Footer className="flex items-center space-x-4 border-t-2 neeto-ui-text-gray-300 ">
            <Button
                icon={Check}
                size="large"
                label="Save Changes"
                onClick={() => setShowPane(false)}
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
