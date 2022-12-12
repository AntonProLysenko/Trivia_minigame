import './App.css';
import { useState } from "react";

import GameDisplay from "./components/GameDisplay"
import MultiQuestionDisplay from "./components/MultiQuestionDisplay"


function App() {

  const[question, setQuestion] = useState()
  const[multiQuest, setMultiQuest] = useState()

  const getQuestion = async()=>{
    const response = await fetch(" http://jservice.io/api/random")
    const data = await response.json()
    setQuestion(data)
    // console.log(data)
    // console.log(data[0].question)
    // console.log(data[0].value)
  }




  const getMultiQuest = async()=>{
    const multiResponse = await fetch ("http://jservice.io/api/random?count=10")
    const multiData = await multiResponse.json()
    setMultiQuest(multiData)
    // console.log(multiData)
  }

  return (
    <div className="App">
      
       {!multiQuest && <div> <GameDisplay question = {question}/>
      <button onClick={getQuestion}>Get Question</button></div>}
     


      <MultiQuestionDisplay className = "game" question = {multiQuest}/>
      {!multiQuest &&  <button onClick={getMultiQuest}>Get 10 Questions</button>}
   
     
    </div>
  );
}

export default App;
