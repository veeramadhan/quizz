import React from 'react'
import { UseUserContext } from '../context/UserContext'
import { Questions } from './questions'

const Result =()=>{

  const{mark}=UseUserContext();

  return(
    <div className='display-5 p-5'>
      <center>
      Your Mark Is {mark} / {Questions.length}
      </center>
    </div>
  )
}

export default Result