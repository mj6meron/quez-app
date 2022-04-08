import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom"
import './Profile.css';
import React, { useState } from "react"
import Book from "../Data/variables";
//import Navbar from '../Navbar/Navbar'

function Profile() {
  const [name , setName] = useState("meron")
  const [email , setEmail] = useState("meronmkl@gmail.com")
  const [score , setScore] = useState("75")

  const restart = () => {
    Book.quationKey = 0
    Book.answer = 0
    Book.c = 0
  }
  const logout = ()=>{
    restart()
    Book.personName = null
    Book.personEmail = null
  }
  
  return (
    <div className='profileBox'>

        <div className="buttonDiv">
            <button className='backQuations' onClick={restart}><Link to="/">Log Out</Link></button>
        <button className='backQuations' onClick={restart}><Link to="/Quations">Restart</Link></button>
        </div>

        <div className='profilediv'>
            <p className='icon name'>Name: {Book.personName}</p>
            <p className='icon email'>email : {Book.personEmail}</p>
            <p className='icon score'>Your score: {Book.PersonScore(Book.c)}%</p>
        </div>

    </div>
    
  )
}

export default Profile;








/**
 * <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Login/>}/>
            
            <Route path="/Quations" element={<Quation/>}/>
  
          </Routes>
        </div>
      </div>
    </Router>
 */