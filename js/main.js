
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
  if (player1.pick === 'rock' && player2.pick ==='scissors'){
    return player1;
  }
  else if (player1.pick === 'scissors' && player2.pick === 'paper'){
    return player1;
  }
  else if (player1.pick === 'paper' && player2.pick === 'rock'){
    return player1;
  }
  else if (player1.pick === 'rock' && player2.pick === 'paper'){
    return player2;
  }
  else if (player1.pick === 'scissors' && player2.pick === 'rock'){
    return player2;
  }
  else if (player1.pick === 'paper' && player2.pick === 'scissors'){
    return player2;
  }
  else if (player1.pick === player2.pick){
    return null;
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

//draw:
//if player1.pick === player2.pick


