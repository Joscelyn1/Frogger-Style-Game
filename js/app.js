
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

        if (this.x === player.x && this.y === player.y) {
            player.x = 200;
            player.y = 400;
        }
    }
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

};


class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.sprite = 'images/char-princess-girl.png';
    }
    update() {
        if (this.y < 50) {
            setTimeout(function(){
                player.y = 400;
                player.x = 200;
                }, 500);
        }
    }

    render() {
     ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    handleInput(event) {
        if (event === 'left' && this.x > 0) {
            this.x-= 100
        }
        if (event === 'right' && this.x < 400) {
            this.x+= 100
        }
        if (event === 'up' && this.y > 0) {
            this.y-= 85
        }
        if (event === 'down' && this.y < 400) {
            this.y+= 85
        }
    }
}



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
