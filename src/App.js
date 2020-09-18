import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Link  } from "react-router-dom";
import Contact from './pages/Contact'
import Main from './pages/Main';
import Footer from './components/Footer';
import CLI from './pages/CLI';


// import ha from './imgs/ha.png'



function App() {
  return (
    
    <div className="App">
    <Router>

  <Navbar />
  <Route exact path="/" component={Main} />

 <Route exact path="/Contact" component={Contact} />
 <Route exact path="/CLI" component={CLI} />
 <li
              className="nav-item"
              id="CLI"
              style={{ textDecoration: "none" }}
            >
              <Link
                style={{ color: "inherit", textDecoration: "inherit" }}
                to="/CLI"
                className={
                  window.location.pathname === "/"
                    ? "nav-link active"
                    : "nav-link"
                }
              >⫷
              WIP Projects
              </Link>
            </li>
<Footer />
    </Router>
    </div>
  );
}

export default App;
