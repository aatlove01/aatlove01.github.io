// console.log("JavaScript is here");
//
// const secondPage = document.getElementById('button2');
//
// console.log("I'm listening");
//
// secondPage.addEventListener('click', nextpage);
//
// console.log("Button was clicked");
//
// function nextpage(){
//
//
// }

// help from https://gist.github.com/prof3ssorSt3v3/52ebd432bb7b8a155985a2f82509541d and the video version is https://www.youtube.com/watch?v=NxVCq4p0Kb0&ab_channel=SteveGriffith-Prof3ssorSt3v3

let inputResponses = [];
       // example {id:1592304983049, title: 'Deadpool', year: 2015}
       const input = (ev)=>{
           ev.preventDefault();  //to stop the form submitting
           let inputResponse = {
               id: Date.now(),
               comment: document.getElementById('typeSomething').value
           }
           inputResponses.push(inputResponse);
           console.log(inputResponses);
           console.log(inputResponse);
           document.forms[0].reset(); // to clear the form for the next entries
           //document.querySelector('form').reset();

           // //for display purposes only
           // console.warn('added' , {movies} );
           // let pre = document.querySelector('#msg pre');
           // pre.textContent = '\n' + JSON.stringify(movies, '\t', 2);

           //saving to localStorage
           localStorage.setItem('MyConfessionsList', JSON.stringify(inputResponses) );
       }
       document.addEventListener('DOMContentLoaded', ()=>{
           document.getElementById('button').addEventListener('click', input);
       });
