/* Main game file: main.js */
/* Game: Button Game Trainer */
/* Authors: Jayden Conde */
/* Description: Do you want to try and download Aim Labs on a school PC? Well I don't want to, so here is a simple game where you can click buttons similarly to an aim trainer that will randomly spawn! */
/* Citations: [List any resources, libraries, tutorials, etc you used here] 
/* Note: If you use significant AI help you should cite that here as well */
/* including summaries of prompts and/or interactions you had with the AI */
/* In addition, of course, any AI-generated code should be clearly marked */
/* in comments throughout the code, though of course when using e.g. CoPilot */
/* auto-complete it may be impractical to mark every line, which is why you */
/* should also include a summary here */


import "./style.css";

import { GameInterface } from 'simple-canvas-library';

let gi = new GameInterface({
  canvasSize: {
    width: 1000;
    height:700;
  }
})
});

/* Variables: Top-Level variables defined here are used to hold game state */
buttonx = Math.random() * 950;
buttony = Math.random() * 650;



/* Drawing Functions */

gi.addDrawing(
  function ({ ctx, width, height, elapsed, stepTime}) {
   ctx.arc(20,20,2*Math.PI);
   ctx.strokeStyle = "black";
   ctx.fill();
   ctx.stroke();
    // Your drawing code here...    
  }
)
//creating text for home page "Click button to start and Press 1 to change mode"
ctx.font = "30px Arial";
ctx.fillstyle = "black";
ctx.textAlign = "center";
ctx.fillText("Click button to start", width / 2, height / 2);

/* Example drawing function: you can add multiple drawing functions
that will be called in sequence each frame. It's a good idea to do 
one function per each object you are putting on screen, and you
may then want to break your drawing function down into sub-functions
to make it easier to read/follow */
gi.addDrawing(
  function ({ ctx, width, height, elapsed, stepTime }) {
    // Your drawing code here...    
  }
)

/* Input Handlers */

/* Example: Mouse click handler (you can change to handle 
any type of event -- keydown, mousemove, etc) */

gi.addEventListener(
  "click",
  function ({ event, x, y }) {
    // Your click handling code here...
  }
)


/* Run the game */
gi.run();


