import React from 'react';
import './style.css';
// import neckbard from '../../imgs/neckbard.jpg'
import Video from "../../components/video";


import construct from '../../imgs/construct.jpg'
import chat from '../../imgs/chat.jpg'
function muhWalls() {
    var elem = document.getElementById("bigboi");
    elem.innerHTML =
    "<div id='newMidDiv'><h1>MuhWalls</h1><p>I always spent tons of time on wallpaper websites picking hundereds of wallpapers to add to my wallpaper folder. Now i have finally made 2 of my own wallpaper sites(2 is the best).<br> This first one was made with react and node. I had the ingest server on a raspberry pi and hosted the front end on heroku. <br> Currently the upload server is offline. I revamped and reused a lot of the original backed to build Muhwalls 2. <br> <a href='https://github.com/shyaboi/wallpapers'>Github</a> <br><a href='https://dinguswallpapermassiv.herokuapp.com/'>Deployed Site</a></p></div>  ";
  }


function CLI() {
    return (

        <div className="App">
            <header className="App-header">
                <section class="animated-grid">

                    <div className="card border-gradient border-gradient-purple">
                        <a href="https://github.com/shyaboi/awesomesocketiospiffyness">
                            <p id='desc'>Socket IO Chat</p>
                            <img src={chat}
                                alt="mail poem"/></a>
                    </div>
              
               <div
            id="bigboi"
            className="card border-gradient border-gradient-purp"
          >
            <div id="newMidDiv">
              <h1>Ian Sears</h1>
              <h3>Full Stack Web Computer Man</h3>
              <Video />
            </div></div>
                    <a
            href="https://dinguswallpapermassiv.herokuapp.com/"
            id="walls"
            className="card border-gradient border-gradient-purple"
            onMouseOver={muhWalls}
          >
            <p id="desc">MuhWalls</p>
          </a>
              
              
              
                    <div className="card border-gradient border-gradient-purple"
                    id="construct">
                            <img src={construct}
                                alt="under construction"/>
                    </div>

                </section>

            </header>
        </div>
    );
}

export default CLI;
