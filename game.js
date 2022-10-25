let dino;
let runAni;
let dinoJump;
let dinoDeadJump;
let dinoDeadRun;
let cactusSmall;
let cactusBig;
let cacti;
let replayButton;
let gameOverText;
let cloudImg;
let terrain_1;

let ground;
let dirtDensity = 10;
const bgColor = 255;
let quit = false;

function preload() {
  // Load images
  runAni = loadAnimation("images/dinoRun_1.png", "images/dinoRun_2.png");
  dinoJump = loadImage("images/dinoJump.png");
  cactusSmall = loadImage("images/cactusSmall.png");
  cactusBig = loadImage("images/cactusBig.png");
  cacti = loadImage("images/cactusMult.png");
  dinoDeadJump = loadImage("images/dinoJumpDead.png");
  dinoDeadRun = loadImage("images/dinoRunDead.png");
  replayButton = loadImage("images/replayButton.png");
  gameOverText = loadImage("images/gameOver.png");
  cloudImg = loadImage("images/cloud.png");
  terrain_1 = loadImage("images/terrain_1.png");
  terrain_2 = loadImage("images/terrain_2.png");
}

// Intialize world
function setup() {
  createCanvas(640, 640);
  world.gravity.y = 15;

  background(bgColor);

  ground = new Sprite();
  ground.y = height - 100;
  ground.x = width / 2;
  ground.w = width;
  ground.h = 3;
  ground.collider = "static";
  ground.color = "black";

  clouds = new Group();
  clouds.w = 110;
  clouds.h = 50;
  clouds.x = () => random(0, width);
  clouds.y = () => random(100, 400);
  clouds.addImage("cloud", cloudImg);
  clouds.amount = dirtDensity;
  clouds.collider = "none";
  clouds.vel.x = -1;

  dirt = new Group();
  dirt.color = "black";
  dirt.w = () => random(6, 20);
  dirt.h = 5;
  dirt.x = () => random(0, width/dirtDensity) * dirtDensity;
  dirt.y = () => ground.y + (random(0, 5)*dirt.h*2);
  dirt.amount = dirtDensity;
  dirt.collider = "none";
  dirt.vel.x = -5;

  dino = new Sprite();
  dino.x = 200;
  dino.width = 70;
  dino.height = 102;
  runAni.frameDelay = 10;
  dino.addAni("run", runAni);
}

// Draw current frame
function draw() {
  clear();
  background(bgColor);

  if (kb.presses("p")) {
    quit = true;
    runAni.stop();
    clouds.vel.x = 0;
    dirt.vel.x = 0;
  } else if (kb.presses("s")) {
    quit = false;
    runAni.play();
    clouds.vel.x = -2;
    dirt.vel.x = -5;
  }

  if (!quit) {
    // Handle player movement
    movePlayer();

    dino.rotation = 0;

    // Handle background movement
    for (let i = 0; i < 3; i++) {
      if (clouds[i].x < -100) {
        clouds[i].x = random(width, width+100);
        clouds[i].y = random(50, 250);
        clouds.vel.x = -2;
      }
    }
    for (let i = 0; i < dirtDensity; i++) {
      if (dirt[i].x < -100) {
        dirt[i].x = width;
        dirt.vel.x = -5;
      }
    }
    clouds.debug = mouse.holding();
    dino.debug = mouse.holding();
  }
  describe("Move square with arrow keys.");
}

function movePlayer() {
  // Change velocity based on key pressed
  if (kb.presses("ArrowUp")) {
      dino.vel.y = -6;
      subsequent = false;
  }
}
