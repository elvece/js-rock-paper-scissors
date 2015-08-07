
function Player(name){
  this.name = name;
  this.pick = "";
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
  if (player1.pick === 'rock'){
    switch (player2.pick ==='scissors'){
      case win: return player1;
    }
    default: return "no pick entered";

  }
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


