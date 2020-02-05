// https://www.codewars.com/kata/587136ba2eefcb92a9000027

function SnakesLadders() {
  class Player {
    constructor(ID) {
      this.ID = ID;
      this.square = 0;
      this.win = false;
    }
  }
  let player1 = new Player(1)
  let player2 = new Player(2)
  let turn = player1, gameLoop = true

  function alternateTurns() {
    if (turn == player1) {turn = player2}
    else {turn = player1}
  }

  function squareCheck(player, die1, die2) {
    let total = player.square + die1 + die2
    let dice = die1 + die2
    if (player.square > 100) {
      let bounce = player.square - 100
      player.square = 100 - bounce
    }
    if (player.square == 2) player.square = 38
    if (player.square == 7) player.square = 14
    if (player.square == 8) player.square = 31
    if (player.square == 15) player.square = 26
    if (player.square == 28) player.square = 84
    if (player.square == 21) player.square = 42
    if (player.square == 36) player.square = 44
    if (player.square == 51) player.square = 67
    if (player.square == 71) player.square = 91
    if (player.square == 78) player.square = 98
    if (player.square == 87) player.square = 94
    if (player.square == 16) player.square = 6
    if (player.square == 49) player.square = 11
    if (player.square == 62) player.square = 19
    if (player.square == 46) player.square = 25
    if (player.square == 74) player.square = 53
    if (player.square == 64) player.square = 60
    if (player.square == 89) player.square = 68
    if (player.square == 95) player.square = 75
    if (player.square == 99) player.square = 80
    if (player.square == 92) player.square = 88
    if (player.square >= 88) {
       if (player.square === 100 && player.win != true) {
        gameLoop = false;
        player.win = true;
        return "Player " + player.ID + " Wins!"
      }
    }
  }

  SnakesLadders.prototype.play = function(die1, die2) {
    if (gameLoop === true) {
      if (turn == player1) {
        player1.square += die1 + die2
        squareCheck(player1, die1, die2)
        if (player1.square === 100) {
          gameLoop = false;
          player1.win = true;
          return "Player 1 Wins!"
        }
        if (die1 !== die2) alternateTurns()
        return "Player 1 is on square " + player1.square
      }
      else if (turn == player2) {
        player2.square += die1 + die2
        squareCheck(player2, die1, die2)
        if (player2.square === 100) {
          gameLoop = false;
          player2.win = true;
          return "Player 2 Wins!"
        }
        if (die1 !== die2) alternateTurns()
        return "Player 2 is on square " + player2.square
      }
    }
    else return "Game over!"
  }
};
