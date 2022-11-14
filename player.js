const playerSize = 50;
const playerVel = 5;

class Player {
    // Create player
    constructor() {
        // Sprite
        this.sprite = new Sprite();
        this.sprite.width = playerSize;
        this.sprite.height = playerSize;
        // this.sprite.x = width / 2 - playerSize;
        // this.sprite.y = height / 2 - playerSize;
        this.sprite.x = playerSize * 2;
        this.sprite.y = WINDOWSIZE - playerSize;
        // this.sprite.addAni(runAni);
        // this.sprite.ani.frameDelay = 20;
        this.sprite.rotation = 0;
        this.sprite.collider = "none";
        this.state = "running";
    }

    // Handle player movement
    move() {
        // Change state based on input and state
        if (kb.presses("ArrowUp")) {
            if (this.state != "jumping") {
                this.state = "jumping";
            }
        }

        if (this.state == "jumping") {
            this.sprite.vel.y = -10;
        } else {
            if (this.sprite.y < ) {
                
            }
        }
    }

    // Pause all movement and rotation
    static() {
        this.sprite.vel.x = 0;
        this.sprite.vel.y = 0;
        this.sprite.rotation = 0;
    }
}
