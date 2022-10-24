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
const bgColor = 0;
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
  ground.y = 500;
  ground.x = width / 2;
  ground.w = height;
  ground.h = 10;
  ground.collider = "static";

  clouds = new Group();
  clouds.w = 110;
  clouds.h = 50;
  clouds.x = () => random(0, 600);
  clouds.y = () => random(50, 250);
  clouds.addImage("cloud", cloudImg);
  clouds.amount = 3;
  clouds.collider = "none";

  dino = new Sprite();
  dino.x = 200;
  dino.width = 70;
  dino.height = 101;
  runAni.frameDelay = 50;
  dino.addAni("run", runAni);
}

// Draw current frame
function draw() {
  clear();
  background(bgColor);

  if (kb.presses("p")) {
    quit = true;
  } else if (kb.presses("s")) {
    quit = false;
  }

  if (!quit) {
    // Handle player movement
    movePlayer();

    // Handle background movement
    for (let i = 0; i < 3; i++) {
      if (clouds[i].x < -100){
        clouds[i].x = random(550, 650);
        clouds[i].y = random(50, 250);
      }
      else clouds[i].x -= 5;
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
  }
}
