const WIDTH = 640;
const HEIGHT = 640;

let player;

function setup() {
  // put setup code here
  createCanvas(WIDTH, HEIGHT);
  world.gravity.y = 10;

  background(220);

  player = new Sprite();
  player.width = 30;
  player.height = 30;
  player.direction = 90;

  floor = new Sprite();
  floor.y = 500;
  floor.x = WIDTH/2;
	floor.w = WIDTH;
	floor.h = 10;
  floor.collider = 'static';
}

function draw() {
  // put drawing code here
  clear();
  background(220);
  if (kb.pressing("ArrowLeft")) player.vel.x = -5;
  else if (kb.pressing("ArrowRight")) player.vel.x = 5;
  else player.vel.x = 0;
  keypress()
  describe("Move square with arrow keys.");
}

function keypress() {

}