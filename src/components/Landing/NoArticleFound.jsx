import React,{useContext} from 'react'
import NoNews from './NoNews'
import SubNews from './SubNews'
import { newsContext} from '../newsContext'

const NoArticleFound = () => {
    const {news}= useContext(newsContext)


    return (
        <>
            <NoNews />
            <div className="flex flex-col items-center ">
              <SubNews category='all' data={news['all'].slice(2,6)}  /> 
            </div>           
        </>
    )
}

export default NoArticleFound
