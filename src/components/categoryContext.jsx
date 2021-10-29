import React, { createContext, useState, useRef }from "react"

const categoryContext = createContext()

const CategoryProvider = ({children}) => {
    const categoryCheckbox = useRef({all: false, automobile: false, business: true, entertainment: false,national: true,politics: false, science: false, startup: false, sports: true, technology:false,  world: true   })
    const categoryCount=  useRef({all: 0, automobile: 0, business: 0, entertainment: 0,national: 0,politics: 0, science: 0, startup: 0, sports: 0, technology:0,  world: 0   })
    const archive = useRef(false)
    const [filter, toggleFilter]= useState(false)

    const getCategoryCount = () =>{ let count =Object.values(categoryCount.current).reduce((a,b) => a + b, 0)
    return count}

    return (
        <categoryContext.Provider value={{categoryCheckbox,toggleFilter, filter, archive, categoryCount,getCategoryCount }} >
          {children}
        </categoryContext.Provider>
      );
}
export {categoryContext, CategoryProvider}
