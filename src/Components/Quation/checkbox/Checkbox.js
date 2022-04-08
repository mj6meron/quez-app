import React, {useState} from "react";
import Book from "../../Data/variables";
import "./Checkbox.css";

export default function CheckboxQuation(qtype) {
  
  const [answerLabel ,setAnswerLabel] = useState('')
  const [answerReady ,setAnswerReady] = useState(false)
  const [answerLabelStyle, setAnswerLabelSytle] = useState({})
  const [mystyle, setMystyle] = useState({})
  let checkboxListState = [
    [qtype.choices[0], false],
    [qtype.choices[1], false], 
    [qtype.choices[2], false]
   ]


   const handleCheckbox = event =>{
        //console.log(event.target.value)
        switchCheckState(event.target.value)
    }

    function switchCheckState (word){
        checkboxListState.forEach(x=>{
        if (x[0] === word){
            if ( x[1]) { x[1] = false} else {x[1] = true}
        }
        })
    }

  const handleNextFromCheckbox = () => {
      if (IsCheckBoxAnswered()) {
    // ---------------------------  when checkbox is answered
      setAnswerLabel("Great Job!")
      setAnswerReady(true)
      Book.answer++
      setMystyle(Book.rightAnswers)
      setAnswerLabelSytle(Book.rightAnswerLabel)
      } else {
    // -------------------------    when checkbox is not answered
        setAnswerLabel("Incorrect answer  -  The answer is: ")
        setAnswerReady(true)
        setMystyle(Book.wrongAnswers)
        setAnswerLabelSytle(Book.wrongAnswerLabel)
      }

    Book.c++
  }


    const IsCheckBoxAnswered =()=>{
        let final = []
        let found = 0
        checkboxListState.forEach(h=>{if (h[1]===true){ final.push ( h[0])}})
        let a = final.sort()
        let b = qtype.answer.sort()
        if (JSON.stringify(a)==JSON.stringify(b)){ 
          return true
        } else { 
          return false
        }
      }


  return (
    
                      <form className="quationDiv" style={mystyle} name="myWebForm" action="mailto:youremail@email.com" method="post" key={Book.myKey++}>
                          <div className="mainQuationDiv">
                            <p className='q'>{qtype.q}</p>
                          </div>
                          <div className="checkboxParentDiv">
                            <label className='quationlabel a'>{qtype.choices[0]}<input onChange={handleCheckbox} type="checkbox" name="sports" value={qtype.choices[0]}  /></label> 
                            <label className='quationlabel b'>{qtype.choices[1]}<input onChange={handleCheckbox} type="checkbox" name="sports" value={qtype.choices[1]} /></label> 
                            <label className='quationlabel c'>{qtype.choices[2]}<input onChange={handleCheckbox} type="checkbox" name="sports" value={qtype.choices[2]} /></label> 
                          </div>
                          <div className="footer">
                              {answerReady && <p style={answerLabelStyle}>{answerLabel}</p>}
                              {!answerReady && <button className='nextq' onClick={handleNextFromCheckbox}>Submit</button>}
                          </div>
                    </form>
  )
}




