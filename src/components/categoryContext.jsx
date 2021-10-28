import React, { createContext, useState, useRef }from "react"


const categoryContext = createContext()

const CategoryProvider = ({children}) => {
    const categoryCheckbox = useRef({all: false, automobile: false, business: true, entertainment: false,national: true,politics: false, science: false, startup: false, sports: true, technology:false,  world: true   })
    const archive = useRef(true)
    const [filter, toggleFilter]= useState(false)
    return (
        <categoryContext.Provider value={[categoryCheckbox,toggleFilter, filter, archive]} >
          {children}
        </categoryContext.Provider>
      );
}
export {categoryContext, CategoryProvider}
