import React from 'react';
import './style.css';
import construct from '../../imgs/construct.jpg'

const Mor = ()=> {
    const noDobe = ()=> {
    var elem = document.getElementById("bigboi");
    elem.innerHTML =
    "<div id='newMidDiv'><h1>NoDobe</h1> <br> <p>Nodobe is a node application that can be spun up with only a executable binary on Windows so far, but will work on Mac and Linux in shell.</p>This program once opened, will find all Adobe CC related process and kill them. I use a lot of photoshop and other adobe tools, but when you exit, there is still many process running from Adobe, so I made NoDobe. Made with Node.js and Electron<br> <a href='https://github.com/shyaboi/nodobe'>Github</a></div>";
  }
  const ppKiller = ()=> {
    var elem = document.getElementById("bigboi");
    elem.innerHTML =
    "<div id='newMidDiv'><h1>ppKiller</h1> <br> <p>Python Process Killer is a Python/Tkinter GUI application that will kill any given named process, and it also has auto killer buttons for Adobe, Microsoft, and Google process. I found these to be my biggest resource hogs on my computer. This is a kind of evolution of NoDobe. I was running into some interactions with the OS that were much easier to accomplish and scale with Python.<br> <a href='https://github.com/shyaboi/nodobe'>Github</a></div>";
  }
  function muhWalls() {
    var elem = document.getElementById("bigboi");
    elem.innerHTML =
    "<div id='newMidDiv'><h1>MuhWalls</h1><p>I always spent tons of time on wallpaper websites picking hundereds of wallpapers to add to my wallpaper folder. Now i have finally made 2 of my own wallpaper sites(2 is the best).<br> This first one was made with react and node. I had the ingest server on a raspberry pi and hosted the front end on heroku. <br> Currently the upload server is offline. I revamped and reused a lot of the original backed to build Muhwalls 2. <br> <a href='https://github.com/shyaboi/wallpapers'>Github</a> <br><a href='https://dinguswallpapermassiv.herokuapp.com/'>Deployed Site</a></p></div>  ";
  }

                 
  function sorting() {
    var elem = document.getElementById("bigboi");
    elem.innerHTML =
    "<div id='newMidDiv'><h1>Sorting API</h1> <br> <p>This is a sorting algorithm API. Currently there are 3 routes. This application was built with Python, and the flask framework. It is currently being hosted on an Heroku<br> <a href='https://github.com/shyaboi/muhsortingalgos'>Github</a> <br><a href='https://sortpy.herokuapp.com/'>Deployed Site</a><br><a href='https://sortpy.herokuapp.com/api/docs'>Documentation</a></p></div>";
  }
  // function muhWalls2() {
  //   var elem = document.getElementById("bigboi");
  //   elem.classList.add("fade");
  //   elem.innerHTML =
  //     "<div id='newMidDiv'><h1>MuhWalls 2</h1> <p>This is my second go at a wallpaper site. This time i have a full mongo DB, and scrapped the react front end.<br> The db is intaking a new name, an id number ontop of the number mongo assigns. <br> It also takes in the pictures height and width and then calculates the aspect ratio. <br> It will have a custom time stamp that can be sorted by. Ther is also an array of keywords on every photo that are globally searchable on click. <br> This site and server was hosted on a google cloud Linux VM en1 machine, but has been fully migrated to AWS EC2 Instance and S3 Storage, and is hosted on the same instance as MuhForums. Soon to both be the Dingus Crew Community. Monitored by PM2.<br> <a href='https://github.com/shyaboi/MuhWalls'>Github</a> <br><a href='http://dinguscrew.com:8080'>Deployed Site</a></p></div>";}


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
    "<div id='newMidDiv'><h1>Repo Name Generator</h1> <br> <p>This; The original name-gen applicatioin randomly generates a repo name from 2 given name arrays.  I have also made an electron app version that can be installed and executed on mac, osx and linux. <br> <a href='https://github.com/shyaboi/TubularRepoNameGeneratorSoldier'>Github</a><br> <a href='https://github.com/shyaboi/tubularreponamegeneratorsoldierelectron'> Electron app version </a> <br><a href='https://shyaboi.github.io/TubularRepoNameGeneratorSoldier/'>Deployed Site</a></div>";
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
  function mpAppDescription() {
    var elem = document.getElementById("bigboi");
    elem.innerHTML =
    "<div id='newMidDiv'><h1>MaiL Poem</h1> <br> <p>MaiL Poem is an art project ment to blend music loops with ambient sounds and a vibrant story. It is currently still a work in progress. All music and artwork used in this project was created by myself. <br> <a href='https://github.com/shyaboi/mailpoem'>Github React Version</a> <br><a href='https://github.com/shyaboi/mailpoemdumb'>Github HTML Version</a> <br><a href='https://mailpoem.com/'>Deployed Site React Version</a> <br><a href='https://shyaboi.github.io/mailpoemdumb/'>Deployed Site HTML Version</a></p></div> ";
  }
  function originalDiv() {
    var elem = document.getElementById("bigboi");
    elem.innerHTML = `<div id="newMidDiv"><h1>Ian Sears</h1> <h3 >Full Stack Web Computer Man</h3> <img src="https://i.ibb.co/ngjHncJ/construct.jpg" alt="alternatetext"></div>`;
  }
  
  return (
    <div className="App">
      <header className="App-header" onMouseLeave={originalDiv}>
        <section class="animated-grid">
         
        <a
            href="https://dinguswallpapermassiv.herokuapp.com/"
            id="walls"
            className="card border-gradient border-gradient-purple"
            onMouseOver={muhWalls}
          >
            <p id="desc">MuhWalls</p>
          </a>
          <a
            href="https://github.com/shyaboi/nodobe"
            className="card border-gradient border-gradient-purple"
            id="noDobe"
            onMouseOver={noDobe}
          >
            <p id="desc">NoDobe</p>
          </a>

          <a
            href="https://github.com/shyaboi/ppkiller"
            className="card border-gradient border-gradient-purple"
            id="ppKiller"
            onMouseOver={ppKiller}
          >
            <p id="desc">ppKiller</p>
          </a>

        
          <a
            href="https://mailpoem.com/"
            id="mp"
            className="card border-gradient border-gradient-purple"
            onMouseOver={mpAppDescription}
          >
            <p id="desc">MaiL Poem</p>
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
            href="https://sortpy.herokuapp.com/"
            id="sorting"
            className="card border-gradient border-gradient-purple"
            onMouseOver={sorting}
          >
            <p id="desc">Sorting Algorithm API</p>
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
            id="oldnameGen"
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
           <img src={construct} alt='under construction'></img>
            </div>
          </div>
        </section>
      </header>
    </div>
  );
}

export default Mor;
