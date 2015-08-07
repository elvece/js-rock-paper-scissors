
function Player(name){
  this.name = name;
}

function Game(player1, player2){
  this.player1 = player1;
  this.player2 = player2;

}

Player.prototype.picks = function(pick){
  this.pick = pick;
  return this.pick;
};


Game.prototype.winner = function(){
  if (this.player1.pick === this.player2.pick){
    return null;
  }

  if (this.player1.pick === 'rock') {
    if (this.player2.pick ==='scissors') {
      return this.player1;
    } else {
      return this.player2;
    }
  }

  if (this.player1.pick === 'paper') {
    if (this.player2.pick ==='rock') {
      return this.player1;
    } else {
      return this.player2;
    }
  }

  if (this.player1.pick === 'scissors') {
    if (this.player2.pick ==='paper') {
      return this.player1;
    } else {
      return this.player2;
    }
  }
};

module.exports = {
  Player: Player,
  Game: Game
};

// - Rock > scissors
// - Scissors > paper
// - Paper > rock
// - There can be a draw
//player 1 win scenieros:
// if player1 is rock and player2 is scissors
//if player1 is scissors and player2 is paper
//if player1 is paper and player2 is rock

//player 1 loose scenieros:
//if player1 is rock and player2 is paper
//if player1 is scissors and player2 is rock
//if player1 is paper and player2 is scissors

//draw:
//if player1.pick === player2.pick


