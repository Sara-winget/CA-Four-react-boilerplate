import React, { useEffect } from 'react'
import './QuestionBox.css'
import { useState } from 'react'
import Result from './Result';
export default function QuestionBox({questions}) {
  const[QuesIndex,setQuesIndex]=useState(0);
  const[mode,setMode]=useState(true);
  const[highlight,setHighlight]=useState(false);
  const[score,setScore]=useState(0);
 const[result,showResult]=useState(false)
  const highRed=()=>{
setHighlight(true);
  }
  const highBlue=()=>{
    setHighlight(false);
  }
 const handelMode=()=>{
  setMode(!mode)
  }
const hadelAns=(isCorrect)=>{
    
    console.log(score)
    if(isCorrect)
    setScore(score+1);
   if(QuesIndex<questions.length-1)
    setQuesIndex(QuesIndex+1);
 else if (QuesIndex==questions.length-1){
  
 showResult(true);

}
}



  return (
 
    <div className="QuesBox" style={{backgroundColor:mode?'grey':'white'}}>
      <div className='header'>
        <div className='kalvium'><h3>Kalvium</h3></div>
        <div className='mode'><button onClick={handelMode}>{mode?<h3>light</h3>:<h3>dark</h3>}</button></div>
      </div>
    {result?<Result score={score} result={result}/>:
      <div className='quiz' >
      <div><h2>Question {QuesIndex+1} out of 5</h2></div>
      <div className='ques'style={{color:highlight?'red':'blue'}}><h2>{questions[QuesIndex].text}</h2></div>
       <div className='options'>{questions[QuesIndex].options.map((options)=>(
        <button key={options.id} onClick={()=>{hadelAns(options.isCorrect)}}>{options.text}</button>
       ))} </div>
       <div className='footer'>
  <button className='highlight'onClick={highRed}>highlight</button>
  <button className='highlight' onClick={highBlue}>remove highlight</button>
       </div>
      </div>
}
    </div>
  )
}
