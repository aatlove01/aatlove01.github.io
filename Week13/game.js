console.log('JavaScript is here');

let canvas, ctx;

// canvas becomes width and height of the screen window
// canvasMain.width = window.innerWidth;
// canvasMain.height = window.innerHeight;

// from https://codeburst.io/creating-and-drawing-on-an-html5-canvas-using-javascript-93da75f001c1
// setup configuration variables and start the program
function init(){
  canvas = document.getElementById('canvasMain');
  ctx = canvas.getContext('2d');
}

// wait for the HTML to load
document.addEventListener('DOMContentLoaded', init);

console.log(canvasMain);

// canvas text https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillText
