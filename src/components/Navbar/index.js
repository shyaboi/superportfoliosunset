import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Home from '../../imgs/home.png'


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <div id="homeButt" >
      <img src={Home} alt="home"/>
      </div>
      </Link>
      <div>
        <ul className="navbar-nav">
       
          <li className="nav-item" id="contactButt">
            <Link
              to="/Contact"
              className={window.location.pathname === "/Contact" ? "nav-link active" : "nav-link"}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
