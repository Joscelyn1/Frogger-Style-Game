// Enemies our player must avoid
class Enemy {
    constructor(distance, x, y) {
        this.x = x;
        this.y = y;
        this.sprite = 'images/enemy-bug.png';
        this.distance = distance;
    }
    update(dt) {
        this.x += this.distance;
        if (this.x >= 700) {
            this.x = -50;
        }
    }
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
// Draw the enemy on the screen, required method for game
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.sprite = 'images/char-princess-girl.png';
    }
    update() {

    }

    render() {
     ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    handleInput() {

    }
}


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
let e1 = new Enemy(1, 50, 50);
let e2 = new Enemy(2, 150, 125);
let e3 = new Enemy(3, 150, 225)
let e4 = new Enemy(3, 0, 225)
let allEnemies = [e1, e2, e3, e4];
let player = new Player(200, 400);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
