console.log("The Button");

let theButton_1 = document.querySelector('button');
let theButton_2 = document.querySelector('button2')
let theBody = document.querySelector('body');


theButton_1.addEventListener('click', buttonOne);

function buttonOne(){
  // if (mouseIsPressed){
    console.log('you clicked!');
    console.log(theBody.style);
    theBody.style.backgroundColor = "pink";
    console.log("Horray you clicked the button");
    theBody.style.display = "hidden";
    console.log("I disappeared")
  // }
}
