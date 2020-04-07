import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Contact from './pages/Contact'
import Main from './pages/Main';

// import ha from './imgs/ha.png'



function App() {
  return (
    
    <div className="App">
    <Router>

  <Navbar />
  <Route exact path="/" component={Main} />

 <Route exact path="/Contact" component={Contact} />

    </Router>
    </div>
  );
}

export default App;
