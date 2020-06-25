import React from 'react';
import './style.css';
// import neckbard from '../../imgs/neckbard.jpg'
import github from '../../imgs/github.png'
import linkedIn from '../../imgs/linked.png'
import weath from '../../imgs/weath.png'
import walls from '../../imgs/walls.png'
import groce from '../../imgs/groce.png'
import poke from '../../imgs/poke.png'
import namegen from '../../imgs/namegen.png'
import glow from '../../imgs/glow.png'
import adobe from '../../imgs/lidl.jpg'
import mpy from '../../imgs/mp.png'
import mp from '../../imgs/mpldl.png'
import Video from '../../components/video'
import ss from '../../imgs/ss.png'



function Main() {
    return (

        <div className="App">
            <header className="App-header">
                <section class="animated-grid">

                    <div className="card border-gradient border-gradient-purple">
                        <a href="https://strategy-scope.herokuapp.com/">
                            <p id='desc'>Stratagey Scope</p>
                            <img src={ss}
                                alt="mail poem"/></a>
                    </div>

                    <div className="card">
                        <a href="https://mailpoem.com">
                            <p id='desc'>MaiLPoem
                            </p>
                            <img src={mp}
                                alt="mail poem react"/></a>
                    </div>


                    <div class="card border-gradient border-gradient-purple">
                        <a href="https://stock.adobe.com/contributor/209064146/Ian">
                            <p id='desc'>Adobe Stock Photo Portfolio</p>
                            <img src={adobe}
                                alt="Adobe Stock"/></a>
                    </div>

                    <div className="card border-gradient border-gradient-purple">
                        <a href="https://www.youtube.com/channel/UCkTSBEk8wsKIpy-MzRoJroA">
                            <p id='desc'>MaiLPoem YouTube</p>
                            <img src={mpy}
                                alt="mail poem youtube"/></a>
                    </div>

                    <div class="card border-gradient border-gradient-purple">
                        <a href="https://github.com/shyaboi">
                            <p id='desc'>Github</p>
                            <img src={github}
                                alt="Github Link"/></a>
                    </div>

                    <div class="card border-gradient border-gradient-purple">
                        <a href="https://www.linkedin.com/in/ian-sears-5931734a">
                            <p id='desc'>LinkedIn</p>
                            <img id='linked' src={linkedIn}
                                alt="LinkedIn Link"/></a>
                    </div>



                    <div class="card border-gradient border-gradient-purple">
                        <a href="https://dinguswallpapermassiv.herokuapp.com/">
                            <p id='desc'>MuhWalls</p>
                            <img src={walls}
                                alt="wallpaper"/></a>
                    </div>

                    <div class="card border-gradient border-gradient-purple">
                        <a href="https://lorddominic.github.io/grocerEASE">
                            <p id='desc'>grocerEASE</p>
                            <img src={groce}
                                alt="Grocer Ease"/></a>
                    </div>

                    <div class="card border-gradient border-gradient-purple">
                        <a href="https://shyaboi.github.io/TubularRepoNameGeneratorSoldier/">
                            <p id='desc'>Semi-Random Repo Name Gen</p>
                            <img src={namegen}
                                alt="Name Generator"/></a>
                    </div>

                    <div class="card border-gradient border-gradient-purple">
                        <a href="https://shyaboi.github.io/glowingScheduler">
                            <p id='desc'>8 Hour Workday scheduler</p>
                            <img src={glow}
                                alt="glowing scheduler"/></a>
                    </div>

                    <div class="card border-gradient border-gradient-purple">
                        <a href="https://shyaboi.github.io/DawnOfWeather/">
                            <p id='desc'>JQuery Weather</p>
                            <img src={weath}
                                alt="Dawn of weather"/></a>
                    </div>


                    <div class="card border-gradient border-gradient-purple">
                        <a href="https://glacial-beyond-53964.herokuapp.com/pokedex">
                            <p id='desc'>Pokemon<br></br> mySQL Minigame</p>
                            <img src={poke}
                                alt="Pokemon"/></a>
                    </div>

                    <div id='desc'   className="card border-gradient border-gradient-purp">
                        <h1>Ian Sears</h1>
                        <h3 >Full Stack Web Computer Man</h3>
                        <Video />
                        </div>
                </section>

            </header>
        </div>
    );
}

export default Main;
