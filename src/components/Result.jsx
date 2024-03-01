import React from 'react'
import './Result.css'

const Result = () => {
  return (
    <div className='container'>
        <h1 className='heading'>Hey well Done... You Passed the test!!!</h1><hr /><br />
        <p className='result'>Total number of Questions : 15</p>  
        <p className='result'>Time given : 15 minutes</p>
        <p className='result'>Number of questions attempted: 15 </p> 
        <p className='result'>Correct Answers : 13</p>
        <p className='result'>Total Score : 13/15</p>   
        <br /><br />
        <button id="btn" style={{backgroundColor:"blue",color:"white", borderRadius:"10px", padding:"10px"}}>Go back to Home page!</button>
    </div>
  )
}

export default Result
