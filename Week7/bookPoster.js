console.log("the javaScript is here!");
//Update this example to do the following
//1) LOAD WALK CYCLE FRAMES INTO THE FRAMES ARRAY
//2) WRITE CODE TO LOOP THROUGH THE FRAMES IN THE FRAMES ARRAY AND DISPLAY THEM
//3) MODIFY characterX and characterY so that the character will walk to the dot
//4) Flip the character when it changes direction

let frames = []; // An array to store the images
let characterX; // The X location of the character
let characterY; // The Y location of the character
let targetX; // The X goal, from the user's click
let targetY; // The Y goal, from the user's click
let frame = 0;
let s = 1;
let t = 0;

function preload() {
  // 1. UPDATE CODE HERE
  // ADD A FOR LOOP TO FILL THE ARRAY WITH YOUR FRAMES. CHECK YOUR FILE NAMES.
  // Use the variable from the for loop to concatenate the string to create the image path name.
  for(let i = 0; i< 87; i++){
    // i = 0,1,2,3,4,5,6,7
    //print(nf(i, 2)); //use nf to pad i with zeros.
    //i = nf(i, 2);
    frames[i] = loadImage("assets/couple gif/frame_" + i + "_delay-0.03s.gif");
    // print("assets/frame_" + i + "_delay-0.03s.gif");
  }
    // I recomment using a walk cycle of less than 10 images.
    // else use the nf(); function to pad single digits with zeros as is commented out above.

}

function setup() {
  console.log("p5 is here!")
  createCanvas(550, 650);
  imageMode(CENTER);
  frameRate(12);

  // Initialize the character and target positions.
  characterX = width / 2;
  characterY = height / 2;
  targetX = characterX;
  targetY = characterY;
}



//---------------------------------------
function draw() {
  background(255);

  // 3. WRITE CODE HERE TO MOVE THE CHARACTER TOWARDS THE TARGET.
  let dx = targetX - characterX;
  print("dx", dx);
  let dy = targetY - characterY;

  let distanceFromCharacterToTarget = dist(targetX, targetY, characterX, characterY);

  if(distanceFromCharacterToTarget>10){
    //increase characterX
    if(dx>0){
      characterX = characterX + 10;
    }
    if(dy>0){
      characterY = characterY + 10;
    }
    if (dx<0){
      characterX = characterX - 10;
    }
    if(dy<0){
      characterY = characterY - 10;
    }
  }

if(dx>7){
    push();
scale(-1, 1)
  image(frames[frame], -characterX, characterY); // temporary only!
    pop();

   }else{


  image(frames[frame], characterX, characterY); // temporary only!


   }
  // 2. WRITE CODE TO LOOP THROUGH THE FRAMES IN THE FRAMES ARRAY AND DISPLAY THEM


    frame++;
    if(frame>=87){ //when i reach the end of the array
      frame=0;
    }



  // 4. WHEN YOU GET THAT WORKING, FLIP THE IMAGE IF THE CHARACTER'S HEADING LEFT.
  // ONE WAY OF DOING THIS IS BY USING TRANSFORMATIONS


  // Don't change this:
  // Draw a spot at the target, colored based on the character's proximity.
  drawTargetEllipse (distanceFromCharacterToTarget);
}


//=======================================================
// PROBABLY NO REASON TO CHANGE ANYTHING BELOW THIS LINE.


//---------------------------------------
function drawTargetEllipse(distanceFromCharacterToTarget) {
  if (distanceFromCharacterToTarget > 80) {
    fill(0, 200, 0, 40); // Green if we're nearby
  } else {
    fill(255, 0, 0, 40); // Red if we're far away
  }
  noStroke();
  ellipse(targetX, targetY, 160, 160);
}

//---------------------------------------
function mousePressed() {
  targetX = mouseX;
  targetY = mouseY;
  print("targetX:"+ targetX);
  print("targetY:"+targetY);
}
