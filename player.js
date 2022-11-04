const playerSize = 50;

class Player {
    // Weird constructor of this class
    constructor(){
        this.sprite = new Sprite();
        this.sprite.width = playerSize;
        this.sprite.height = playerSize;
        this.sprite.x = width / 2 - playerSize;
        this.sprite.y = height / 2 - playerSize;
        this.sprite.addAni(runAni);
        this.sprite.ani.frameDelay = 20;
    }

    move() {
        if (kb.pressing('up')) {
            this.sprite.vel.y = -4;
        } else if (kb.pressing('down')) {
            this.sprite.vel.y = 4;
        } else {
            this.sprite.vel.y = 0;
        }
        
        if (kb.pressing('left')) {
            this.sprite.vel.x = -4;
        } else if (kb.pressing('right')) {
            this.sprite.vel.x = 4;
        } else {
            this.sprite.vel.x = 0;
        }
    }
}