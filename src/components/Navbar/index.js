import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Home from "../../imgs/home.png";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav id="nav" className="navbar navbar-expand-lg navbar-light bg-light">
      <div id="homeButt">
        <Link className="navbar-brand" to="/">
          <img src={Home} alt="home" />
        </Link>
      </div>
      <div className="navbar-nav">
        <div>
          <ul style={{ textDecoration: "none" }}>
            <li
              className="nav-item"
              id="contactButt"
              style={{ textDecoration: "none" }}
            >
              <Link
                style={{ color: "inherit", textDecoration: "inherit" }}
                to="/Contact"
                className={
                  window.location.pathname === "/Contact"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
