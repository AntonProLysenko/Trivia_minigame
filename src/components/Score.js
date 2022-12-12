import { useState } from "react";




export default function Score ({value}){
    // console.log(value)
    const [score,setScore] = useState(0)

    const handleIncrement=()=>{
            setScore(score + value)
    }

    const handleDecrement=()=>{
        setScore(score - value)
    }

    const handleReset=()=>{
        setScore(score - score)
    }

    return(
        <>
        <h1>Score:{score}</h1>
        <button className="decrease button-41" onClick = {handleDecrement}>Decrease</button>
        <button className="increase button-41" onClick={handleIncrement}>Increase</button>
        <button className="reset button-41" onClick={handleReset}>Reset</button>
        <br/>
        </>
    )
}