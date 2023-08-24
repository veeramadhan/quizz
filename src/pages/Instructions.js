import React from 'react'
import { Link } from 'react-router-dom'
import { UseUserContext } from '../context/UserContext'

const Instructions = ()=>{

  const {startTimer} = UseUserContext();
  return (
      <center>
    <div className='display-5 p-4' >
     Instructions
</div>
   <ui className="list-group list-group-flush">
    <li className='list-group-item'>1.You are given 1 minutes to answer the questions.</li>
    <li className='list-group-item'>2.You are not allowed to skip the questions.</li>
    <li className='list-group-item'>3.All the questions must be answered</li>
    <li className='list-group-item'>4.You are not allowed to go back</li>
    <li className='list-group-item'>5.Score will be displayed at end.</li>
   </ui>
   <Link to="/quiz" className='display-5' style={{"textDecoration": "none",color: 'black' ,fontWeight:"normal"}} onClick={startTimer}>Start</Link>

     

    </center>
    
    
  )
} 
export default Instructions