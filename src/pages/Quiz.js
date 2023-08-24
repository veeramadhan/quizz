import React from 'react'
import Border from '../components/Border'
import "./Quiz.css"
import { Questions } from './questions'
import { UseUserContext } from '../context/UserContext'
import { Link } from 'react-router-dom'
import Result from './Result'
import WithLabelExample from './progress'



const Quiz =()=>{

  const {index,next,value,onRadioChange,submit,time,inter} = UseUserContext()
  const {id,q,o1,o2} =Questions[index]
  return(
    <>
    
    {time.min !== 1 ?
    <div className='center'>
      <center className='display-5'>Quiz App</center>
    <Border>
      <div className='content'>
         <p>{id} - {q}</p>
        </div>
        <div className='content1'>
        <ul>
          <li>
            <label>
              <input type='radio'
              value={o1}
              checked={value===o1}
              onChange={onRadioChange}/>
              <span className='p-2 h-6'>{o1}</span>
            </label>
          </li>
          <li>
            <label>
              <input type='radio'
              value={o2}
              checked={value===o2}
              onChange={onRadioChange} />
              <span className='p-2 h-6'>{o2}</span>
            </label>
          </li>
          {/* <li>
            <label>
              <input type='radio'
              value={o3}
              checked={value===o3}
              onChange={onRadioChange} />
              <span className='p-2 h-6'>{o3}</span>
            </label>
          </li> */}
        </ul>
      
      </div>
      <div className='content3'>
        
        {index === Questions.length -1 ?  <Link to="/result" className="display-5" onClick={submit} style={{"textDecoration": "none"}}>Submit</Link> :
        <button className='btn btn-primary' onClick={next}> Next</button>  }
    
    
     
      </div>
      
      </Border>
      <WithLabelExample/>
      <div className="display-5"  style={{"textDecoration": "none", color: 'white' ,fontWeight:"normal"}} ><center>{time.min} : {time.sec}</center></div>
      </div> :
      <>
      {clearInterval(inter)}
       <Result/> 
       </>}
      </>
      
  )
}

export default Quiz