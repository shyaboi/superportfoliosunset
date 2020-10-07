import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Link  } from "react-router-dom";
import Contact from './pages/Contact'
import Main from './pages/Main';
import Footer from './components/Footer';
import Mor from './pages/Mor';


// import ha from './imgs/ha.png'



function App() {
  return (
    
    <div className="App">
    <Router>

  <Navbar />
  <Route exact path="/" component={Main} />

 <Route exact path="/Contact" component={Contact} />
 <Route exact path="/Mor" component={Mor} />
 <li
              className="nav-item"
              id="Mor"
              style={{ textDecoration: "none" }}
            >
              <Link
                style={{ color: "inherit", textDecoration: "inherit" }}
                to="/Mor"
                className={
                  window.location.pathname === "/"
                    ? "nav-link active"
                    : "nav-link"
                }
              >⫷
              Mor Projects
              </Link>
            </li>
<Footer />
    </Router>
    </div>
  );
}

export default App;
