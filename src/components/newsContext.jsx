import React, { createContext, useState, useRef }from "react"

const newsContext = createContext()

const NewsProvider = ({children}) => {
    const [news,setNews] = useState({})
    const categoryNews = useRef({})
    
    return (
        <newsContext.Provider value={{news,setNews,categoryNews}} >
          {children}
        </newsContext.Provider>
      );
}
export {newsContext, NewsProvider}
