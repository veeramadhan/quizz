import React from 'react'
import { UseUserContext } from '../context/UserContext'
import { Questions } from './questions'
import "./Result.css"
const Result =()=>{

  const{mark}=UseUserContext();

  return(
    <div className='res'>
      <center>
      Your Mark Is {mark} / {Questions.length}
     
      </center>
    </div>
  )
}

export default Result