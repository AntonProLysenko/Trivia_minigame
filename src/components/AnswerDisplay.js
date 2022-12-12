import {useState} from 'react';

export default function AnswerDisplay ({answer}){



    const [isShown, setIsShown] = useState(false);

    const ShowAnswer = () =>{
       setIsShown(toggle => !toggle)
    }
    
        return(
            <>
                {isShown &&
                    <p><span className='title'>Answer:</span> {answer}</p>
                }

                <button onClick = {ShowAnswer}>Click to Reveal Answer</button>  
            </>
        )
}