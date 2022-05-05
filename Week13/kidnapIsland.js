console.log(' In JavaScript for kidnapIsland is here');
// import platform from '.images/sidewalk with building image.png'


 canvas = document.getElementById('canvasMain');
 c = canvas.getContext('2d');


// help with uploading image for parallax scrolling background from https://github.com/Botir/HTML5-Canvas-parallax/blob/master/js/main.js
// while also combining and refining code from mario game tutorial 
const image = {
    bg: './images/bg.png',
    ground: './images/ground.png',
    cloud: './images/clouds.png',
    home1: './images/sidewalk building 1.png',
    inhome1: './images/',
    platform: './images/platform.png'

}

const femaleSpeaker = new Image();
femaleSpeaker.src =  'images/Idle.png'
// const enterDoorHome = new Image();
// enterDoorHome.src =  'images/door_to_enter.png'


// help from Parallax in JavaScript Games - (parallax tutorial)
// https://www.youtube.com/watch?v=Mg7ibYWhjPI&ab_channel=Frankslaboratory
const backgroundLayer1 = new Image();
backgroundLayer1.src = 'images/bg.png';
const backgroundLayer2 = new Image();
backgroundLayer2.src = 'images/clouds.png';
const backgroundLayer3 = new Image();
backgroundLayer3.src = 'images/sidewalk_building.png';
const backgroundLayer4 = new Image();
backgroundLayer4.src = 'images/sidewalk.png';


// character images from https://www.gameart2d.com/cute-girl-free-sprites.html
// created sprite sheet with this generator https://codeshack.io/images-sprite-sheet-generator/
const girl_sprite = new Image();
girl_sprite.src = 'images/spritesheet-run.png'
const girl_idle = new Image();
girl_idle.src = 'images/spriteStandRight.png'
const girl_run = new Image();
girl_run.src = 'images/spriteRunRight.png'

const girl_runleft = new Image();
girl_runleft.src = 'images/spriteRunLeft.png'
const girl_idleleft = new Image();
girl_idleleft.src = 'images/spriteStandLeft.png'


// const backgroundLayer5 = new Image();
// backgroundLayer5.src = 'images/sidewalk_building_2.png';

let x = 0;
let x2 = 3000;
gameSpeed = 0;


// help from video https://www.youtube.com/watch?v=4q2vvZn5aoo&ab_channel=ChrisCourses - mario game tutorial 

canvas.width =innerWidth;
canvas.height = innerHeight;

const gravity = 1.5 ;

class Player{
    constructor(){
        this.position = {
            x: 100,
            y: 100
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.width = 150
        this.height = 250
        this.image = girl_idle  
        this.frames = 0    
        this.sprites ={
            stand: {
                right:girl_idle,
                left:girl_idleleft,
                cropWidth: 177,
                width:66
            },
            run:{
                right: girl_run,
                left:girl_runleft,
                cropWidth: 341,
                width:127.875
            }
        } 
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 177
    }

    draw(){
        // c.fillStyle = 'red';
        // c.fillRect(this.position.x, this.position.y, this.width, this.height)
        c.drawImage(this.currentSprite,this.currentCropWidth*this.frames,0,this.currentCropWidth,400,this.position.x, this.position.y, this.width, this.height)
       
    }

    update(){
        this.frames++
        // running to the right
        if (this.frames > 59 && 
            (this.currentSprite === this.sprites.stand.right
        || this.currentSprite === this.sprites.stand.left )
        )
        this.frames = 0
        else if (
            this.frames > 29 && 
            (this.currentSprite === this.sprites.run.right
        || this.currentSprite === this.sprites.run.left)
        )
        this.frames = 0;
        

        this.draw();
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x

        if (this.position.y + this.height + this.velocity.y <= canvas.height)
        this.velocity.y += gravity 
        else this.velocity.y = 0
        // this.position.y += this.gravity
    }
}


class femaleSpeak{
    constructor(){
        this.position = {
            x: 800,
            y: 100
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.width= 150
        this.height= 200
        this.image= femaleSpeaker
    }
    draw(){
        c.drawImage(this.image,this.position.x, this.position.y, this.width, this.height)
       
    }
    update(){
        
        this.draw();
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x

        if (this.position.y + this.height + this.velocity.y <= canvas.height)
        this.velocity.y += gravity 
        else this.velocity.y = 0
    }
}

class ExploreHome{
    constructor(){
        this.position = {
            x: 2500,
            y: 650
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.width= 150
        this.height= 180
        this.image= enterDoorHome
    }
    draw(){
        c.drawImage(this.image,this.position.x, this.position.y, this.width, this.height)
       
    }
    // update(){
        
    //     this.draw();
    //     this.position.y += this.velocity.y
    //     this.position.x += this.velocity.x

    //     if (this.position.y + this.height + this.velocity.y <= canvas.height)
    //     this.velocity.y += gravity 
    //     else this.velocity.y = 0
    // }
}

class Platform {
    constructor({x,y}){
        this.position = {
        x,
        y 
    }

    this.width = 200;
    this.height = 0.2
    }

draw(){
    c.fillStyle = 'blue';
    c.fillRect(this.position.x, this.position.y, this.width,this.height)
    // c.drawImage(this.image, this.position.x, this.position.y, this.width,this.height)
}
}



// console.log(images)

const player = new Player();
const TalkToLady = new femaleSpeak();
// const door = new ExploreHome();

const platforms = [
    new Platform({
        x:400,
        y:550,
        
    }),
    new Platform({
        x: 2000,
        y: 400,
        
    }),
    new Platform({
        x:1200,
        y:500,
        
    })
]

let lastKey
const keys = {
    right:{
        pressed:false
    },
    left:{
        pressed:false
    }
}


let scrollOffset = 0

function animate(){
    requestAnimationFrame(animate)
    c.clearRect(0,0,canvas.width, canvas.height);

    // parallax tutorial 
    // backgroundLayer sky at x = 0
    c.drawImage(backgroundLayer1,x,0);

    // backgroundLayer clouds at x = 0
    c.drawImage(backgroundLayer2,x,0);

    // backgroundLayer sky at x2 =  3000
    c.drawImage(backgroundLayer1,x2,0);

    // backgroundLayer clouds at x2 = 3000
    // c.drawImage(backgroundLayer2,x2,0);

    // backgroundLayer buildings image 1 at x = 0
    c.drawImage(backgroundLayer3,x,255);


    // backgroundLayer sidewalk at x = 0
    c.drawImage(backgroundLayer4,x,350);


    player.update()
    TalkToLady.update()
    platforms.forEach(platform => {
        // console.log('platform')
        platform.draw()
    })

    // female speaking
    TalkToLady.draw()

    // door to enter through
    // door.draw()
    
    
    if (keys.right.pressed && player.position.x < 600) {
        player.velocity.x = 5
    } else if (keys.left.pressed  && player.position.x > 100) {
        player.velocity.x = -5
    } else{ 
        player.velocity.x = 0
        
        if (keys.right.pressed){
            scrollOffset +=5
            platforms.forEach((platform) => {
                // original entry was 5 for platform position
                platform.position.x -=5
                TalkToLady.position.x-=2
                // door.position.x-=2

                // x -= 2;
            })
            x -= 5;
            // console.log('x when moving to right is',x)
            if ((x< -4685) && (player.position.x == 600) ){
                x= -4685
            }
            
        }else if (keys.left.pressed){
            scrollOffset -=5
            platforms.forEach((platform) => {
                // original entry was 5 for platform position
                platform.position.x +=5
                TalkToLady.position.x+=2
                // door.position.x+=0.5
                // x += 2;
            })
            x += 5;
            // if (x < 3000) x = 0
            // if (x < 3000){ x = 0}
            if ((x > 0) && (player.position.x < 600) ){
                x= 0
            }
            // console.log('x when moving to left is',x)
            
            // if (x > 0) x = 3000
        }    
    }

    // console.log(scrollOffset)

// platform collison detection from mario tutorial 
platforms.forEach((platform) => {
    if (
        player.position.y +player.height <= 
            platform.position.y &&
        player.position.y + player.height +
            player.velocity.y >= 
            platform.position.y &&
        player.position.x + player.width >=
            platform.position.x &&
        player.position.x <= platform.position.x + platform.width

    ){
        player.velocity.y =0
    }
})
// sprite switching - mario tutorial 
if(
    keys.right.pressed 
    && lastKey === 'right' 
    && player.currentSprite !== player.sprites.run.right
    ){
    player.frames = 1
    player.currentSprite = player.sprites.run.right
    player.currentCropWidth = player.sprites.run.cropWidth
    player.width = player.sprites.run.width
}else if ( 
    keys.left.pressed 
    && lastKey === 'left' 
    && player.currentSprite !== player.sprites.run.left
    ){
    player.currentSprite = player.sprites.run.left
    player.currentCropWidth = player.sprites.run.cropWidth
    player.width = player.sprites.run.width

}else if ( 
    ! keys.left.pressed 
    && lastKey === 'left' 
    && player.currentSprite !== player.sprites.stand.left
    ){
    player.currentSprite = player.sprites.stand.left
    player.currentCropWidth = player.sprites.stand.cropWidth
    player.width = player.sprites.stand.width
}else if ( 
    ! keys.right.pressed 
    && lastKey === 'right' 
    && player.currentSprite !== player.sprites.stand.right
    ){
    player.currentSprite = player.sprites.stand.right
    player.currentCropWidth = player.sprites.stand.cropWidth
    player.width = player.sprites.stand.width
}


}

// let LadySpeech = document.querySelector('.text');

// let speeds = {
//     pause: 500,
//     slow:120,
//     normal:90,
//     fast:40,
//     superFast:10
// };

// let textLines =[
//     {speed: speeds.slow, string:"Oh,hello"},
//     {speed: speeds.pause, string:"",pause:true},
//     {speed: speeds.normal, string:"Have you seen my pet"},
//     {speed: speeds.fast, string:"frog", classes:['green']},
//     {speed: speeds.normal, string:"around?"},
    
// ];

// let characters = [];
// textLines.forEach((line,index) =>{
//     if(index < textLines.length -1){
//         line.string +=" "; //adding a space
//     }
//     line.string.split('').forEach((character) => {
//         let span =document.createElement('span');
//         span.textContent =character;
//         LadySpeech.appendChild(span);
//         characters.push(
//             {
//                 span:span,
//                 inSpace:character === " " && !line.pause,
//                 delayAfter: line.speed,
//                 classes: line.classes || []
//             });
//     });
//     });
    

// // help with speech text box from https://codepen.io/punkydrewster713/pen/zYKdywP and https://www.youtube.com/watch?v=8i2K7uwh124&ab_channel=DrewConley
// function LadySpeak(list){
//     // LadySpeech.display.style = 'block';
//     let next = list.splice(0,1)[0];
//     next.span.classList.add('revealed');
//     next.classes.forEach((c) => {
//         next.span.classList.add(c);
//         });
//         let delay = next.isSpace && !next.pause ? 0 : next.delayAfter;

//         if (list.length >0){
//             setTimeout(function(){
//                 LadySpeak(list);
//             },delay);
//         }
// }

// // kick it off -speech text box help
// setTimeout(() =>{
//     LadySpeak(characters);
// },600)


// const LadySpeech = document.getElementById('female-speaker1')

// // activate the speech text
// LadySpeech.addEventListener('click', LadySpeak);
// console.log('lady clicked')

// function LadySpeak(){
//     LadySpeech.style.display ='block';
//     console.log('lady should speak');
// }


// mario tutorial 
addEventListener('keydown', ({keyCode})  => {
    console.log(keyCode)
        switch (keyCode){
            case 37:
                // console.log('left')
                keys.left.pressed = true;
                // player.currentSprite = player.sprites.run.left
                // player.currentCropWidth = player.sprites.run.cropWidth
                // player.width =player.sprites.run.width
                lastKey = 'left'
                break
            case 39:
                // console.log('right')
                keys.right.pressed = true;
                // player.currentSprite = player.sprites.run.right
                // player.currentCropWidth = player.sprites.run.cropWidth
                // player.width =player.sprites.run.width
                lastKey = 'right'
                break
            case 38:
                // console.log('up')
                player.velocity.y -= 20;
                break
            case 40:
                // console.log('down')
                break

        }
    })

console.log(keys.right.pressed)

addEventListener('keyup', ({keyCode})  => {
    // console.log(keyCode)
        switch (keyCode) {
            case 37:
                // console.log('left')
                keys.left.pressed = false
                // player.currentSprite = player.sprites.stand.left
                // player.currentCropWidth = player.sprites.stand.cropWidth
                // player.width =player.sprites.stand.width
                break
            case 39:
                // console.log('right')
                keys.right.pressed = false
                // player.currentSprite = player.sprites.stand.right
                // player.currentCropWidth = player.sprites.stand.cropWidth
                // player.width =player.sprites.stand.width
                break
            case 38:
                // console.log('up')
                player.velocity.y -= 20;
                break
            case 40:
                // console.log('down')
                break
            }
})
