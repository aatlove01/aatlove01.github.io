// help from https://www.w3schools.com/js/tryit.asp?filename=tryjs_dom_animate_3

console.log("JavaScript here");

const theBuilding = document.getElementById('building');
const page = document.getElementById('scrollImg');
const quillInk = document.getElementById('quill');

console.log('listening');

theBuilding.addEventListener('click',counter);
page.addEventListener('click',counter);
quillInk.addEventListener('click', counter);

console.log('counting');

let count = 1;
function counter(){
  if (count == 1){
    theBuilding.style.display = "block";
    console.log("Building showed up")
    page.style.display = 'none';
    console.log('Scroll disappears');
    quillInk.style.display = 'none';
    console.log('Quill disappears');
    console.log(count);
  }
}
