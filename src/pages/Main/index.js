import React from "react";
import "./style.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
// import neckbard from '../../imgs/neckbard.jpg'
import github from "../../imgs/github.png";
import linkedIn from "../../imgs/linked.png";
import weath from "../../imgs/weath.png";
import walls from "../../imgs/walls.png";
import groce from "../../imgs/groce.png";
import poke from "../../imgs/poke.png";
import namegen from "../../imgs/namegen.png";
import glow from "../../imgs/glow.png";
import adobe from "../../imgs/lidl.jpg";
import mpy from "../../imgs/mp.png";
import mp from "../../imgs/mpldl.png";
import Video from "../../components/video";
import ss from "../../imgs/ss.png";

function Main() {
  function originalDiv() {
    var elem = document.getElementById("bigboi");
    elem.innerHTML = `<div id="newMidDiv"><h1>Ian Sears</h1> <h3 >Full Stack Web Computer Man</h3> <img src="https://i.ibb.co/JdPvygR/me.png" alt="alternatetext"></div>`;
  }

  function ssAppDescription() {
    var elem = document.getElementById("bigboi");
    elem.innerHTML =
      "<div id='newMidDiv'><h1>Stratagey Scope</h1> <br> <p>Stratagy Scope was a team colaboration with myself and other bootcamp members to make a slack style app, focused on project managment.</p>(this app is currently hosted on heroku, whos servers get put to 'sleep' so give it a minuet to load up)</div>";
  }
  function mpAppDescription() {
    var elem = document.getElementById("bigboi");
    elem.innerHTML =
      "<div id='newMidDiv'><h1>MaiL Poem</h1> <br> <p>MaiL Poem is an art project ment to blend music loops with ambient sounds and a vibrant story. It is currently still a work in progress</p></div>";
  }
  function adobeStock() {
    var elem = document.getElementById("bigboi");
    elem.innerHTML =
      "<div id='newMidDiv'><h1>Adobe Stock</h1> <br> <p>This is my adobe stock portfolio. Feel free to browse and dowload my work on Adobe Stock</div>";
  }
  function mpYouTube() {
    var elem = document.getElementById("bigboi");
    elem.innerHTML =
      "<div id='newMidDiv'><h1>YouTube</h1> <br><div> <p>This is my YouTube where I have only posted a couple timelapses and a cinemagraph</div></div>";
  }
  function gitHub() {
    var elem = document.getElementById("bigboi");
    elem.innerHTML =
      "<div id='newMidDiv'><h1>GitHub</h1> <br> <p>This is my GitHub. Take a look at some of the source code that makes up my projects. Please give me and feedback if you have it. It would be greatly appreciated.</div>";
  }
  function linked() {
    var elem = document.getElementById("bigboi");
    elem.innerHTML =
      "<div id='newMidDiv'><h1>LinkedIn</h1> <br> <p>Please connect with me on linkedIn. I am currently open to new oppertunies! </div>";
  }
  function grocerEase() {
    var elem = document.getElementById("bigboi");
    elem.innerHTML =
      "<div id='newMidDiv'><h1>GrocerEase</h1> <br> <p>This application is meant to bundle all your desire resepies and generate an elegant shopping list of ingridients with exact amounts needed for all the total recipies.</div>";
  }
  function nameGen() {
    var elem = document.getElementById("bigboi");
    elem.innerHTML =
      "<div id='newMidDiv'><h1>Repo Name Generator</h1> <br> <p>This applicatioin randomly generates a repo name from 2 given name arrays. I plan on making different repo version settings, i.e. create-react-app wants repos to be all lowercase/</div>";
  }
  function workWork() {
    var elem = document.getElementById("bigboi");
    elem.innerHTML =
      "<div id='newMidDiv'><h1>8 Hour Workday Scheduler</h1> <br> <p>This is a simple sceduler that will save your notes for each hour of your work day. It will save the text in the hour to the internal storage in your browser, so currently to clear your schedule, clear your browsers internal storage.</div>";
  }
  function jQ() {
    var elem = document.getElementById("bigboi");
    elem.innerHTML =
      "<div id='newMidDiv'><h1>JQuery Weather</h1> <br> <p>This application can take an input of any city in open weathers DB with a fetch API and give current weather with a UV index, wind speed, and humidity, as well as a five day forcast. This application is made only with HTML, Javascript, and JQuery</div>";
  }

  function pokemon() {
    var elem = document.getElementById("bigboi");
    elem.innerHTML =
      "<div id='newMidDiv'><h1>Pokemon</h1> <br> <p>This application you can add pokemon to a mySQL database, and them have them all printed on a pokedex screen. There is another fight screen availible where you choose two pokemon by number and one will attack until the other 'dies'</p> (this app is currently hosted on heroku, whos servers get put to 'sleep' so give it a minuet to load up)</div>";
  }
  function muhWalls() {
    var elem = document.getElementById("bigboi");
    elem.innerHTML =
      "<div id='newMidDiv'><h1>MuhWalls</h1><p>I always spent tons of time on wallpaper websites picking hundereds of wallpapers to add to my wallpaper folder. Now i have finally made my own wallpaper site. Currently the site can upload images and print all the uploaded wallpapers in a lovely grid. I currently have the upload server seperate and offline. </p><br>(this app is currently hosted on heroku, whos servers get put to 'sleep' so give it a minuet to load up)";
  }
  return (
    <div className="App">
      <header className="App-header">
        <section class="animated-grid">
          <a
            href="https://strategy-scope.herokuapp.com/"
            className="card border-gradient border-gradient-purple"
            id="ss"
            onMouseOut={originalDiv}
            onMouseOver={ssAppDescription}
          >
            <p id="desc">Stratagey Scope</p>
          </a>

          <a
            href="https://mailpoem.com"
            id="mp"
            className="card"
            onMouseOut={originalDiv}
            onMouseOver={mpAppDescription}
          >
            <p id="desc">MaiLPoem</p>
          </a>

          <a
            href="https://stock.adobe.com/contributor/209064146/Ian"
            id="adobe"
            className="card border-gradient border-gradient-purple"
            onMouseOut={originalDiv}
            onMouseOver={adobeStock}
          >
            <p id="desc">Adobe Stock Photo Portfolio</p>
          </a>

          <a
            href="https://www.youtube.com/channel/UCkTSBEk8wsKIpy-MzRoJroA"
            id="mpty"
            className="card border-gradient border-gradient-purple"
            onMouseOut={originalDiv}
            onMouseOver={mpYouTube}
          >
            <p id="desc">MaiLPoem YouTube</p>
          </a>

          <a
            href="https://github.com/shyaboi"
            id="github"
            class="card border-gradient border-gradient-purple"
            onMouseOut={originalDiv}
            onMouseOver={gitHub}
          >
            <p id="desc">GitHub</p>
          </a>

          <a
            href="https://www.linkedin.com/in/ian-sears-5931734a"
            id="linked"
            className="card border-gradient border-gradient-purple"
            onMouseOut={originalDiv}
            onMouseOver={linked}
          >
            <p id="desc">LinkedIn</p>
          </a>

          <a
            href="https://lorddominic.github.io/grocerEASE"
            id="grocerEase"
            className="card border-gradient border-gradient-purple"
            onMouseOut={originalDiv}
            onMouseOver={grocerEase}
          >
            <p id="desc">grocerEASE</p>
          </a>

     
            <a href="https://shyaboi.github.io/TubularRepoNameGeneratorSoldier/"
            id="nameGen"
             class="card border-gradient border-gradient-purple"
             onMouseOut={originalDiv}
             onMouseOver={nameGen}>
              <p id="desc">Semi-Random Repo Name Gen</p>
            </a>

  
            <a href="https://shyaboi.github.io/glowingScheduler"
            id="glow"
                class="card border-gradient border-gradient-purple"
                onMouseOut={originalDiv}
                onMouseOver={workWork}>
              <p id="desc">8 Hour Workday scheduler</p>
            </a>

      
            <a href="https://shyaboi.github.io/DawnOfWeather/"
            id="jQ"
             class="card border-gradient border-gradient-purple"
             onMouseOut={originalDiv}
             onMouseOver={jQ}>
              <p id="desc">JQuery Weather</p>
            </a>

        
            <a href="https://glacial-beyond-53964.herokuapp.com/pokedex"
            id="pokemon"
             class="card border-gradient border-gradient-purple"
             onMouseOut={originalDiv}
             onMouseOver={pokemon}>
              <p id="desc">Pokemon</p>
            </a>

          <a
            href="https://dinguswallpapermassiv.herokuapp.com/"
            id="walls"
            className="card border-gradient border-gradient-purple"
            onMouseOut={originalDiv}
            onMouseOver={muhWalls}
          >
            <p id="desc">MuhWalls</p>
          </a>

          <div
            id="bigboi"
            className="card border-gradient border-gradient-purp"
          >
              <div>
            <h1>Ian Sears</h1>
            <h3>Full Stack Web Computer Man</h3>
            </div>
            <Video />
          </div>
        </section>
      </header>
    </div>
  );
}

export default Main;
