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
  <Route exact path="/superportfoliosunset/" component={Main} />

 <Route exact path="/superportfoliosunset/Contact" component={Contact} />
 <Route exact path="/superportfoliosunset/Mor" component={Mor} />
 <li
              className="nav-item"
              id="Mor"
              style={{ textDecoration: "none" }}
            >
              <Link
                style={{ color: "inherit", textDecoration: "inherit" }}
                to="/superportfoliosunset/Mor"
                className={
                  window.location.pathname === "/superportfoliosunset/"
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
