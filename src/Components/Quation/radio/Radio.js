

import Book from '../../Data/variables';
import React, {useState} from "react";
import "./Radio.css";
import Appstatic from "../Quation"


export default function RadioQuation(qtype) {
  
    const [answerLabel ,setAnswerLabel] = useState('')
    const [answerReady ,setAnswerReady] = useState(false)
    const [answerLabelStyle, setAnswerLabelSytle] = useState({})
    const [radioAns, setRadioAnswer] = useState("")
    const [mystyle, setMystyle] = useState({})

    // handles if radio button issues
  const handleRadioClick =(event)=>{
    setRadioAnswer(event.target.value)
    //console.log(Book.answer, event.target.value)  // ------------    some print out
  }

  const handleRadioSubmit = ()=>{
    if (qtype.answer === radioAns){
      setAnswerLabel('Good job! :)  -  ')
      Book.answer++
      setAnswerReady(true)
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

  function correct (){
      return qtype.answer === radioAns
  }



  return (
                        <form className='quationDiv' style={mystyle} onSubmit={handleRadioSubmit}>         
                          
                          <div className='mainQuationDiv'>
                            <p className='q'>{qtype.q}</p>
                          </div>


                          <div className='radioParentDiv'>
                            <label className='quationlabel a'>{qtype.choices[0]}
                            <input 
                                  type="radio" 
                                  id="Choice1" 
                                  name="contact" 
                                  value={qtype.choices[0]}
                                  onChange={handleRadioClick}
                                
                            />
                            </label>
    
                            <label className='quationlabel b'>{qtype.choices[1]}
                            <input 
                                  type="radio" 
                                  id="Choice2" 
                                  name="contact" 
                                  value={qtype.choices[1]}
                                  onChange={handleRadioClick}
                                
                            />
                            </label>
                            
                            <label className='quationlabel c'>{qtype.choices[2]}
                            <input 
                                  type="radio" 
                                  id="Choice3" 
                                  name="contact" 
                                  value={qtype.choices[2]}
                                  onChange={handleRadioClick}
                                
                            />
                            </label>
                          </div>
                          <div className="footer">
                              <br/>
                              <br></br>
                              {answerReady && <p style={answerLabelStyle}>{answerLabel} {qtype.answer === radioAns? radioAns:qtype.answer}</p>}
                              {!answerReady && <button className='nextq' onClick={handleRadioSubmit}> Submit answer {radioAns}</button>}
                          </div>
                        </form>
  )
}