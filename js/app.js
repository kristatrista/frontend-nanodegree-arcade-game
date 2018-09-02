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
    if(this.x < 600){
      this.x += 200 * dt;
    }else{
      this.x = -40;
    }
    //restart at beggining of board once at the end
    //handle collision with player, reset the game
    if(player.x < this.x + 50 &&
      player.x + 35 > this.x &&
      player.y < this.y +20 &&
      30 + player.y > this.y){
      console.log('hit');
    reset();
    }


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
    //this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/char-horn-girl.png';
};

Player.prototype.update = function(dt) {
  //contain player within board
  if( this.x < 0){
    this.x = 0;
    console.log(this.x);
  }
if( this.x > 400){
  console.log(this.x);
  this.x = 400;
}
if(this.y > 400){
this.y = 400;
}
//reset player to start after game is won
  if( this.y < 0){
    alert("YOU WON!");
    reset();
  }
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(input) {
  switch (input) {
      case 'left':
          this.x -= jump;
          break;
      case 'up':
          this.y -= step;
          break;
      case 'right':
          this.x += jump;
          break;
      case 'down':
          this.y += step;
          break;
  }

};
function reset(){
  player.x = 202;
  player.y = 400;
};
var step = 83;
var jump = 100;
// Now instantiate your objects.
var player = new Player(202,400 );
// Place all enemy objects in an array called allEnemies
var allEnemies = [new Enemy(40, 220), new Enemy(-30, 60), new Enemy(0, 140)];
// Place the player object in a variable called player
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
