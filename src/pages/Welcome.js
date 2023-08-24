import React from 'react'
import {BsArrowDown} from "react-icons/bs"
import { Link } from 'react-router-dom'

function Welcome() {
  return (
    <>
    <div>
      <center className='display-3  p-5'>
        Welcome To The Quizz App
        <br></br>
        Click here to enter
        <br></br>
        <div className='display-3'>
          <BsArrowDown/>
        </div>
        <Link to="/instruction" className='display-5' style={{"textDecoration": "none", color: 'black' ,fontWeight:"normal"}}>Click Here</Link>
      </center>

    </div>
    </>
  )
}

export default Welcome