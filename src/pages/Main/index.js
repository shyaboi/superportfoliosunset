import React from "react";
import "./style.css";
// import Modal from "react-bootstrap/Modal";
// import Button from "react-bootstrap/Button";
// import neckbard from '../../imgs/neckbard.jpg'
// import weath from "../../imgs/weath.png";
// import walls from "../../imgs/walls.png";
// import groce from "../../imgs/groce.png";
// import poke from "../../imgs/poke.png";
// import namegen from "../../imgs/namegen.png";
// import glow from "../../imgs/glow.png";
// import mpy from "../../imgs/mp.png";
// import mp from "../../imgs/mpldl.png";
// import ss from "../../imgs/ss.png";
import Video from "../../components/video";

function Main() {
  function ssAppDescription() {
    var elem = document.getElementById("bigboi");
    elem.innerHTML =
    "<div id='newMidDiv'><h1>Stratagey Scope</h1> <br> <p>Stratagy Scope was a team colaboration with myself and other bootcamp members to make a slack style app, focused on project managment. This application has routes made with node. A front end delivered by react, and mongo database. Oauth is used for login authentication.</p>(this app is currently hosted on heroku, whos servers get put to 'sleep' so give it a minuet to load up)<br> <a href='https://github.com/justinkellogg89/miniature-disco'>Github</a> <br><a href='https://strategy-scope.herokuapp.com/'>Deployed Site</a></div>";
  }
  function mpAppDescription() {
    var elem = document.getElementById("bigboi");
    elem.innerHTML =
    "<div id='newMidDiv'><h1>MaiL Poem</h1> <br> <p>MaiL Poem is an art project ment to blend music loops with ambient sounds and a vibrant story. It is currently still a work in progress. All music and artwork used in this project was created by myself. <br> <a href='https://github.com/shyaboi/mailpoem'>Github React Version</a> <br><a href='https://github.com/shyaboi/mailpoemdumb'>Github HTML Version</a> <br><a href='https://mailpoem.com/'>Deployed Site React Version</a> <br><a href='https://shyaboi.github.io/mailpoemdumb/'>Deployed Site HTML Version</a></p></div> ";
  }
  function snake() {
    var elem = document.getElementById("bigboi");
    elem.innerHTML =
    "<div id='newMidDiv'><h1>Canvas Snake</h1> <br> <p>This is a simple snake game made with HTML canvas and some javascript. </p><br> The game currently has no loss condition, but I am implementing that and some poison fruits that the snake will have to avoid. If you play long enough, the poison will start to appear. <br> <a href='https://github.com/shyaboi/canvasnake'>Github</a> <br><a href='https://shyaboi.github.io/canvasnake/'>Deployed Site</a></p></div>";
  }
  function muhWalls2() {
    var elem = document.getElementById("bigboi");
    elem.innerHTML =
      "<div id='newMidDiv'><h1>MuhWalls 2</h1> <p>This is my second go at a wallpaper site. This time i have a full mongo DB, and scrapped the react front end.<br> The db is intaking a new name, an id number ontop of the number mongo assigns. <br> It also takes in the pictures height and width and then calculates the aspect ratio. <br> It will have a custom time stamp that can be sorted by. Ther is also an array of keywords on every photo that are globally searchable on click. <br> This site and server are hosted on a google cloud Linux VM en1 machine, and tunneled with ngrok. <br> <a href='https://github.com/shyaboi/MuhWalls'>Github</a> <br><a href='https://donus.ngrok.io/'>Deployed Site</a></p></div>";
  }
  function npop() {
    var elem = document.getElementById("bigboi");
    elem.innerHTML =
    "<div id='newMidDiv'><h1>nPoP</h1><p>This is nPoP. nPoP is a full service npm package with a starter package installer simular to 'create-react-app'.<br> Make sure you have Node.js installed already.  Then to install the nPoP starter package, simply open your terminal ```npx npop``` it will install a full server(currently express made) with 3 routes, One of which for data. It will then pop open your default browser to the open server and open vs code if thats your default path. <br>  All asset folders, css and js files linked to server routes and server has configurable parameters. Working on a non express version as well. <br> <a href='https://www.npmjs.com/package/npop'>npm</a> <br> <a href='https://github.com/shyaboi/muhpackage'>Github </a> <br> <a href='https://npopio.herokuapp.com/'>Deployed Minimal Example nPoP Site</a>  </p></div>";
  }
  function word() {
    var elem = document.getElementById("bigboi");
    elem.innerHTML =
    "<div id='newMidDiv'><h1>Words</h1> <br> <p>This is a word app. I wanted to practice with manipulating strings in different ways to changed their structure. My next plans will include an anagram checker <br> Currently the app can have a word entered. The app then checks if that word is a palindrome. It then prints the reverse of the word, displays the number of letters in the word, sorts the letters A~Z, then Z~A and does an API lookup for synonyms and definitions. <br> <a href='https://github.com/shyaboi/wordapp'>Github</a> <br><a href='https://shyaboi.github.io/wordapp/'>Deployed Site</a></div>";
  }
  function grocerEase() {
    var elem = document.getElementById("bigboi");
    elem.innerHTML =
    "<div id='newMidDiv'><h1>GrocerEase</h1> <br> <p>This application is meant to bundle all your desired recipes and generate an elegant shopping list of ingridients with exact amounts needed for all the total recipes.<br> <a href='https://github.com/shyaboi/grocerEASE'>Github</a> <br><a href='https://lorddominic.github.io/grocerEASE'>Deployed Site</a></div>";
  }
  function nameGen() {
    var elem = document.getElementById("bigboi");
    elem.innerHTML =
    "<div id='newMidDiv'><h1>Repo Name Generator</h1> <br> <p>This applicatioin randomly generates a repo name from 2 given name arrays. I plan on making different repo version settings, i.e. create-react-app wants repos to be all lowercase. I also plan on moving the name bank to a database and letting users add their own names. I have also made an electron app version that can be installed and executed on mac, osx and linux. <br> <a href='https://github.com/shyaboi/TubularRepoNameGeneratorSoldier'>Github</a><br> <a href='https://github.com/shyaboi/tubularreponamegeneratorsoldierelectron'> Electron app version </a> <br><a href='https://shyaboi.github.io/TubularRepoNameGeneratorSoldier/'>Deployed Site</a></div>";
  }
  function workWork() {
    var elem = document.getElementById("bigboi");
    elem.innerHTML =
    "<div id='newMidDiv'><h1>8 Hour Workday Scheduler</h1> <br> <p>This is a simple sceduler that will save your notes for each hour of your work day. It will save the text in the hour to the internal storage in your browser, so currently to clear your schedule, clear your browsers internal storage. <br> <a href='https://github.com/shyaboi/glowingScheduler'>Github</a> <br><a href='https://shyaboi.github.io/glowingScheduler'>Deployed Site</a></div>";
  }
  function jQ() {
    var elem = document.getElementById("bigboi");
    elem.innerHTML =
    "<div id='newMidDiv'><h1>JQuery Weather</h1> <br> <p>This application can take an input of any city in open weathers DB with a fetch API and give current weather with a UV index, wind speed, and humidity, as well as a five day forcast. <br> This application is made only with HTML, Javascript, and JQuery. <br> <a href='https://github.com/shyaboi/DawnOfWeather'>Github</a> <br><a href='https://shyaboi.github.io/DawnOfWeather/'>Deployed Site</a></div>";
  }
  
  function pokemon() {
    var elem = document.getElementById("bigboi");
    elem.innerHTML =
    "<div id='newMidDiv'><h1>Pokemon</h1> <br> <p>This application you can add pokemon to a mySQL database, and them have them all printed on a pokedex screen. There is another fight screen availible where you choose two pokemon by number and one will attack until the other 'dies'</p> (this app is currently hosted on heroku, whos servers get put to 'sleep' so give it a minuet to load up) <br> <a href='https://github.com/shyaboi/Dope-Pokemon-Dopeness'>Github</a> <br><a href='https://glacial-beyond-53964.herokuapp.com/pokedex'>Deployed Site</a></div>";
  }
  function muhWalls() {
    var elem = document.getElementById("bigboi");
    elem.innerHTML =
    "<div id='newMidDiv'><h1>MuhWalls</h1><p>I always spent tons of time on wallpaper websites picking hundereds of wallpapers to add to my wallpaper folder. Now i have finally made 2 of my own wallpaper sites(2 is the best).<br> This first one was made with react and node. I had the ingest server on a raspberry pi and hosted the front end on heroku. <br> Currently the upload server is offline. I revamped and reused a lot of the original backed to build Muhwalls 2. <br> <a href='https://github.com/shyaboi/wallpapers'>Github</a> <br><a href='https://dinguswallpapermassiv.herokuapp.com/'>Deployed Site</a></p></div>  ";
  }
  function originalDiv() {
    var elem = document.getElementById("bigboi");
    elem.innerHTML = `<div id="newMidDiv"><h1>Ian Sears</h1> <h3 >Full Stack Web Computer Man</h3> <img src="https://i.ibb.co/JdPvygR/me.png" alt="alternatetext"></div>`;
  }
  
  return (
    <div className="App">
      <header className="App-header" onMouseLeave={originalDiv}>
        <section class="animated-grid">
          <a
            href="https://strategy-scope.herokuapp.com/"
            className="card border-gradient border-gradient-purple"
            id="ss"
            onMouseOver={ssAppDescription}
          >
            <p id="desc">Stratagey Scope</p>
          </a>

          <a
            href="http://donus.ngrok.io/"
            id="walls2"
            className="card border-gradient border-gradient-purple"
            onMouseOver={muhWalls2}
          >
            <p id="desc">MuhWalls 2</p>
          </a>
          <a
            href="https://dinguswallpapermassiv.herokuapp.com/"
            id="walls"
            className="card border-gradient border-gradient-purple"
            onMouseOver={muhWalls}
          >
            <p id="desc">MuhWalls</p>
          </a>

          <a
            href="https://npopio.herokuapp.com/"
            id="npop"
            className="card border-gradient border-gradient-purple"
            onMouseOver={npop}
          >
            <p id="desc">nPoP</p>
          </a>

          <a
            href="https://shyaboi.github.io/wordapp/"
            id="word"
            class="card border-gradient border-gradient-purple"
            onMouseOver={word}
          >
            <p id="desc">Fun with strings</p>
          </a>

          <a
            href="https://lorddominic.github.io/grocerEASE"
            id="grocerEase"
            className="card border-gradient border-gradient-purple"
            onMouseOver={grocerEase}
          >
            <p id="desc">grocerEASE</p>
          </a>

          <a
            href="https://shyaboi.github.io/canvasnake/"
            id="snake"
            className="card border-gradient border-gradient-purple"
            onMouseOver={snake}
          >
            <p id="desc">Canvas Snake</p>
          </a>
          <a
            href="https://mailpoem.com"
            id="mp"
            className="card"
            onMouseOver={mpAppDescription}
          >
            <p id="desc">MaiLPoem</p>
          </a>

          <a
            href="https://shyaboi.github.io/TubularRepoNameGeneratorSoldier/"
            id="nameGen"
            class="card border-gradient border-gradient-purple"
            onMouseOver={nameGen}
          >
            <p id="desc">Repo Name Generator</p>
          </a>

          <a
            href="https://shyaboi.github.io/glowingScheduler"
            id="glow"
            class="card border-gradient border-gradient-purple"
            onMouseOver={workWork}
          >
            <p id="desc">8 Hour scheduler</p>
          </a>

          <a
            href="https://shyaboi.github.io/DawnOfWeather/"
            id="jQ"
            class="card border-gradient border-gradient-purple"
            onMouseOver={jQ}
          >
            <p id="desc">JQuery Weather</p>
          </a>

          <a
            href="https://glacial-beyond-53964.herokuapp.com/pokedex"
            id="pokemon"
            class="card border-gradient border-gradient-purple"
            onMouseOver={pokemon}
          >
            <p id="desc">Pokemon</p>
          </a>

          <div
            id="bigboi"
            className="card border-gradient border-gradient-purp"
          >
            <div id="newMidDiv">
              <h1>Ian Sears</h1>
              <h3>Full Stack Web Computer Man</h3>
              <Video />
            </div>
          </div>
        </section>
      </header>
    </div>
  );
}

export default Main;
