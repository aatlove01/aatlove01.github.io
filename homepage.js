console.log('JS is here');
console.log('enter button');

// constant variable looking to get the button
const enter = getElementById('enterButton');

// looking through document for the body
let theBody = document.querySelector('body');

// listening for the click to go to the assignement function
console.log('listening');
enter.addEventListener('click', assignment);

console.log('in function; going to new page');
function assignment(){

}
