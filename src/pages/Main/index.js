import React from 'react';
import './style.css';
import neckbard from '../../imgs/neckbard.jpg'
import github from '../../imgs/github.png'
import linkedIn from '../../imgs/linked.png'
import dawn from '../../imgs/dawn.png'
import screenSave from '../../imgs/epi.png'
import groce from '../../imgs/groce.png'
import poke from '../../imgs/poke.png'
import namegen from '../../imgs/namegen.png'
import glow from '../../imgs/glow.png'
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Contact from './pages/Contact'

// import ha from './imgs/ha.png'



function Main() {
  return (
    
    <div className="App">
    <Router>

 

      <header className="App-header">
    <section class="animated-grid">
 {/* <Route exact path="/Contact" component={Contact} /> */}


    <div class="card">  <a href="https://shyaboi.github.io/glowingScheduler">
        <img src={glow} alt="glowing scheduler"/></a></div>

    <div class="card">  <a href="https://shyaboi.github.io/TubularRepoNameGeneratorSoldier/">
        <img src={namegen} alt="Name Generator"/></a></div>

    <div class="card">  <a href="https://glacial-beyond-53964.herokuapp.com/pokedex">
        <img src={poke} alt="Pokemon"/></a></div>

    <div class="card">  <a href="https://lorddominic.github.io/grocerEASE">
        <img src={groce} alt="Grocer Ease"/></a></div>

    <div class="card">  <a href="https://shyaboi.github.io/coolScreensaverMassivness">
        <img src={screenSave} alt="screen saver"/></a></div>

    <div class="card">  <a href="https://shyaboi.github.io/DawnOfWeather/">
        <img src={dawn} alt="Dawn of weather"/></a></div>

      <div class="card">  <a href="https://github.com/shyaboi">
        <img src={github} alt="Github Link"/></a></div>

    <div class="card"><a href="https://www.linkedin.com/in/ian-sears-5931734a">
              <img src={linkedIn} alt="LinkedIn Link"/></a></div>
      
      <div class="card"> <h1>Ian Sears:</h1><h2>Full Stack Computer Man</h2> <img src={neckbard} alt="NeckBard" /></div>
    </section>
         
      </header>
    </Router>
    </div>
  );
}

export default Main;
