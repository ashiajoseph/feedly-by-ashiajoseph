import React from 'react'
import Navbar from './Navbar'

const Container = ({children}) => {

    return (
        <div>
           <Navbar /> 
           <div className="container w-78 mx-auto">
           {children}
            </div>
        </div>
    )
}

export default Container
