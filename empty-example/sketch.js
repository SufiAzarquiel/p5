const WIDTH = 640;
const HEIGHT = 640;

function setup() {
  // put setup code here
  createCanvas(WIDTH, HEIGHT);
}

function draw() {
  // put drawing code here
  background(220);
  if (mouseIsPressed) {
    fill(0, 0, 139);
  } else {
    fill(0, 255, 0);
  }
  ellipse(mouseX, mouseY, 80, 80);
}
