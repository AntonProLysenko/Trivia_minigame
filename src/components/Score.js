export default function Score ({score, handleIncrement, handleDecrement, handleReset}){

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