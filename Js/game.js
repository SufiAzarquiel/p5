const WIDTH = 640;
const HEIGHT = 640;

let player;
let floor;

// Intialize world
function setup() {
  createCanvas(WIDTH, HEIGHT);
  world.gravity.y = 10;

  background(220);

  player = new Sprite();
  player.width = 30;
  player.height = 30;
  player.direction = 90;

  floor = new Sprite();
  floor.y = 500;
  floor.x = WIDTH / 2;
  floor.w = WIDTH;
  floor.h = 10;
  floor.collider = "static";
}

// Draw current frame
function draw() {
  clear();
  background(220);

  // Handle player movement
  movePlayer();

  describe("Move square with arrow keys.");
}

function movePlayer() {
  // Change velocity based on key pressed
  if (kb.pressing("ArrowLeft")) {
    player.vel.x = -5;
    if (kb.presses("ArrowUp")) player.vel.y = -4;
  } else if (kb.pressing("ArrowRight")) {
    player.vel.x = 5;
    if (kb.presses("ArrowUp")) player.vel.y = -4;
  } else if (kb.presses("ArrowUp")) player.vel.y = -6;
  else player.vel.x = 0;
}
