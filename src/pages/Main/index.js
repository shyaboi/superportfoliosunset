import React from 'react';
import './style.css';
import neckbard from '../../imgs/neckbard.jpg'
import github from '../../imgs/github.png'
import linkedIn from '../../imgs/linked.png'
import weath from '../../imgs/weath.gif'
import screenSave from '../../imgs/epi.gif'
import groce from '../../imgs/groce.gif'
import poke from '../../imgs/poke.gif'
import namegen from '../../imgs/namegen.gif'
import glow from '../../imgs/glow.png'
import adobe from '../../imgs/lidl.jpg'
import mp from '../../imgs/mp.gif'
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Contact from './pages/Contact'

// import ha from './imgs/ha.png'



function Main() {
  return (
    
    <div className="App">
      <header className="App-header">
    <section class="animated-grid">
 {/* <Route exact path="/Contact" component={Contact} /> */}
 <div class="card border-gradient border-gradient-purple">  <a href="https://www.youtube.com/channel/UCkTSBEk8wsKIpy-MzRoJroA"><p id='desc'>MaiLPoem YouTube</p>
        <img src={mp} alt="mail poem youtube"/></a></div>

        <div class="card border-gradient border-gradient-purple">  <a href="https://stock.adobe.com/contributor/209064146/Ian"><p id='desc'>Adobe Stock Photo Portfolio</p>
        <img src={adobe} alt="Adobe Stock"/></a></div>


    <div class="card border-gradient border-gradient-purple">  <a href="https://shyaboi.github.io/TubularRepoNameGeneratorSoldier/"><p id='desc'>Semi-Random Repo Name Gen</p>
        <img src={namegen} alt="Name Generator"/></a></div>


    <div class="card border-gradient border-gradient-purple">  <a href="https://lorddominic.github.io/grocerEASE"><p id='desc'>grocerEASE</p>
        <img src={groce} alt="Grocer Ease"/></a></div>

    <div class="card border-gradient border-gradient-purple">  <a href="https://shyaboi.github.io/glowingScheduler"><p id='desc'>8 Hour Workday scheduler</p>
<img src={glow} alt="glowing scheduler"/></a></div>

      <div class="card border-gradient border-gradient-purple">  <a href="https://github.com/shyaboi"><p id='desc'>Github</p>
        <img src={github} alt="Github Link"/></a></div>

    <div class="card border-gradient border-gradient-purple"><a href="https://www.linkedin.com/in/ian-sears-5931734a"><p id='desc'>LinkedIn</p>
              <img src={linkedIn} alt="LinkedIn Link"/></a></div>

    <div class="card border-gradient border-gradient-purple">  <a href="https://shyaboi.github.io/coolScreensaverMassivness"><p id='desc'>ScreenSaver</p>
        <img src={screenSave} alt="screen saver"/></a></div>

    <div class="card border-gradient border-gradient-purple">  <a href="https://shyaboi.github.io/DawnOfWeather/"><p id='desc'>JQuery Weather</p>
        <img src={weath} alt="Dawn of weather"/></a></div>


    <div class="card border-gradient border-gradient-purple">  <a href="https://glacial-beyond-53964.herokuapp.com/pokedex"><p id='desc'>Pokemon mySQL Minigame</p>
        <img src={poke} alt="Pokemon"/></a></div>
      
      <div class="card border-gradient border-gradient-purp"> <h1>Ian Sears:</h1><h3>Full Stack Computer Man</h3> <img src={neckbard} alt="NeckBard" /></div>
    </section>
         
      </header>
    </div>
  );
}

export default Main;
