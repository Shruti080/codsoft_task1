import React from 'react'
import { Link } from 'react-router-dom'
import Play from './Play'

const Instructions = () => {
  return (
    <div style={{border:"3px solid blue", justifyContent:"center",width:"55%",marginLeft:"270px",marginTop:"50px",padding:"15px",backgroundColor:"lightblue"}}>
      <h2 style={{textAlign:"center"}}>How to Play this game?</h2><hr />
      <p>*Ensure to read instructions before you play!</p>
      <ul>
        <li>Game has a duration of 15 min and ends as soon as your time elapses.</li>
        <li>Each game consist of 15 questions.</li>
        <li>Every question containes 4 options.</li>
        <li>Select correct option by clicking on it.</li>
        <li>Each game has 2 lifelines
          <ul>
          <li>2 50-50 chances</li>
          <li>5 hints</li>
          </ul>
        </li>
        <li>The timer starts as soon as the game loads</li>
        <li>Feel free to quite the game anytime you want. It will show your score afterwords.</li>
      </ul>
      <span>So are you ready to play Quiz?</span><br /><br />
      <Link to="/Play.jsx" >let's Play!!!</Link>
      <Link to="/" style={{float:"right"}}>No, take back to Home</Link>
    </div>
  )
}

export default Instructions
