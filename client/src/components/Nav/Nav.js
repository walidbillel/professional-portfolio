import React from "react";
import { NavLink } from 'react-router-dom';
import "./Nav.css";


const STYLE = {
  navLink: {
    color: 'white',
    marginRight: "200px",
    fontSize: "30px",
    fontFamily: "'Amatic SC', cursive",
    letterSpacing: "3px"
    
  },

  activeLink: {
    backgroundColor: "black",
    padding: "10px"
  }
 

}


// Depending on the current path, this component sets the "active" class on the appropriate navigation NavLink item
const Navbar = props => (

  <nav className="navbar navbar-expand-lg navbar-dark ">
    <NavLink to="#" className="navbar-brand"  >

    </NavLink>
    <div>
      <ul className="navbar-nav" >
        <li
          className={
            window.location.pathname === "/home"
              ? "nav-item active"
              : "nav-item"
          }

        >
          <NavLink to="/home" className="nav-NavLink" style={STYLE.navLink} >
            HOME
          </NavLink>

        </li>

        <li
          className={
            window.location.pathname === "/portfolio"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <NavLink to="/portfolio" className="nav-NavLink" style={STYLE.navLink} >
            PORTFOLIO
          </NavLink>
        </li>


        <li
          className={
            window.location.pathname === "/contact"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <NavLink to="/contact" className="nav-NavLink" style={STYLE.navLink} >
            CONTACT
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>

);

export default Navbar;
