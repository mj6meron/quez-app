import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from '../Navbar/Navbar'
import Login from '../start/Login'
import Register from '../start/Register'
import Quation from '../Quation/Quation'
import Profile from '../Profile/Profile'
//import Navbar from '../Navbar/Navbar'

function App() {
  
  
  return (
    <div className='app'>
    <Router className='appRouter'>
        <Routes className="boxes">
        <Route path="/" element={<Login/>}/>
        <Route path="/Quations" element={<Quation/>}/>
        <Route path="/Profile" element={<Profile/>}/>
        </Routes>
    </Router>
    </div>
    
  )
}

export default App;








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