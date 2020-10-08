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
    "<div id='newMidDiv'><h1>Stratagey Scope</h1> <br> <p>Stratagy Scope was a team colaboration with myself and other bootcamp members to make a slack style app, focused on project managment. This application has routes made with node. A front end delivered by react, and mongo database. Oauth is used for login authentication.</p> This app is currently hosted on heroku, whos servers get put to 'sleep', so sometimes I have a  <a href='https://github.com/shyaboi/wonkycron'>homeade Cron</a> To keep the instance alive. <br> <a href='https://github.com/justinkellogg89/miniature-disco'>Github</a> <br><a href='https://strategy-scope.herokuapp.com/'>Deployed Site</a></div>";
  }
  function mpAppDescription() {
    var elem = document.getElementById("bigboi");
    elem.innerHTML =
    "<div id='newMidDiv'><h1>MaiL Poem</h1> <br> <p>MaiL Poem is an art project ment to blend music loops with ambient sounds and a vibrant story. It is currently still a work in progress. All music and artwork used in this project was created by myself. <br> <a href='https://github.com/shyaboi/mailpoem'>Github React Version</a> <br><a href='https://github.com/shyaboi/mailpoemdumb'>Github HTML Version</a> <br><a href='https://mailpoem.com/'>Deployed Site React Version</a> <br><a href='https://shyaboi.github.io/mailpoemdumb/'>Deployed Site HTML Version</a></p></div> ";
  }
  function flagAPI() {
    var elem = document.getElementById("bigboi");
    elem.innerHTML =
    "<div id='newMidDiv'><h1>Flag API</h1> <br> <p>This is a flag API Currently I have only US/Canada/ and Mexico regional flags/coat of arms, but plan to add more gradually. I have a documentation page for interactig with the API which can be found below. This API is made with NodeJS, and Express. I have recently migrated this site from an Oracle Cloud VM instance, tunneled with ngrok; to Google cloud compute instance. backed by a MongoDB. Monitored by PM2.<br> <a href='https://github.com/shyaboi/flagapi'>Github</a> <br><a href='https://openflags.net/'>Deployed Site</a><br><a href='https://openflags.net/docs/'>Documentation</a></p></div>";
  }
  function muhWalls2() {
    var elem = document.getElementById("bigboi");
    elem.classList.add("fade");
    elem.innerHTML =
      "<div id='newMidDiv'><h1>MuhWalls 2</h1> <p>This is my second go at a wallpaper site. This time i have a full mongo DB, and scrapped the react front end.<br> The db is intaking a new name, an id number ontop of the number mongo assigns. <br> It also takes in the pictures height and width and then calculates the aspect ratio. <br> It will have a custom time stamp that can be sorted by. Ther is also an array of keywords on every photo that are globally searchable on click. <br> This site and server was hosted on a google cloud Linux VM en1 machine, but has been fully migrated to AWS EC2 Instance and S3 Storage, and is hosted on the same instance as MuhForums. Soon to both be the Dingus Crew Community. Monitored by PM2.<br> <a href='https://github.com/shyaboi/MuhWalls'>Github</a> <br><a href='http://dinguscrew.com:8080'>Deployed Site</a></p></div>";

  }
  function npop() {
    var elem = document.getElementById("bigboi");
    elem.innerHTML =
    "<div id='newMidDiv'><h1>nPoP</h1><p>This is nPoP. nPoP is a full service npm package with a starter package installer similar to 'create-react-app'.nPoP is a new Server Framework built with node, right now in nPoP(ex) form as it is currently built on-top of Express.js . nPoP is meant to be a super simple server instance for quick prototypes and front end developers wanting more serving options without configuration. Working on a non express version as well. The demo site is hosted on AWS reverse proxy with NGINX. https with Certbot Monitored by PM2.<br> <a href='https://www.npmjs.com/package/npop'>npm</a> <br> <a href='https://github.com/shyaboi/nPoP'>Github </a> <br> <a href='http://npop.io'>Deployed Minimal Example nPoP Site</a>  </p></div>";
  }
  function word() {
    var elem = document.getElementById("bigboi");
    elem.innerHTML =
    "<div id='newMidDiv'><h1>Words</h1> <br> <p>This is a word app. I wanted to practice with manipulating strings in different ways to changed their structure. My next plans will include an anagram checker <br> Currently the app can have a word entered. The app then checks if that word is a palindrome. It then prints the reverse of the word, displays the number of letters in the word, sorts the letters A~Z, then Z~A and does an API lookup for synonyms and definitions. <br> <a href='https://github.com/shyaboi/wordapp'>Github</a> <br><a href='https://shyaboi.github.io/wordapp/'>Deployed Site</a></div>";
  }
  function grocerEase() {
    var elem = document.getElementById("bigboi");
    elem.innerHTML =
    "<div id='newMidDiv'><h1>GrocerEase</h1> <br> <p>This application was a group project in my bootcamp. The MVP in this app is to bundle all your desired recipes and generate an elegant shopping list of ingridients with exact amounts needed for all the total recipes. We used the UI-Kit framework and JQuery for the DOM manipulation. We used Axios to access the API at <a href='https://www.themealdb.com/'>The Meal DB </a>which has a small database of recepies.<br> <a href='https://github.com/shyaboi/grocerEASE'>Github</a> <br><a href='https://lorddominic.github.io/grocerEASE'>Deployed Site</a></div>";
  }
  function nameGen() {
    var elem = document.getElementById("bigboi");
    elem.innerHTML =
    "<div id='newMidDiv'><h1>Repo Name Generator</h1> <br> <p>This applicatioin randomly generates a repo name from 2 given name arrays. I plan on making different repo version settings, i.e. create-react-app wants repos to be all lowercase. I also plan on moving the name bank to a database and letting users add their own names. I have also made an electron app version that can be installed and executed on mac, osx and linux. <br> <a href='https://github.com/shyaboi/TubularRepoNameGeneratorSoldier'>Github</a><br> <a href='https://github.com/shyaboi/tubularreponamegeneratorsoldierelectron'> Electron app version </a> <br><a href='https://shyaboi.github.io/TubularRepoNameGeneratorSoldier/'>Deployed Site</a></div>";
  }
  function forum() {
    var elem = document.getElementById("bigboi");
    elem.innerHTML =
    "<div id='newMidDiv'><h1>MuhForum</h1> <br> <p>I spent a lot of my youth in various forums, and I thought I should make my own. This is currently a work in progress. <br> It is made with Nodejs, express-handlebars and I am using UI kit for a front end framework. Mongo is the database and each post and all the replys are all stored in one object with nested arrays with no seperate relations in the DB.<br> Future plans include; a voting system that will tie into the position on the board.<br>This and MuhWalls 2 are hosted on the same instance. Soon to both be the Dingus Crew Community. Monitored by PM2.<br> <a href='https://github.com/shyaboi/forum'>Github</a> <br><a href='http://dinguscrew.com:5000/forum'>Deployed Site</a></div>";
  }
  function jQ() {
    var elem = document.getElementById("bigboi");
    elem.innerHTML =
    "<div id='newMidDiv'><h1>JQuery Weather</h1> <br> <p>This application can take an input of any city in open weathers DB with a fetch API and give current weather with a UV index, wind speed, and humidity, as well as a five day forcast. <br> This application is made only with HTML, Javascript, and JQuery. <br> <a href='https://github.com/shyaboi/DawnOfWeather'>Github</a> <br><a href='https://shyaboi.github.io/DawnOfWeather/'>Deployed Site</a></div>";
  }
  
  function pokemon() {
    var elem = document.getElementById("bigboi");
    elem.innerHTML =
    "<div id='newMidDiv'><h1>Pokemon</h1> <br> <p>>This application was a group project in my bootcamp. In this app, you can add pokemon to a mySQL database, and them have them all printed on a pokedex screen. There is another fight screen availible where you choose two pokemon by number and one will attack until the other 'dies'</p>  This site was made with express and express handlesbars, with a node server accessing a mySQL DB with sequalize.(this app is currently hosted on heroku, whos servers get put to 'sleep', so sometimes I have a <a href='https://github.com/shyaboi/wonkycron'>homeade Cron</a> To keep the instance alive) <br> <a href='https://github.com/shyaboi/Dope-Pokemon-Dopeness'>Github</a> <br><a href='https://glacial-beyond-53964.herokuapp.com/pokedex'>Deployed Site</a></div>";
  }
  function facade() {
    var elem = document.getElementById("bigboi");
    elem.innerHTML =
    "<div id='newMidDiv'><h1>aFacade</h1><p>This is an odd project. I started building some different kinds of web scrapers to get different kinds of data from different websites. One<a href='https://github.com/shyaboi/sonOfDumpski'> here </a>that downloads all pictures from a site to a unique folder name. Then I became fixated on making temporary copies of sites.<br> aFacade is a Node server, that goes to a given URL, tries to get all the data it can, builds a self-destructing, hosted, HTML page that is a facade of the original website(not fully functional). This could be useful if you only need to see a page that isn't loading for you, or a site is blocked from a firewall. For the future; I want to make it more comptible, as some sites facade copies are not perfect, and get some IP proxying.<br> This was made with Node.js, and Bulma, and a sprinkle of JQuery Hosted on Azure VM<br><a href='http://afaca.de/'>aFaca.de</a></p></div>  ";
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
            href="http://dinguscrew.com:8080"
            id="walls2"
            className="card border-gradient border-gradient-purple"
            onMouseOver={muhWalls2}
          >
            <p id="desc">MuhWalls 2</p>
          </a>
          <a
            href="http://afaca.de/"
            id="facade"
            className="card border-gradient border-gradient-purple"
            onMouseOver={facade}
          >
            <p id="desc">aFacade</p>
          </a>


          <a
            href="http://dinguscrew.com:5000/forum"
            id="forum"
            class="card border-gradient border-gradient-purple"
            onMouseOver={forum}
          >
            <p id="desc">MuhForum</p>
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
            href="https://mailpoem.com"
            id="mp"
            className="card"
            onMouseOver={mpAppDescription}
          >
            <p id="desc">MaiLPoem</p>
          </a>
          <a
            href="https://openflags.net/"
            id="flagAPI"
            className="card border-gradient border-gradient-purple"
            onMouseOver={flagAPI}
          >
            <p id="desc">Flag API</p>
          </a>
          

          <a
            href="http://npop.io"
            id="npop"
            className="card border-gradient border-gradient-purple"
            onMouseOver={npop}
          >
            <p id="desc">nPoP</p>
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
