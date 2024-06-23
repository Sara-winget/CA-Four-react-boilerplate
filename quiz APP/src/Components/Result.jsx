import React from 'react'
import './QuestionBox.css'
export default function Result({score,result}) {
  const playAgain=()=>{
    window.location="QuestionBox.jsx"
  }
  return (
    <div className='quiz' >
      <div className='items'>
      <h1>Final Results</h1>
      </div>
      <div className='items'><h2>{score} out of 5 correct- {score*20}%</h2></div>
      <div className='items'><button style={{backgroundColor:'red'}}onClick={playAgain}><h3> <strong>play Again</strong></h3></button>
    </div></div>
  )
}
