import React, { createContext, useState, useRef }from "react"


const categoryContext = createContext()

const CategoryProvider = ({children}) => {
    const categoryCheckbox = useRef({national: true,business: false, sports: true, world: false})
    const [save, toggleSave]= useState(true)
    return (
        <categoryContext.Provider value={[categoryCheckbox,toggleSave, save]} >
          {children}
        </categoryContext.Provider>
      );
}
export {categoryContext, CategoryProvider}
