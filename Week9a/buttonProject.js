console.log("The Button");


// inspired by https://codenamemadison.github.io/button_assignment/

const theButton_1 = document.getElementById('button');
const theButton_2 = document.getElementById('button2');
const theButton_3 = document.getElementById('button3');
const theButton_4 = document.getElementById('button4');
const theButton_5 = document.getElementById('button5');
const theButton_6 = document.getElementById('button6');
const theButton_7 = document.getElementById('button6');

const surpriseMessage = document.getElementById('message');

const potatoBody1 = document.getElementById('potatoBody');
const potatoArms2 = document.getElementById('arms');
const potatoFeet3 = document.getElementById('feet');
const potatoEyes4 = document.getElementById('eyes');
const potatoNose5 = document.getElementById('nose');
const potatoMouth6 = document.getElementById('mouth');
const potatoEars7 = document.getElementById('ears');
const potatoTops8 = document.getElementById('hat');


let theBody = document.querySelector('body');


theButton_1.addEventListener('click', counter);
theButton_2.addEventListener('click', counter);
theButton_3.addEventListener('click', counter);
theButton_4.addEventListener('click', counter);
theButton_5.addEventListener('click', counter);
theButton_6.addEventListener('click', counter);
theButton_7.addEventListener('click', counter);
surpriseMessage.addEventListener('click',counter);


let count = 1;
function counter(){
  // if (mouseIsPressed){
    console.log('you clicked!');
  if (count == 1){
    theButton_1.style.visibility = "hidden";
    console.log("I disappeared")
    theButton_2.style.visibility = "visible";
    console.log("button 2 appear");
    potatoBody1.style.visibility = "visible";
    count += 1;
    console.log(count);
  } else
  if (count == 2){
    console.log('you clicked!');
    theButton_2.style.visibility = "hidden";
    console.log("I disappeared");
    theButton_3.style.visibility = "visible";
    console.log("button 3 appear");
    potatoArms2.style.visibility = "visible";
    mustache.style.visibility = "visible";
    count += 1;
    console.log(count);
  } else
  if (count == 3){
    console.log('you clicked!');
    theButton_3.style.visibility = "hidden";
    console.log("I disappeared");
    theButton_4.style.visibility = "visible";
    console.log("button 4 appear");
    potatoFeet3.style.visibility = "visible";
    count += 1;
    console.log(count);
  } else
  if (count == 4){
    console.log('you clicked!');
    theButton_4.style.visibility = "hidden";
    console.log("I disappeared");
    theButton_5.style.visibility = "visible";
    console.log("button 5 appear");
    potatoEars7.style.visibility = "visibility"
    potatoMouth6.style.visibility = "visible";
    count += 1;
    console.log(count);
  } else
  if (count == 5){
    console.log('you clicked!');
    theButton_5.style.visibility = "hidden";
    console.log("I disappeared");
    theButton_6.style.visibility = "visible";
    console.log("button 6 appear");
    potatoEyes4.style.visibility = "visible";
    count += 1;
    console.log(count);
    potatoTops8.style.visibility = "visible";
  } else
  if (count == 6){
    console.log('you clicked!');
    theButton_6.style.visibility = "hidden";
    console.log("I disappeared");
    theButton_7.style.visibility = "visible";
    console.log("button 7 appear");
    potatoNose5.style.visibility = "visible";

    count = 7;
    console.log(count);

  } else
  if (count == 7){
    console.log('you clicked!');
    theButton_7.style.visibility = "hidden";
    console.log("I disappeared");
    count += 1;
    console.log(count);
    surpriseMessage.style.visibility = "visible";
    potatoMouth6.style.visibility = "visible";

}}
// function buttonTwo(){
//   console.log('you clicked!');
//   theButton_2.style.visibility = "hidden";
//   console.log("I disappeared");
//   theButton_3.style.visibility = "visible";
// }
//
// function buttonThree(){
//   console.log('you clicked!');
//   theButton_3.style.visibility = "hidden";
//   console.log("I disappeared");
//   theButton_4.style.visibility = "visible";
// }
//
// function buttonFour(){
//   console.log('you clicked!');
//   theButton_4.style.visibility = "hidden";
//   console.log("I disappeared");
//   theButton_5.style.visibility = "visible";
// }
//
// function buttonFive(){
//   console.log('you clicked!');
//   theButton_5.style.visibility = "hidden";
//   console.log("I disappeared");
//   theButton_6.style.visibility = "visible";
// }
//
// function buttonSix(){
//   console.log('you clicked!');
//   theButton_6.style.visibility = "hidden";
//   console.log("I disappeared");
//   theButton_7.style.visibility = "visible";
// }
//
// function buttonSeven(){
//   console.log('you clicked!');
//   theButton_7.style.visibility = "visible";
//   console.log("I stay");
// }
