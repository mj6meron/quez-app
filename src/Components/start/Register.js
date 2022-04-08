import './GlobalStart.css';
import React, { useState } from "react"

function Register () { 
    const [usernameValue, setUsernameValue] = useState("")
    const [passValue, setPassValue] = useState("")
    const [fullnameValue, setfullnameValue] = useState("")
    const [emailValue, setEmailValue] = useState("")
    const handleUsernameChanges = (event) => {setUsernameValue(event.target.value)}
    const handlePassChanges = (event) => {setPassValue(event.target.value)}
    const handleFullnameChanges = (event) => {setfullnameValue(event.target.value)}
    const handleEmailChanges = (event) => {setEmailValue(event.target.value)}
    
    
    const registerReady = () => {
        const value = (usernameValue.length>0) & (passValue.length>0) & (fullnameValue.length>0) & (emailValue.length>0) 
        let v = value == 1 ? true : false;
        return v
    }
    

    const registerClicked = () => { 
        if (registerReady() == true){
            console.log("we ready to register")
        }
    }
    return (
    
      <form className="inputUserBox">

          <div className='inputDiv'>
            <input type="text" value={fullnameValue} placeholder="Enter Full Name" onChange={handleFullnameChanges}  required/>
          </div>
          <div className='inputDiv'>
            <input type="number" value={usernameValue} placeholder="Enter new Username" onChange={handleUsernameChanges} required/>
          </div>
          <div className='inputDiv'>
            <input type="text" value={passValue} placeholder=" Enter new Password" onChange={handlePassChanges} required/>
          </div >
          <div className='inputDiv'>
            <input type="text" value={emailValue} placeholder=" Enter email" onChange={handleEmailChanges} required/>
          </div >
          <div className='inputDiv'>
            <button onClick = {registerClicked} id="addButton" type="submit">add</button>
          </div>
      </form>
    
    )
}

export default Register