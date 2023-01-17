import './App.css';
import { useState } from "react";

import GameDisplay from "./components/GameDisplay"
import MultiQuestionDisplay from "./components/MultiQuestionDisplay"


function App() {

  const[question, setQuestion] = useState()
  const[multiQuest, setMultiQuest] = useState()
  const [score,setScore] = useState(0)

  const getQuestion = async()=>{
    const response = await fetch(" https://jservice.io/api/random")
    const data = await response.json()
    setQuestion(data)
    console.log(data)
    // console.log(data[0].question)
    // console.log(data[0].value)
  }


  const getMultiQuest = async()=>{
    const multiResponse = await fetch ("https://jservice.io/api/random?count=10")
    const multiData = await multiResponse.json()
    setMultiQuest(multiData)
    // console.log(multiData)
  }


    const handleIncrement=(evt)=>{

      console.log(evt.target);
      
       let quest; 
        multiQuest&&(
        quest = multiQuest.find(quest=>{
        return quest.id === parseInt(evt.target.value)
        }))

        setScore(
      
          multiQuest?
        
          score + quest.value
          :
          score + question[0].value
          
        )
    }
  

    const handleDecrement=(evt)=>{

      let quest; 
      multiQuest&&(
        quest = multiQuest.find(quest=>{
        return quest.id === parseInt(evt.target.value)
        }))
    setScore(   multiQuest?
        
      score - quest.value
      :
      score - question[0].value)
    }

    const handleReset=()=>{
    setScore(0)
    }   

  return (
    <div className="App">
      
       {!multiQuest && <div> 
        <GameDisplay question = {question} score = {score} handleIncrement = {handleIncrement} handleDecrement = {handleDecrement} handleReset = {handleReset}/>
        <button onClick={getQuestion}>Get Question</button>
      </div>}
     


      <MultiQuestionDisplay className = "game" question = {multiQuest}  score = {score} handleIncrement = {handleIncrement} handleDecrement = {handleDecrement} handleReset = {handleReset}/>
      {!multiQuest &&  <button onClick={getMultiQuest}>Get 10 Questions</button>}
   
     
    </div>
  );
}

export default App;
