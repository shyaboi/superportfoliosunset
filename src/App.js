import React from 'react';
import './App.css';
import neckbard from './imgs/neckbard.jpg'
import github from './imgs/github.png'
import linkedIn from './imgs/linked.png'
import dawn from './imgs/dawn.png'
import screenSave from './imgs/epi.png'
import groce from './imgs/groce.png'
import poke from './imgs/poke.png'
import namegen from './imgs/namegen.png'


function App() {
  return (
    <div className="App">
      <header className="App-header">
    <section class="animated-grid">

    <div class="card">  <a href="https://shyaboi.github.io/TubularRepo…">
        <img src={namegen} alt="Name Generator"/></a></div>

    <div class="card">  <a href="https://glacial-beyond-53964.herokuapp.com/pokedex">
        <img src={poke} alt="Pokemon"/></a></div>

    <div class="card">  <a href="https://lorddominic.github.io/grocerEASE">
        <img src={groce} alt="Grocer Ease"/></a></div>

    <div class="card">  <a href="https://shyaboi.github.io/coolScreens">
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
    </div>
  );
}

export default App;
