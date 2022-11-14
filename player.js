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
        this.sprite.y = WINDOWSIZE - playerSize;
        // this.sprite.addAni(runAni);
        // this.sprite.ani.frameDelay = 20;
        this.sprite.rotation = 0;
        this.sprite.collider = "none";
        this.state = "runing";
    }

    // Handle player movement
    move() {
        if (kb.presses("ArrowUp")) {
            if(state != "jumping"){
                this.sprite.vel.y -= 5;
                state = "jumping";
            } else {
                state = "runing";
            }
        } else if (kb.pressing("ArrowDown")) {
           if (state == "jumping") {
                this.sprite.vel.y += 5;
                state = "diving"
           }
        } else {
            if (state = "diving") {
                
            }
            this.sprite.vel.y = 0;
        }
    }

    // Pause all movement and rotation
    static(){
        this.sprite.vel.x = 0;
        this.sprite.vel.y = 0;
        this.sprite.rotation = 0;
    }
}
