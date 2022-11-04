// Game images
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

// Load images and animations
function preload() {
  // Run animation
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

// Sprites
let player;

// Intialize world
function setup() {
  createCanvas(windowWidth - 50, windowHeight - 50);

  // Ground position
  const groundY = height - 50;

  // Create player object
  player = new Player();
}


// Background color
const bgColor = 255;

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
    // Draw only collision on mouse click and hold
    player.sprite.debug = mouse.holding();
    // Handle player movement
    player.move();
  }

  // TODO: Change description
  describe("Move square with arrow keys.");
}

// On window resize, scale canvas
function windowResized() {
  resizeCanvas(windowWidth - 50, windowHeight - 50);
}
