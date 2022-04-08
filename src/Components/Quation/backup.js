import './Quation.css';
import Qs from '../Data/QsData.js'
import {useState} from 'react'
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom"
function Quation() {
  let currentqObj = {}
  let qId = 0;
  const [noteValue, setNoteValue] = useState("")
  const [radioAns, setRadioAnswer] = useState("")
  const [checkAns, setCheckAnswer] = useState({})
  let allQuations = Qs().qs
  const [currentq, setcurrentq] = useState(0)

  const [answerLabel ,setAnswerLabel] = useState('')
  const [answerReady ,setAnswerReady] = useState(false) 

  let checkboxListState = [
    [allQuations[currentq].choices[0], false],
    [allQuations[currentq].choices[1], false], 
    [allQuations[currentq].choices[2], false]
   ]
  const [checkboxState, setCheckboxState] = useState(checkboxListState)   // state version of the checkboxListState variable


  // handles the next quation button
  const handleNextQuation = () => {
    if (currentq < allQuations.length){
      setcurrentq( currentq+1 )
      console.log(currentq)
      handleRadioSubmit()
    } else {console.log(' - it is bigger current length - ')}

  }

const IsCheckBoxAnswered =()=>{
  let final = []
  let found = 0
  checkboxListState.forEach(h=>{if (h[1]===true){ final.push ( h[0])}})
  let a = final.sort()
  let b = allQuations[currentq].answer.sort()
  if (JSON.stringify(a)==JSON.stringify(b)){ 
    return true
  } else { 
    return false
  }
}


  const handleCheckbox = event =>{
    //console.log(event.target.value)
    switchCheckState(event.target.value)

    // the following is to display which checkbox is selected
//    list.forEach(myx=>{
//    if(myx[1] ===  true){
//      console.log("now is selected -> " ,myx[0])
//    }
//    })

    event.preventDefault();
    console.log(IsCheckBoxAnswered())
    console.log("--------------------------")
  }


function switchCheckState (word){
  checkboxListState.forEach(x=>{
    if (x[0] === word){
      if ( x[1]) { x[1] = false} else {x[1] = true}
    }
  })
  setCheckboxState(checkboxListState)
}

  const isRadioSelected = () => {

  }

// handles if radio button is clicked/checked
  const handleRadioClick =(event)=>{
    setRadioAnswer(event.target.value)
  }
  const handleRadioSubmit = ()=>{
    console.log("you have answered -> ", radioAns)
    if (allQuations[currentq].answer === radioAns){
      console.log("correct!")
    }

  }

 // console.log(allQuations.length, " - ", currentq)   // -----------   information console.log()

// handles changes on the text field 
  const handleNoteChanges = (event) => {
      setNoteValue(event.target.value)
      console.log(noteValue)
  }

  const nextQuation = () => {

    if (currentq < allQuations.length){
      setcurrentq( currentq+1 )
      setAnswerLabel("")
      setAnswerReady(false)
      checkboxListState.forEach(x=> { x[1] = false} )
      setCheckboxState(checkboxListState)
    } else {console.log(' - it is bigger current length - ')}
  }

  const handleNextFromCheckbox = () => {
    if (IsCheckBoxAnswered()) {
// when checkbox is answered
      setAnswerLabel("Great Job!")
      setAnswerReady(true)
      setTimeout(() => {
        nextQuation()
          

        }, 2000);
  
      } else {
// when checkbox is not answered
        setAnswerLabel("Nah!")
        setAnswerReady(true)
        setTimeout(() => {
            nextQuation()
          }, 2000);
      }

// reset states
      

  }



  const x = (qtype) => {
    //-------------------------------
    // for radio quations
    //-------------------------------

                if (qtype.type == "radio"){
                      return( 
                      <div key={qId++} className='quationDiv'>
                        <form onSubmit={handleRadioSubmit}>         
                          <p className='q'> {currentq + 1}. {qtype.q}</p> 
                          <div>
                            <label className='q'>{qtype.choices[0]}
                            <input 
                                  type="radio" 
                                  id="Choice1" 
                                  name="contact" 
                                  value={qtype.choices[0]}
                                  checked={isRadioSelected('radio1')}
                                  onChange={handleRadioClick}
                            />
                            </label>
    
                            <label className='q'>{qtype.choices[1]}
                            <input 
                                  type="radio" 
                                  id="Choice2" 
                                  name="contact" 
                                  value={qtype.choices[1]}
                                  checked={isRadioSelected('radio2')}
                                  onChange={handleRadioClick}
                            />
                            </label>
                            
                            <label className='q'>{qtype.choices[2]}
                            <input 
                                  type="radio" 
                                  id="Choice3" 
                                  name="contact" 
                                  value={qtype.choices[2]}
                                  onChange={handleRadioClick}
                            />
                            </label>
                          </div>
                          <br/>
                        </form>
                          <button className='nextq' onClick={handleNextQuation}>Next</button>
                      </div>)
                }
    //-------------------------------
    // for checkbox quations
    //-------------------------------
                if (qtype.type == "check"){
                   
                  
                   return (
                    <div key={qId++} className='quationDiv'>
                      <form name="myWebForm" action="mailto:youremail@email.com" method="post">
                        <p className='q'> {currentq + 1}. {qtype.q}</p>
                          <label className='q'>{qtype.choices[0]}<input onChange={handleCheckbox} type="checkbox" checked={checkboxState[0][1]} name="sports" value={qtype.choices[0]}  /></label> 
                          <label className='q'>{qtype.choices[1]}<input onChange={handleCheckbox} type="checkbox" checked={checkboxState[1][1]} name="sports" value={qtype.choices[1]} /></label> 
                          <label className='q'>{qtype.choices[2]}<input onChange={handleCheckbox} type="checkbox" checked={checkboxState[2][1]} name="sports" value={qtype.choices[2]} /></label> 
                      </form>
                      {answerReady && <p>{answerLabel}</p>}
                      <button className='nextq' onClick={handleNextFromCheckbox}>Next</button>
                    </div>
                    )  
                }
    //-------------------------------
    // for textarea quations  / open
    //-------------------------------          
                if (qtype.type == "open"){
                    return(
                        <div key={qId++} className='quationDiv'>
                        <form name="myWebForm" className='textin' action="mailto:youremail@email.com" method="post">
                           <p className='q'> {currentq + 1}. {qtype.q}</p>
                           <label  className='q'>
                             <p> Your Answer </p>
                             <textarea type='text' value={noteValue} onChange={handleNoteChanges}></textarea>  
                           </label>
                        </form>
                        <button className='nextq' onClick={handleNextQuation}>Next</button>
                        </div>
                    )
                }
    //-------------------------------
    // End obj
    //-------------------------------          
    if (qtype.type == "end"){
      return(
          <div key={qId++} className='quationDiv'>
           <h3>Congrats you have completed the quiz!</h3>
           <button><Link to="/Profile"> Goto profile to see your result</Link></button>
          </div>
      )
  }
              }

  return (
    <div className='qBox'>
      <div className='instanceQBox navq'>
        <button className='myProfile'><Link to="/Profile">my Profile</Link></button>
        <h1 className='title'>Quizzz</h1>
      </div>
      <div className='instanceQBox mainq'>
        {
           x(allQuations[currentq])
        }
      </div>
    </div>
  );
}



export default Quation;