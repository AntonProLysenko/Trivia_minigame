import AnswerDisplay from "./AnswerDisplay"
import Score from './Score';

export default function GameDisplay ({question, score ,handleIncrement, handleDecrement, handleReset}){

    // const loaded = () =>{
    // return(
    //     <>  
    //         <Score value = {question[0].value}/>
    //         <p><span className='title'>Question:</span> {question[0].question}</p>
    //         <p><span className='title'>Category:</span> {question[0].category.title}</p>
    //         <p><span className='title'>Points: </span>{question[0].value}</p>
    //         <AnswerDisplay answer = {question[0].answer}/>
    //         <br/>
           
    //     </>
    // )
    // }

    // const loading = () =>{
    //     return <h1>Click to get a question</h1>
    // }


    // return question? loaded():loading()

    return(
        <>
            {question&&
            
                    <div className = "singleGame">  
                        <Score score = {score} value = {question[0].value} handleIncrement = {handleIncrement} handleDecrement = {handleDecrement} handleReset = {handleReset}/>
                        <p><span className='title'>Question:</span> {question[0].question}</p>
                        <p><span className='title'>Category:</span> {question[0].category.title}</p>
                        <p><span className='title'>Points: </span>{question[0].value}</p>
                        <AnswerDisplay answer = {question[0].answer}/>
                    </div>
            }

            {!question &&
                    <h1>Click to get a question</h1> }
        </>
     )
}




