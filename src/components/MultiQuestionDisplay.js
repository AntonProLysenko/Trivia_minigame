import AnswerDisplay from "./AnswerDisplay"
// import { useState } from "react";
// import Score from "./Score";







// export default function Score ({value}){
//     // console.log(value)
//     const [score,setScore] = useState(0)

//     const handleIncrement=()=>{
//             setScore(score + value)
//     }

//     const handleDecrement=()=>{
//         setScore(score - value)
//     }

//     const handleReset=()=>{
//         setScore(score - score)
//     }

//     return(
//         <>
//         <h1>Score:{score}</h1>
//         <button onClick = {handleDecrement}>Decrease</button>
//         <button onClick={handleIncrement}>Increase</button>
//         <button onClick={handleReset}>Reset</button>
//         <br/>
//         </>
//     )
// }








export default function MultiQuestionDisplay({question}){
    

  
    const loaded= ()=>{
        // console.log(question)
        let questions = question.map((result,idx)=>{

            const {question , answer, value} = result

            return(
                <div className="question" key = {idx}>
                    <ul>
                     <li>
                         <p><span className="title">Question:</span>{question} </p>
                         <p><span className="title">Value:</span>{value} </p>
                         <AnswerDisplay answer = {answer}/>
                         {/* <Score value = {value} /> */}
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
                        {/* <Score/> */}
                        {loaded()}
                    </div>
    : <></>    
}