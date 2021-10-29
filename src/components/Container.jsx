import React from 'react'
import Navbar from './Navbar'

const Container = ({children}) => {

    return (
        <>
           <Navbar /> 
           <div className="container w-78 mx-auto">
           {children}
            </div>
        </>
    )
}

export default Container
