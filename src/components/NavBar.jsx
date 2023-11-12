import { NavLink } from "react-router-dom"
import '../styles/NavBar.css'

function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink className="Nav" to="/">Home</NavLink>
      <NavLink className="Nav" to="/services">Services</NavLink>
      <NavLink className="Nav" to="/contact">Contact</NavLink>
      <NavLink className="Nav" to="/login">Login</NavLink>

    </nav>
  )
}

export default NavBar