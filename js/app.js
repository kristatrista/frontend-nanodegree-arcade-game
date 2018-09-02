// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    // this.x += this.speed * dt;

    //update location

    //restart at beggining of board once at the end
    //handle collision with player, reset the game
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x,y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    // this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/char-horn-girl.png';
};

Player.prototype.update = function(dt) {

};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.handleInput = function() {

};

// var player = new Player();
var player = new Player(0, 0);

var allEnemies = [new Enemy(400,300), new Enemy(-400, 300), new Enemy(200, 300)];

  //update postition
  //collision check
  //check win?
  //render
  // render(){
  //   ctx.drawImage(Resources.get(this.sprite), this.x,  this.y);
  // };
  //keyboard handlers
  //update location x,y







// Now instantiate your objects.
// var player = new Player(200, 390, 50);
// // Place all enemy objects in an array called allEnemies
// var allEnemies = [];
// // Place the player object in a variable called player
// var enemy;


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
