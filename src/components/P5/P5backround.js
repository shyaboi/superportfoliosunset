import React from "react";
import Sketch from "react-p5";
 let windowResized;
 const P5sketch =  (props) => {
  let canvas;
  let r=0,g=0,b=0;
  let bigRan = Math.floor(Math.random(1)*3)
  
    const setup = (p5, canvasParentRef) => {
        canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
        canvas.position(0,0);
        canvas.style('z-index', '-1')
        switch (bigRan) {
        case 0: r=255; break;
        case 1: g=255; break;
        case 2: b=255; break;
        }

         windowResized = () =>{
          p5.resizeCanvas(p5.windowWidth, p5.windowHeight)  
        }
    
        const rgb = ()=> {
            
                // console.log(r,g,b)
              if(r > 0 && b === 0){
                r--;
                g++;
              }
              if(g > 0 && r === 0){
                g--;
                b++;
              }
              if(b > 0 && g === 0){
                r++;
                b--;
              }
          
        }
        setInterval(() => {
            rgb()
            
        }, 50);
    
    }



    const draw = (p5) => {
        windowResized()
            p5.background(r,g,b);
    };
 
    return <Sketch setup={setup} draw={draw} />;
};

export default P5sketch;