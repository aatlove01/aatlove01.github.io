console.log(' In JavaScript for kidnapIsland is here');
// import platform from '.images/sidewalk with building image.png'


canvas = document.getElementById('canvasMain');
c = canvas.getContext('2d');
// const platform = document.getElementById('start-background-kidnap');


 
// help from video https://www.youtube.com/watch?v=4q2vvZn5aoo&ab_channel=ChrisCourses

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

// help with scrolling background from https://www.youtube.com/watch?v=7JtLHJbm0kA&ab_channel=Frankslaboratory

class background {
    constructor(gameWidth, gameHeight){
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.image = document.getElementById('start-background-kidnap');
        this.x = 0;
        this.y = 0;
        this.width = 3000;
        this.height = 595;
    }
}


const player = new Player()


class GenericObject{
    constructor({x, y, image}) {
        this.position = {
          x,
          y
        }
        this.image = image
        this.width = image.width
        this.height = image.height
    }
    draw(){
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}



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
    c.clearRect(0,0,canvas.width, canvas.height)
    player.update()
   
    if (keys.right.pressed && player.position.x < 1150) {
        player.velocity.x = 5
    } else if (keys.left.pressed  && player.position.x > 20) {
        player.velocity.x = -5
    } else player.velocity.x = 0

       

    // for platforms added to the scene
    // if (keys.right.pressed){
    //     platform.position.x -= 5
    // } else if (keys.left.pressed){
    //     platform.position.x +=5
    // }

}

// animate();


addEventListener('keydown', ({keyCode})  => {
    console.log(keyCode)
        switch (keyCode){
            case 37:
                console.log('left')
                keys.left.pressed = true;
                break
            case 39:
                console.log('right')
                keys.right.pressed = true;
                break
            case 38:
                console.log('up')
                player.velocity.y -= 15;
                break
            case 40:
                console.log('down')
                break

        }
    })

console.log(keys.right.pressed)

addEventListener('keyup', ({keyCode})  => {
    // console.log(keyCode)
        switch (keyCode) {
            case 37:
                console.log('left')
                keys.left.pressed = false
                break
            case 39:
                console.log('right')
                keys.right.pressed = false
                break
            case 38:
                console.log('up')
                player.velocity.y -= 15;
                break
            case 40:
                console.log('down')
                break
            }
        })
