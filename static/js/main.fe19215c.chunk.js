(this.webpackJsonpsuperportfoliosunset=this.webpackJsonpsuperportfoliosunset||[]).push([[0],[,,,,,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/home.811b8f44.png"},,,,function(e,a,t){e.exports=t.p+"static/media/prof.7f56e0a7.mp4"},function(e,a,t){e.exports=t.p+"static/media/github.88e95f47.png"},function(e,a,t){e.exports=t.p+"static/media/linked.40b5c052.png"},function(e,a,t){e.exports=t.p+"static/media/youtube.a029dc0b.png"},function(e,a,t){e.exports=t.p+"static/media/adobe.1357af94.png"},function(e,a,t){e.exports=t.p+"static/media/construct.32fb1b05.jpg"},function(e,a,t){e.exports=t.p+"static/media/chat.538d5a07.jpg"},function(e,a,t){e.exports=t.p+"static/media/sun.5d13bc55.png"},function(e,a,t){e.exports=t.p+"static/media/palm.8c42f4b3.png"},function(e,a,t){e.exports=t(50)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,,function(e,a,t){},,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(14),o=t.n(i),s=(t(33),t(34),t(6)),l=(t(35),t(15)),c=t.n(l);var d=function(){return r.a.createElement("nav",{id:"nav",className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("div",{id:"homeButt"},r.a.createElement(s.b,{className:"navbar-brand",to:"/"},r.a.createElement("img",{src:c.a,alt:"home"}))),r.a.createElement("div",{className:"navbar-nav"},r.a.createElement("div",null,r.a.createElement("ul",{style:{textDecoration:"none"}},r.a.createElement("li",{className:"nav-item",id:"contactButt",style:{textDecoration:"none"}},r.a.createElement(s.b,{style:{color:"inherit",textDecoration:"inherit"},to:"/Contact",className:"/Contact"===window.location.pathname?"nav-link active":"nav-link"},"Contact"))))))},p=t(5),h=(t(41),t(18)),m=t.n(h);function u(){return r.a.createElement("form",{className:"contact-form",onSubmit:function(e){e.preventDefault(),m.a.sendForm("gmail","template_v9ocE0n7",e.target,"user_Y70bCiqtATYVD9wzAQWVy").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),alert("Thank you for reaching out to me! I will get back to you as soon as i can :)")}},r.a.createElement("input",{type:"hidden",name:"contact_number"}),r.a.createElement("div",{id:"name"},r.a.createElement("div",null,r.a.createElement("label",null,"Name")),r.a.createElement("input",{type:"text",name:"user_name"})),r.a.createElement("div",{id:"email"},r.a.createElement("div",null,r.a.createElement("label",null,"Email")),r.a.createElement("input",{type:"email",name:"user_email"})),r.a.createElement("div",{id:"message"},r.a.createElement("label",null,"Message"),r.a.createElement("div",null,r.a.createElement("textarea",{name:"message",id:"mesBox"}))),r.a.createElement("div",{id:"submit"},r.a.createElement("input",{type:"submit",id:"submitButt",style:{textDecoration:"none"}})))}t(44),t(45);var b=t(19),g=t.n(b);var f=function(){return r.a.createElement("video",{autoPlay:!0,muted:!0,loop:!0,id:"prof",style:{}},r.a.createElement("source",{src:g.a,type:"video/mp4"}))};var v=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header",onMouseLeave:function(){document.getElementById("bigboi").innerHTML='<div id="newMidDiv"><h1>Ian Sears</h1> <h3 >Full Stack Web Computer Man</h3> <img src="https://i.ibb.co/JdPvygR/me.png" alt="alternatetext"></div>'}},r.a.createElement("section",{class:"animated-grid"},r.a.createElement("a",{href:"https://strategy-scope.herokuapp.com/",className:"card border-gradient border-gradient-purple",id:"ss",onMouseOver:function(){document.getElementById("bigboi").innerHTML="<div id='newMidDiv'><h1>Stratagey Scope</h1> <br> <p>Stratagy Scope was a team colaboration with myself and other bootcamp members to make a slack style app, focused on project managment.</p>(this app is currently hosted on heroku, whos servers get put to 'sleep' so give it a minuet to load up)<br> <a href='https://github.com/justinkellogg89/miniature-disco'>Github</a> <br><a href='https://strategy-scope.herokuapp.com/'>Deployed Site</a></div>"}},r.a.createElement("p",{id:"desc"},"Stratagey Scope")),r.a.createElement("a",{href:"http://donus.ngrok.io/",id:"walls2",className:"card border-gradient border-gradient-purple",onMouseOver:function(){document.getElementById("bigboi").innerHTML="<div id='newMidDiv'><h1>MuhWalls 2</h1> <br> <p>This is my second go at a wallpaper site. This time i have a full mongo DB, and scrapped the react front end.<br> The db is intaking a new name, an id number ontop of the number mongo assigns. <br> It also takes in the pictures height and width and then calculates the aspect ratio. <br> It will have a custom time stamp that can be sorted by. Ther is also an array of keywords on every photo that are globally searchable on click. <br> This site and server are hosted on a google cloud Linux VM en1 machine, and tunneled with ngrok. <a href='https://github.com/shyaboi/MuhWalls'>Github</a> <br><a href='https://donus.ngrok.io/'>Deployed Site</a></div>"}},r.a.createElement("p",{id:"desc"},"Muhwalls 2")),r.a.createElement("a",{href:"https://dinguswallpapermassiv.herokuapp.com/",id:"walls",className:"card border-gradient border-gradient-purple",onMouseOver:function(){document.getElementById("bigboi").innerHTML="<div id='newMidDiv'><h1>MuhWalls</h1><p>I always spent tons of time on wallpaper websites picking hundereds of wallpapers to add to my wallpaper folder. Now i have finally made 2 of my own wallpaper sites(2 is the best).<br> This first one was made with react and node. I had the injest server on a raspberry pi and hosted the front end on heroku. <br> Currently the upload server is offline. I revamped and reused a lot of the original backed to build Muhwalls 2. <br> <a href='https://github.com/shyaboi/wallpapers'>Github</a> <br><a href='https://dinguswallpapermassiv.herokuapp.com/'>Deployed Site</a></p></div>  "}},r.a.createElement("p",{id:"desc"},"MuhWalls")),r.a.createElement("a",{href:"https://npopio.herokuapp.com/",id:"npop",className:"card border-gradient border-gradient-purple",onMouseOver:function(){document.getElementById("bigboi").innerHTML="<div id='newMidDiv'><h1>nPoP</h1> <br><div> <p>This is nPoP. nPoP is a full service npm package with a starter package installer simular to 'create-react-app'.<br> Make sure you have Node.js installed already.  Then to install the nPoP starter package, simply open your terminal ```npx npop``` it will install a full server(currently express made) with 3 routes, One of which for data. It will then pop open your default browser to the open server and open vs code if thats your default path. <br>  All asset folders, css and js files linked to server routes and server has configurable parameters. Working on a non express version as well. <br> <a href='https://www.npmjs.com/package/npop'>npm</a> <br> <a href='https://github.com/shyaboi/muhpackage'>Github </a> <br> <a href='https://npopio.herokuapp.com/'>Deployed Minimal Example nPoP Site</a>  </p></div></div>"}},r.a.createElement("p",{id:"desc"},"nPoP")),r.a.createElement("a",{href:"https://shyaboi.github.io/wordapp/",id:"word",class:"card border-gradient border-gradient-purple",onMouseOver:function(){document.getElementById("bigboi").innerHTML="<div id='newMidDiv'><h1>Words</h1> <br> <p>This is a word app. I wanted to practice with manipulating strings in different ways to changed their structure. My next plans will include an anagram checker <br> Currently the app can have a word entered. The app then checks if that word is a palindrome. It then prints the reverse of the word, displays the numberr of letters in the word, sorts the letters A~Z, then Z~A and does an API lookup for synonyms and definitions. <br> <a href='https://github.com/shyaboi/wordapp'>Github</a> <br><a href='https://shyaboi.github.io/wordapp/'>Deployed Site</a></div>"}},r.a.createElement("p",{id:"desc"},"Fun with strings")),r.a.createElement("a",{href:"https://lorddominic.github.io/grocerEASE",id:"grocerEase",className:"card border-gradient border-gradient-purple",onMouseOver:function(){document.getElementById("bigboi").innerHTML="<div id='newMidDiv'><h1>GrocerEase</h1> <br> <p>This application is meant to bundle all your desire resepies and generate an elegant shopping list of ingridients with exact amounts needed for all the total recipies.<br> <a href='https://github.com/shyaboi/grocerEASE'>Github</a> <br><a href='https://lorddominic.github.io/grocerEASE'>Deployed Site</a></div>"}},r.a.createElement("p",{id:"desc"},"grocerEASE")),r.a.createElement("a",{href:"https://shyaboi.github.io/canvasnake/",id:"snake",className:"card border-gradient border-gradient-purple",onMouseOver:function(){document.getElementById("bigboi").innerHTML="<div id='newMidDiv'><h1>Canvas Snake</h1> <br> <p>This is a simple snake game made with HTML canvas and some javascript. </p><br> The game currently has no loss condition, but I am implementing that and some poison fruits that the snake will have to avoid. If you play long enough, the poison will start to appear. <br> <a href='https://github.com/shyaboi/canvasnake'>Github</a> <br><a href='https://shyaboi.github.io/canvasnake/'>Deployed Site</a></p></div>"}},r.a.createElement("p",{id:"desc"},"Canvas Snake")),r.a.createElement("a",{href:"https://mailpoem.com",id:"mp",className:"card",onMouseOver:function(){document.getElementById("bigboi").innerHTML="<div id='newMidDiv'><h1>MaiL Poem</h1> <br> <p>MaiL Poem is an art project ment to blend music loops with ambient sounds and a vibrant story. It is currently still a work in progress. All music and artwork used in this project was created by myself. <br> <a href='https://github.com/shyaboi/mailpoem'>Github React Version</a> <br><a href='https://github.com/shyaboi/mailpoemdumb'>Github HTML Version</a> <br><a href='https://mailpoem.com/'>Deployed Site React Version</a> <br><a href='https://shyaboi.github.io/mailpoemdumb/'>Deployed Site HTML Version</a></p></div> "}},r.a.createElement("p",{id:"desc"},"MaiLPoem")),r.a.createElement("a",{href:"https://shyaboi.github.io/TubularRepoNameGeneratorSoldier/",id:"nameGen",class:"card border-gradient border-gradient-purple",onMouseOver:function(){document.getElementById("bigboi").innerHTML="<div id='newMidDiv'><h1>Repo Name Generator</h1> <br> <p>This applicatioin randomly generates a repo name from 2 given name arrays. I plan on making different repo version settings, i.e. create-react-app wants repos to be all lowercase. I have also made an electron app version that can be installed and executed on mac, osx and linux. <br> <a href='https://github.com/shyaboi/TubularRepoNameGeneratorSoldier'>Github</a><br> <a href='https://github.com/shyaboi/tubularreponamegeneratorsoldierelectron'> Electron app version </a> <br><a href='https://shyaboi.github.io/TubularRepoNameGeneratorSoldier/'>Deployed Site</a></div>"}},r.a.createElement("p",{id:"desc"},"Repo Name Gen")),r.a.createElement("a",{href:"https://shyaboi.github.io/glowingScheduler",id:"glow",class:"card border-gradient border-gradient-purple",onMouseOver:function(){document.getElementById("bigboi").innerHTML="<div id='newMidDiv'><h1>8 Hour Workday Scheduler</h1> <br> <p>This is a simple sceduler that will save your notes for each hour of your work day. It will save the text in the hour to the internal storage in your browser, so currently to clear your schedule, clear your browsers internal storage. <br> <a href='https://github.com/shyaboi/glowingScheduler'>Github</a> <br><a href='https://shyaboi.github.io/glowingScheduler'>Deployed Site</a></div>"}},r.a.createElement("p",{id:"desc"},"8 Hour scheduler")),r.a.createElement("a",{href:"https://shyaboi.github.io/DawnOfWeather/",id:"jQ",class:"card border-gradient border-gradient-purple",onMouseOver:function(){document.getElementById("bigboi").innerHTML="<div id='newMidDiv'><h1>JQuery Weather</h1> <br> <p>This application can take an input of any city in open weathers DB with a fetch API and give current weather with a UV index, wind speed, and humidity, as well as a five day forcast. <br> This application is made only with HTML, Javascript, and JQuery. <br> <a href='https://github.com/shyaboi/DawnOfWeather'>Github</a> <br><a href='https://shyaboi.github.io/DawnOfWeather/'>Deployed Site</a></div>"}},r.a.createElement("p",{id:"desc"},"JQuery Weather")),r.a.createElement("a",{href:"https://glacial-beyond-53964.herokuapp.com/pokedex",id:"pokemon",class:"card border-gradient border-gradient-purple",onMouseOver:function(){document.getElementById("bigboi").innerHTML="<div id='newMidDiv'><h1>Pokemon</h1> <br> <p>This application you can add pokemon to a mySQL database, and them have them all printed on a pokedex screen. There is another fight screen availible where you choose two pokemon by number and one will attack until the other 'dies'</p> (this app is currently hosted on heroku, whos servers get put to 'sleep' so give it a minuet to load up) <br> <a href='https://github.com/shyaboi/Dope-Pokemon-Dopeness'>Github</a> <br><a href='https://glacial-beyond-53964.herokuapp.com/pokedex'>Deployed Site</a></div>"}},r.a.createElement("p",{id:"desc"},"Pokemon")),r.a.createElement("div",{id:"bigboi",className:"card border-gradient border-gradient-purp"},r.a.createElement("div",{id:"newMidDiv"},r.a.createElement("h1",null,"Ian Sears"),r.a.createElement("h3",null,"Full Stack Web Computer Man"),r.a.createElement(f,null))))))},y=(t(46),t(20)),E=t.n(y),w=t(21),k=t.n(w),M=t(22),T=t.n(M),x=t(23),D=t.n(x);var S=function(){return r.a.createElement("div",{class:"footer"},r.a.createElement("a",{href:"https://github.com/shyaboi"},r.a.createElement("img",{src:E.a,id:"gitHub"})),r.a.createElement("a",{href:"https://www.linkedin.com/in/ian-sears-5931734a"},r.a.createElement("img",{src:k.a,id:"linkedIn"})),r.a.createElement("a",{href:"https://github.com/shyaboi"},r.a.createElement("img",{src:T.a,id:"youTube"})),r.a.createElement("a",{href:"https://stock.adobe.com/contributor/209064146/Ian"},r.a.createElement("img",{src:D.a,id:"adobe"})))},I=(t(47),t(24)),N=t.n(I),L=t(25),P=t.n(L);var B=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("section",{class:"animated-grid"},r.a.createElement("div",{className:"card border-gradient border-gradient-purple"},r.a.createElement("a",{href:"https://github.com/shyaboi/awesomesocketiospiffyness"},r.a.createElement("p",{id:"desc"},"Socket IO Chat"),r.a.createElement("img",{src:P.a,alt:"mail poem"}))),r.a.createElement("div",{className:"card border-gradient border-gradient-purple",id:"construct"},r.a.createElement("img",{src:N.a,alt:"under construction"})))))};var G=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(s.a,null,r.a.createElement(d,null),r.a.createElement(p.a,{exact:!0,path:"/",component:v}),r.a.createElement(p.a,{exact:!0,path:"/Contact",component:u}),r.a.createElement(p.a,{exact:!0,path:"/CLI",component:B}),r.a.createElement(S,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(48);var H=t(26),A=t.n(H);var O=function(){return r.a.createElement("div",{id:"sun"},r.a.createElement("img",{src:A.a,alt:"sun",style:{opacity:.3}}))},W=(t(49),t(27)),C=t.n(W);var j=function(){return r.a.createElement("div",{id:"palms"},r.a.createElement("img",{src:C.a,alt:"Palm Trees",style:{opacity:.3}}))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(G,null),r.a.createElement(O,null),r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[28,1,2]]]);
//# sourceMappingURL=main.fe19215c.chunk.js.map