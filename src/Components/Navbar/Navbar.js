import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Dojo Blog</h1>
      <div className="links">
        <Link className="navlink" to="/">Home</Link>
        <Link className="navlink" to="/Quations">Quations</Link>
        <Link className="navlink" to="/Profile">Profile</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;