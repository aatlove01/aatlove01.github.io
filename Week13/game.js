// canvas text https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillText

console.log('JavaScript is here');

let canvas;
let ctx;
let index;
const playButton = document.getElementById('play');
const titleImage = document.getElementById('xMarkImage');
const titleImage_2 = document.getElementById('gameDescriptors');
const titleImage_3 = document.getElementById('island');
const title = document.getElementById('title');
const islandMap = document.getElementById('slideImg');
const map_left_button = document.getElementById('button-left');
const map_right_button = document.getElementById('button-right');
// const dotButton_nav = document.getElementsByClassName('dotButtons');
const islandOneKidnap = document.getElementById('kidnapIsland');




// from https://codeburst.io/creating-and-drawing-on-an-html5-canvas-using-javascript-93da75f001c1
// setup configuration variables and start the program
function init(){
  canvas = document.getElementById('canvasMain');
  ctx = canvas.getContext('2d');
}
// wait for the HTML to load
document.addEventListener('DOMContentLoaded', init);
console.log(canvasMain);

playButton.addEventListener('click',leave_home);
console.log('button clicked');
map_left_button.addEventListener('click',showMapOne);
console.log('left button clicked');
map_right_button.addEventListener('click',showMapOne);
console.log('right button clicked');
// dotButton_nav.addEventListener('click',showMapTwo)
// console.log('dot navigation')
islandOneKidnap.addEventListener('click',kidnapGame);
console.log('going to kidnap island');

function leave_home(){

  // getting rid of the home/play screen
  playButton.style.display = 'none' ;
  console.log("the button disappeared");
  titleImage.style.display = 'none' ;
  console.log("the xMarkImage disappeared");
  titleImage_2.style.display ='none' ;
  console.log("the game description disappeared");
  titleImage_3.style.display = 'none';
  console.log("the island image disappeared");
  title.style.display = 'none';
  console.log("the title disappeared");
  islandMap.style.display = 'block';
  console.log('map of islands appeared');
  map_left_button.style.display = 'block';
  console.log('left button displayed');
  map_right_button.style.display = 'block';
  console.log('right button displayed');
  // dotButton_nav.style.display = 'block';
  islandOneKidnap.style.display = 'block';
  console.log('kidnap island appear on map');
}

// js script code inspired and modified from https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_slideshow_self and MDN article regarding document.querySelector instead of get elementsbyclassname
// more help on working through it from this site https://codekky.medium.com/how-to-create-manual-image-slider-ae13f5de9795
let slideIndex = 1;
showMapOne(slideIndex);

function plusSlide(n){
  showMapOne(slideIndex +=n);
}

function showMapOne(n){
  let i;
  let mapSlide = document.getElementsByClassName('slide');

  if (n === undefined){n = ++slideIndex;}
  if (n > mapSlide.length) {slideIndex = 1;}
  if (n < 1) {slideIndex = mapSlide.length;}
  for (i = 0; i < mapSlide.length; i++) {
    // checking index and the mapslide
    console.log('index' ,index);
    console.log('mapSlide' ,mapSlide);
    
    index = mapSlide[i];
    index.style.display = 'none';
  }
  indexPrev = mapSlide[slideIndex-1]; 
  indexPrev.style.display = 'block';
  // checking i and index of the slide
  console.log('indexPrev' ,indexPrev);
  console.log('n' ,n, 'i', i);

}

function kidnapGame(){
  islandMap.style.display = 'none';
  console.log('map of islands disappeared');
  map_left_button.style.display = 'none';
  console.log('left button is gone');
  map_right_button.style.display = 'none';
  console.log('right button gone');
  islandOneKidnap.style.display = 'none';
  console.log('island and map disappered');
}
