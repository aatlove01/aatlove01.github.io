console.log("The Message");

let myName= "Ama";
let myLast = "Achampong";

console.log(myName +""+myLast+45);
let theButton = document.querySelector('button');
let theBody = document.querySelector("body");
let theTxt = document.querySelector('h3');

theButton.addEventListener('click', buttonOne);

function buttonOne(){
  console.log('you clicked!');
  console.log(theBody.style);
  theBody.style.backgroundColor = "pink";
  theTxt.textContent ="Horray you clicked the button";
}
