import React from 'react';
import './style.css';
// import neckbard from '../../imgs/neckbard.jpg'

import construct from '../../imgs/construct.jpg'
import chat from '../../imgs/chat.jpg'



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
