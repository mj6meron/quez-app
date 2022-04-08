import './GlobalStart.css';
import React, { useState, useEffect } from "react"
import {BrowserRouter as Router, Link, Navigate, Route, Routes} from "react-router-dom"
import Book from '../Data/variables';



function Login() {
  const [fullnameValue, setFullnameValue] = useState("")
  const [emailValue, setEmailValue] = useState("")
  const [warningValue, setWarningValue] = useState("")
  const [student, setStudent] = useState({})
  const [toQuations, setToQuations] = useState('')
  const handleFullnameChanges = (event) => {setFullnameValue(event.target.value)}
  const handleWarningChanges = (event) => {setWarningValue(event.target.value)}
  const handleEmailChanges = (event) => {setEmailValue(event.target.value)}

  const LoginClicked = (e) => { 
      if (loginReady() == true){
          console.log("we ready bro")
          e.preventDefault();
          Book.personName = fullnameValue
          Book.personEmail = emailValue
          setToQuations('/Quations')
          
      } else {
        console.log('not yet! :(')
        setWarningValue('You need to fill both the fields')
      }
  }

  useEffect(() => {
    setTimeout(()=>{
      setWarningValue('')
    } , 3000)
  }, [warningValue]);

  useEffect(()=>{
    setToQuations('/Quations')
    return setToQuations('')
  }, [setToQuations])


  const loginReady = () => {
      const value = (fullnameValue.length>0) & (emailValue.length>0)
      let v = value == 1 ? true : false;
      return v
  }



  return (
      
      
            <form className="inputUserBox" >

              <div className='titleBox'>
                  <h2>Welcome!</h2>
                  <h3>Solar system Quezz</h3>
                  <p style={Book.rightAnswerLabel}> Get a scale out of 10 quations!</p>
                  <p>Enter your details and start!</p>
              </div>
              <hr/>

              <div className='inputfield'>
                    <div className='inputDiv'> 
                      <label> Full Name
                        <input type="text" value={fullnameValue} placeholder="Enter Full Name" onChange={handleFullnameChanges} required></input>
                      </label>
                    </div>

                    <div className='inputDiv'>
                      <label> Email Address
                        <input type="text" value={emailValue} placeholder="example@gmail.com" onChange={handleEmailChanges} required/>
                      </label>
                    </div>

                    <div className='inputDiv'>
                      <button onClick = {LoginClicked} className='start' type="submit"> <Link to={toQuations}>Start</Link> </button>
                    </div>

                    <div>
                      <p style={Book.wrongAnswerLabel} >{warningValue}</p>
                    </div>
                </div>
                <hr/>
            </form>
      
  )
}
export default Login