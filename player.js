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
        this.sprite.x = playerSize*2;
        this.sprite.y = groundY - playerSize;
        // this.sprite.addAni(runAni);
        // this.sprite.ani.frameDelay = 20;
        this.sprite.rotation = 0;
        this.sprite.collider = "none";
    }

    // Handle player movement
    move() {
        if (kb.presses("ArrowUp")) {
            this.sprite.vel.y = -playerVel;
        } /*else if (kb.pressing("ArrowDown")) {
            this.sprite.vel.y = playerVel;
        } */else {
            this.sprite.vel.y = 0;
        }

        /*if (kb.pressing("ArrowLeft")) {
            this.sprite.vel.x = -playerVel;
        } else if (kb.pressing("ArrowRight")) {
            this.sprite.vel.x = playerVel;
        } else {
            this.sprite.vel.x = 0;
        }*/
    }

    // Pause all movement and rotation
    static(){
        this.sprite.vel.x = 0;
        this.sprite.vel.y = 0;
        this.sprite.rotation = 0;
    }
}
