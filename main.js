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
    width: 1200,
    height:600,
  }
})
let CANVAS_W = 1200;
let CANVAS_H = 600;


/* Variables: Top-Level variables defined here are used to hold game state */
let buttonx = Math.random() * 1150;
let buttony = Math.random() * 550;

const radius = 20;
//^creates button's defining features

let startTime = null;
let timeLimit = null;

let score = 0;
let started = false; // used to hide the start message after first click

function randomPoint(width, height, radius) {
  const x = radius + Math.random() * (width - 2 * radius);
  const y = radius + Math.random() * (height - 2 * radius);
  return { x, y };
}

function startTimerIfNeeded() {
  if (!startTime) startTime = performance.now();
  started = true;
}
//starts timer on first click
function getElapsedSeconds() {
  if (!startTime) return 0;
  return (performance.now() - startTime) / 1000;
}
//gets elapsed time in seconds
function resetGame() {
  score = 0;
  // respawn button at a new random location
  const p = randomPoint(CANVAS_W, CANVAS_H, radius);
  buttonx = p.x;
  buttony = p.y;
  startTime = null;
  started = false;
}
//resets the game once it ends
function endGame() {
  const elapsed = getElapsedSeconds().toFixed(2);
  // message shown in the dialog. gi.dialog(title, message, callback)
  gi.dialog(
    "Game Over",
    `Time: ${elapsed} s\nScore: ${score}`,
    () => {
      // callback runs when user dismisses the dialog (Play again)
      resetGame();
    }
  );
}
//ends game and shows score
//functions with help from Copilot

//need to track whether the score goes up

/* Drawing Functions */





gi.addDrawing( 
  function ({ ctx, width, height, elapsed, stepTime}) {
  ctx.beginPath();
  ctx.arc(buttonx,buttony,radius,0,2*Math.PI);
   ctx.strokeStyle = "black";
   ctx.fillStyle = "red";
   ctx.fill();
   ctx.stroke();
   ctx.closePath();  
  }
)
//creates button

//need to make it so new button spawns after click, and add scoring everytime a button is clicked

// Click handler: check hit, update score, spawn new target (from Copilot)
gi.addHandler("click", function ({ x, y }) {
  const dx = x - buttonx;
  const dy = y - buttony;
  const dist = Math.hypot(dx, dy);
  if (dist <= radius) {
    startTimerIfNeeded(); // start timer on first hit
    score += 1;
    started = true;
    const p = randomPoint(CANVAS_W, CANVAS_H, radius*2);
    buttonx = p.x;
    buttony = p.y;
    console.log("Hit! score=", score, "new pos=", buttonx, buttony);
  }
});

gi.addDrawing(
  function ({ ctx, width, height, elapsed, stepTime}) {
ctx.font = "24px Arial";
ctx.fillStyle = "black";
ctx.textAlign = "left";
ctx.fillText("Press 1 to change mode",0,60);
  }
)
gi.addDrawing(function ({ ctx, width, height }) {
  // other draw code...
  const elapsed = getElapsedSeconds().toFixed(2);
  ctx.fillStyle = "black";
  ctx.font = "18px Arial";
  ctx.textAlign = "left";
  ctx.fillText(`Time: ${elapsed}s`, 10, 100);
});
gi.addDrawing(
  function ({ ctx, width, height, elapsed, stepTime}) {
    ctx.fillStyle = "black";
    ctx.font = "24px Arial";
    ctx.textAlign = "left";
    ctx.fillText("Score: " + score, 10, 30);
})

//moves button left and right with arrow keys
//gi.addHandler(
//  "keydown",
 // function ({event}) {
 //   if (event.key === "ArrowRight") {
 //     buttonx += 5;
 // } else if (event.key === "ArrowLeft") {
  //    buttonx -= 5;
  //}
//});

if (score)
//creating text for home page "Click button to start and Press 1 to change mode"
gi.addDrawing(
  function ({ ctx, width, height, elapsed, stepTime}) {
ctx.font = "30px Arial";
ctx.fillStyle = "black";
ctx.textAlign = "center";
ctx.fillText("Click Button to Start", width / 2, height / 2);
  }
)



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

gi.addHandler(
  "click",
  function ({ event, x, y }) {
    // Your click handling code here...
  }
)


/* Run the game */
gi.run();


