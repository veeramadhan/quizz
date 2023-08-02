import React, { Children } from 'react'
import "./Border.css"

const Border =  (props) => {
    return (
        <>
        <div className='border'>
        {props.children}
        </div>
        </>
    )
}

export default Border