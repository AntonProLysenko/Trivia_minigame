import AnswerDisplay from "./AnswerDisplay"
import { useState } from "react";

export default function MultiQuestionDisplay({question, score, handleIncrement, handleDecrement, handleReset}){

//export default function MultiQuestionDisplay({question}){

     //const [score,setScore] = useState(0)

    const loaded= ()=>{
        // console.log(question)
        let questions = question.map((result,idx)=>{

            
            const {question , answer, value, category} = result


            // const handleIncrement=(evt)=>{

            //     console.log(evt.target);
                
            //     setScore(score + value)
            // }
          
            // const handleDecrement=()=>{
            //     setScore(score - value)
            // }
        
            // const handleReset=()=>{
            //     setScore(0)
            // }

            return(
                <div className="question" key = {idx}>
                   
                    <ul>
                     <li>
                         <p><span className="title">Question:</span>{question} </p>
                         <p><span className="title">Value:</span>{value} </p>
                         <p><span className='title'>Category:</span> {category.title}</p>
                         <AnswerDisplay answer = {answer}/>
                         <br/>
                         <button className="decrease " value = {result.id} onClick = {handleDecrement}>Decrease</button>
                         <button className="increase " value = {result.id} onClick={handleIncrement}>Increase</button>
                         <button className="reset" onClick={handleReset}>Reset</button>
                        
                         </li>
                        <br/>
                    </ul>
                </div>
            )
        })
        return questions
    }

    return question? 
                    <div>
                         <h1>Score:{score}</h1>
                        {/* <Score/> */}
                        {loaded()}
                    </div>
    : <></>    
}