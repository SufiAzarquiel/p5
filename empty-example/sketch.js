const WIDTH = 640;
const HEIGHT = 640;

const cX = WIDTH / 2;
const cY = HEIGHT / 2;
const VEL = 10;
var myRect = { x: cX, y: cY, w: 30, h: 30};

function setup() {
  // put setup code here
  createCanvas(WIDTH, HEIGHT);
  background(220);
  fill(0, 0, 0);
}

function draw() {
  // put drawing code here
  if (keyIsDown(LEFT_ARROW)) {
    myRect.x -= VEL;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    myRect.x += VEL;
  }

  if (keyIsDown(UP_ARROW)) {
    myRect.y -= VEL;
  }

  if (keyIsDown(DOWN_ARROW)) {
    myRect.y += VEL;
  }

  if(myRect.y + myRect.h < HEIGHT) {
    if (keyIsDown(UP_ARROW)) {
      myRect.y -= VEL;
    } else {
      myRect.y += VEL;
    }
  }

  background(220);
  rect(myRect.x, myRect.y, myRect.w, myRect.h);
  describe('Move square up and down with arrow keys.');
}