// Game images
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
  terrain_1_img = loadImage("images/terrain_1.png");
  terrain_2_img = loadImage("images/terrain_2.png");
}

// Game constants
const groundY = height - 50;
const bgColor = 255;

// Sprites
let player;

// Intialize world
function setup() {
  createCanvas(windowWidth, windowHeight - 10);
  player = square(20, groundY, s);
}

// Game loop flag
let quit = false;

// Draw current frame
function draw() {
  clear();
  background(bgColor);

  // Handle gamestate-related keypresses
  if (kb.presses("p")) {
    quit = true;
  } else if (kb.presses("s")) {
    quit = false;
  }

  // Game loop
  if (!quit) {
    // Handle player movement
    movePlayer();

    // Render square
    player
  }

  // TO2DO: Change description
  describe("Move square with arrow keys.");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight - 10);
}

function movePlayer() {
  // Change velocity based on key pressed
  if (kb.presses("ArrowUp")) {
    // TODO: Handle player movement
  }
}
