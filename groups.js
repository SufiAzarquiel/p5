// The collection class contains a p5.play group for ES6-like extendability
class Collection {
    // Create p5.play group with given parameters
    constructor(d, mx, my, ma) {
        this.group = new Group();
        this.group.diameter = d;
        this.group.x = mx; // () => random(0, width);
        this.group.y = my; //() => random(0, height);
        this.group.amount = ma;
    }

    // Pause all movement and rotation
    static() {
        this.group.vel.x = 0;
        this.group.vel.y = 0;
        this.group.rotation = 0;
    }
}

// A group of clouds
const cloudAmmount = 3;
class Clouds extends Collection {
    constructor(ammount) {
        super(
            40,
            () => random(0, width),
            () => random(0, height/2.5),
            ammount
        );
        this.ammount = ammount;
    }

    // Handle movement of items on the group
    move() {
        this.group.vel.x = -5;
        for (let i = 0; i < this.ammount; i++) {
            if (this.group[i].x < 10) {
                this.group[i].x += random(700, 1500);
            }
        }
    }
}
