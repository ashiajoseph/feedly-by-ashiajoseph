import React, { createContext, useState, useRef }from "react"


const categoryContext = createContext()

const CategoryProvider = ({children}) => {
    const categoryCheckbox = useRef({all: false, automobile: false, business: true, entertainment: false,national: true,politics: false, science: false, startup: false, sports: true, technology:false,  world: true   })
    const [save, toggleSave]= useState(true)
    return (
        <categoryContext.Provider value={[categoryCheckbox,toggleSave, save]} >
          {children}
        </categoryContext.Provider>
      );
}
export {categoryContext, CategoryProvider}
