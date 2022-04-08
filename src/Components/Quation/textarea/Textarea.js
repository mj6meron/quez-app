import React, {useState} from "react";
import Book from "../../Data/variables";
import "./Textarea.css";

export default function TextareaQuation(qtype) {  

    const [answerLabel ,setAnswerLabel] = useState('')
    const [answerReady ,setAnswerReady] = useState(false)
    const [mystyle, setMystyle] = useState({})
    const [answerLabelStyle, setAnswerLabelSytle] = useState({})

    const [noteValue, setNoteValue] = useState("")
    const handleNoteChanges = (event) => {
    setNoteValue(event.target.value)
    }

    const handleTextareaSubmit = () => {
        if (qtype.answer.toLocaleLowerCase() === noteValue.toLocaleLowerCase()){
        setAnswerLabel('Good job!   -    ')
        setAnswerReady(true)
        Book.answer++
        setMystyle(Book.rightAnswers)
        setAnswerLabelSytle(Book.rightAnswerLabel)

        } else {  
        setAnswerReady(true)
        setAnswerLabel('Incorrect answer  -  The answer is: ')
        setMystyle(Book.wrongAnswers)
        setAnswerLabelSytle(Book.wrongAnswerLabel)
        }
        Book.c++
    }

  return (
    <div className='quationDiv' style={mystyle}>
                    <form name="myWebForm" className='textin' action="mailto:youremail@email.com" method="post" >
                            <div className="mainQuationDiv">
                                  <p className='q'>{qtype.q}</p>
                            </div>

                            <div className="textfieldParentDiv">
                                  <p> Your Answer </p>
                                  {!answerReady && <textarea type='text' value={noteValue} onChange={handleNoteChanges}></textarea> } 
                            </div>
                            <div className="footer">
                                <label  className=''>
                                {answerReady && <p>{noteValue}</p>}
                                </label>
                            </div>
            </form>
            <br></br>
                {answerReady && <p style={answerLabelStyle}>{answerLabel}{qtype.answer.toLocaleLowerCase() === noteValue.toLocaleLowerCase()? noteValue:qtype.answer}</p>}
                {!answerReady && <button className='nextq' onClick={handleTextareaSubmit}>Submit</button>}
    </div>
  )
}



