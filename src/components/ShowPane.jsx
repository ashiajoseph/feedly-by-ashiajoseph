import React, {useContext, useRef} from 'react'
import { useHistory } from 'react-router-dom';
import { Pane } from "@bigbinary/neetoui/v2";
import { Check } from "@bigbinary/neeto-icons";
import { Typography, Button} from "@bigbinary/neetoui/v2";
import  CategoryCheckbox from './CategoryCheckbox';
import { filterContext } from './filterContext';
import { newsContext } from './newsContext';

const ShowPane = ({showPane,setShowPane}) => {
    const {categoryCheckbox, toggleFilter, archive}= useContext(filterContext)
    const {categoryNews} = useContext(newsContext)
    let checkGroup = {...categoryCheckbox.current}
    let archivetemp =  useRef(archive.current)
    const history = useHistory() 

    const removeFromCategoryNews = () => {
           Object.keys(categoryCheckbox.current).filter(category => !categoryCheckbox.current[category]).map(category => {
            categoryNews.current[category] =[]   
           })
    }

    const handleSave = () => { 
        categoryCheckbox.current ={...checkGroup}
        archive.current= archivetemp.current
        removeFromCategoryNews()
        toggleFilter((prev)=> !prev)     
        setShowPane(false)
        history.push('/')
    }
    const handleCancel = () => { 
        archivetemp.current= archive.current
        setShowPane(false) }
    return (
        <>
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
                {Object.keys(categoryCheckbox.current).map((id,index) => <CategoryCheckbox key={index} id={id} checkGroup={checkGroup} archivetemp={archivetemp}/> )}
            </div> 
            <div className="ml-4 pl-2 border-t-2 neeto-ui-text-gray-300 w-90">
            <CategoryCheckbox  id={'include archived articles'} checkGroup={checkGroup} archivetemp={archivetemp}/>
            </div>
            </Pane.Body>
            <Pane.Footer className="flex items-center space-x-4 border-t-2 neeto-ui-text-gray-300 ">
            <Button
                icon={Check}
                size="large"
                label="Save Changes"
                onClick={handleSave}
                className="mb-5"
            />
            <Button
                style="text"
                size="large"
                label="Cancel"
                onClick={handleCancel}
                className="mb-5"
            />
            </Pane.Footer>
        </Pane>
        </>
    )
}

export default ShowPane
