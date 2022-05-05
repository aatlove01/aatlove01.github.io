console.log(' In JavaScript for kidnapIsland is here');
// import platform from '.images/sidewalk with building image.png'


 canvas = document.getElementById('canvasMain');
 c = canvas.getContext('2d');

// help with uploading image for parallax scrolling background from https://github.com/Botir/HTML5-Canvas-parallax/blob/master/js/main.js
// while also combining and refining code from mario game tutorial 
const images = {
    bg: './images/bg.png',
    ground: './images/ground.png',
    cloud: './images/clouds.png',
    home1: './images/sidewalk building 1.png',
    inhome1: './images/',
    platform: './images/platform.png'

}

// help from Parallax in JavaScript Games 
// https://www.youtube.com/watch?v=Mg7ibYWhjPI&ab_channel=Frankslaboratory
const backgroundLayer1 = new Image();
backgroundLayer1.src = 'images/bg.png';
const backgroundLayer2 = new Image();
backgroundLayer2.src = 'images/clouds.png';
const backgroundLayer3 = new Image();
backgroundLayer3.src = 'images/sidewalk_building.png';
const backgroundLayer4 = new Image();
backgroundLayer4.src = 'images/sidewalk.png';
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
        this.width = 30
        this.height = 30
        

    }

    draw(){
        c.fillStyle = 'red';
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update(){
        this.draw();
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x

        if (this.position.y + this.height + this.velocity.y <= canvas.height)
        this.velocity.y += gravity 
        else this.velocity.y = 0
        // this.position.y += this.gravity
    }
}


class Platform {
    constructor({x,y}){
        this.position = {
        x,
        y 
    }

    this.width = 200;
    this.height = 5
    }

draw(){
    c.fillStyle = 'blue';
    c.fillRect(this.position.x, this.position.y, this.width,this.height)
    // c.drawImage(this.image, this.position.x, this.position.y, this.width,this.height)
}
}



// console.log(images)

const player = new Player();

const platforms = [
    new Platform({
        x:200,
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

    // backgroundLayer sidewalk at x2 = 0
    // c.drawImage(backgroundLayer4,x2,350);

    // if (x< -3000) x= 3000;
    // else x -= player.position.x;
    // if (x2 < -2400) x2 = 2400 - gameSpeed;
    // else x2 -= gameSpeed;

    player.update()
    platforms.forEach(platform => {
        // console.log('platform')
        platform.draw()
    })
    
    
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
                platform.position.x -=10
                // x -= 2;
            })
            x -= 5;
            console.log(x)
            // if (x > 0) x = 3000
            
        }else if (keys.left.pressed){
            scrollOffset -=5
            platforms.forEach((platform) => {
                // original entry was 5 for platform position
                platform.position.x +=10
                // x += 2;
            })
            x += 5;
            // if (x < 3000) x = 0
            if (x < 3000){ x = 0}
            else if ((x > 0) && (player.position.x == 600) ){
                x= 3000
            }
            
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

}


addEventListener('keydown', ({keyCode})  => {
    console.log(keyCode)
        switch (keyCode){
            case 37:
                // console.log('left')
                keys.left.pressed = true;
                break
            case 39:
                // console.log('right')
                keys.right.pressed = true;
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
                break
            case 39:
                // console.log('right')
                keys.right.pressed = false
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
