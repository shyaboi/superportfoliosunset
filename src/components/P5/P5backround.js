import React from "react";
import Sketch from "react-p5";
 
 const P5sketch =  (props) => {
  var canvas;
  var c, c1, c2;
  var r=0,g=0,b=0;
  var bigRan = Math.floor(Math.random(1)*3)
  
    const setup = (p5, canvasParentRef) => {
        // use parent to render the canvas in this ref
        // (without that p5 will render the canvas outside of your component)
        canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
        canvas.position(0,0);
        canvas.style('z-index', '-1')
        // Define colors
        switch (bigRan) {
        case 0: r=255; break;
        case 1: g=255; break;
        case 2: b=255; break;
        }
            // g=ranG;
            // b=ranB;
        const rgb = ()=> {
            
                console.log(r,g,b)
              if(r > 0 && b == 0){
                r--;
                g++;
              }
              if(g > 0 && r == 0){
                g--;
                b++;
              }
              if(b > 0 && g == 0){
                r++;
                b--;
              }
          
        }
        setInterval(() => {
            rgb()
            
        }, 50);
    
    }



    const draw = (p5) => {
       
            p5.background(r,g,b);
    };
 
    return <Sketch setup={setup} draw={draw} />;
};

export default P5sketch;