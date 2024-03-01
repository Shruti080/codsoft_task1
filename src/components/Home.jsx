import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
// import Link from 'react-router-dom'

const Home = () => {
  return (
    <div id="background">
    <div className='homeContainer' >
        <div>
            <h1>Quiz Maker</h1>
        </div><b><hr style={{fontSize:"30px"}}/></b>
        <div className="createBtn">
          <Link to="./CreateQuiz.jsx" style={{textDecoration:"none",color:"white"}}>Create Quiz</Link>
        </div>
        <div id='playBtn'>
        <Link to="./Instructions.jsx" style={{textDecoration:"none",color:"white"}}>Play</Link>
        </div>
        <div className='authBtns'>
        <Link to="./Login.jsx" className='btn' style={{textDecoration:"none",color:"white"}}>Login</Link>
        </div>
        <div className='authBtns'>
        <Link to="./Signup.jsx" className='btn' style={{textDecoration:"none",color:"white"}}>Sign-Up</Link>
        </div>
        <img src="../assests/quiz-img.jpg" alt="" />

    </div>
  </div>
  )
}

export default Home
