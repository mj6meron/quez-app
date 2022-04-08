import './Quation.css';
import Qs from '../Data/QsData.js'
import RadioQuation from './radio/Radio.js'
import TextareaQuation from './textarea/Textarea.js'
import CheckboxQuation from './checkbox/Checkbox.js'
import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom"
import Book from '../Data/variables';


function Quation() {
      const [answerLabel ,setAnswerLabel] = useState('')
      const [answerReady ,setAnswerReady] = useState(false)
      let allQuations = Qs().qs
      const [currentq,  setcurrentq] = useState(0)
      let qReadyObjects = []


      const finished =()=>{
        if ( Book.c >= qReadyObjects.length){return true} else return false
      }

      const formation = () => {
        allQuations.map(k=>{
          if (k.type == 'radio'){qReadyObjects.push(
            <div key={Book.myKey++} className='qBox'>
            {RadioQuation(k)}  
            </div>
            )}
          if (k.type == 'check'){qReadyObjects.push(
            <div key={Book.myKey++} className='qBox'>

           { CheckboxQuation(k)}  
            </div>
            )}
          if (k.type == 'open'){qReadyObjects.push(
            <div key={Book.myKey++} className='qBox'>

           {  TextareaQuation(k)} 
            </div>
            )}
        })
      }

    // Run and make the formation of quations only on reload -- Dependecy array is empty
      formation()



      return (
        <div className='qBox'>
          <div className='instanceQBox navq'>
            <h1 className='title'>Quizzz</h1>
          </div>
          <div className='instanceQBox mainq'>
            {!finished() && qReadyObjects[Book.c]}
            {finished() && 
            <div>
            
                <button className='myProfile'><Link to="/Profile">Go to my profile</Link></button>
            
            <br/><br/>
            <div className='scoreBox'> 
                <div className='scoreText'>
                  <p>Congrats! You have finished the Quiz</p>
                    <p> Score : <span className='nextq'>{Book.PersonScore(qReadyObjects.length)}%</span> or <span className='nextq'> {Book.answer}/{qReadyObjects.length}</span></p>  
                </div>
                <br/>
                <hr/>
               <br/><br/>
                {qReadyObjects.map(qtype => <div key={Book.myKey++}>{qtype}</div>)}  
            </div>
            </div>}
          </div>
        </div>
      );
    }


export default Quation;


/**
 *  {
              allQuations.map(k=>{
                if (k.type == 'radio'){return(
                  <div key={qId++}>
                    {RadioQuation(k)}
                  </div>
                  )}
                if (k.type == 'check'){return(
                  <div key={qId++}>
                    {CheckboxQuation(k)}
                  </div>
                  )}
                if (k.type == 'open'){return(
                  <div key={qId++}>
                    {TextareaQuation(k)}
                  </div>
                  )}
              })
            }
 */