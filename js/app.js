
// class of enemy bugs
class Enemy {
    constructor(distance, x, y) {
        this.x = x;
        this.y = y;
        this.sprite = 'images/enemy-bug.png'; /* the bug picture */
        this.distance = distance;
        this.width = 70;
        this.height = 50;
    }
    update(dt) {
        this.x += this.distance; /* moves enemies horizontally */
        if (this.x >= 700) { /* loops enemies */
            this.x = -50;
        }
// collision detection -- I borrowed from https://developer.mozilla.org/kab/docs/Games/Techniques/2D_collision_detection
        if (this.x < player.x + player.width &&
            this.x + this.width > player.x &&
            this.y < player.y + player.height &&
            this.height + this.y > player.y) {
                player.x = 200;
                player.y = 400;
        }
    }
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

};

// user's character
class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.sprite = 'images/char-princess-girl.png'; /* princess girl image */
        this.width = 50;
        this.height = 50;
    }
    update() { // resets the user if she reaches the end of the screen
        if (this.y < 50) {
            self = this;
            setTimeout(function(){
                self.y = 400;
                self.x = 200;
                }, 500);
        }
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    handleInput(event) { // moves player according to user's key presses
        if (event === 'left' && this.x > 0) {
            this.x-= 101
        }
        if (event === 'right' && this.x < 400) {
            this.x+= 101
        }
        if (event === 'up' && this.y > 0) {
            this.y-= 83
        }
        if (event === 'down' && this.y < 400) {
            this.y+= 83
        }
    }
}


// instantiates enemies and player
let e1 = new Enemy(5, 50, 50);
let e2 = new Enemy(2, 150, 125);
let e3 = new Enemy(3, 150, 225)
let e4 = new Enemy(3, 0, 225);
let e5 = new Enemy(5, 200, 50);
let allEnemies = [e1, e2, e3, e4, e5];
let player = new Player(200, 400);


document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
