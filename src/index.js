const NUM_PLAYERS = 2;
const game = new Game(NUM_PLAYERS);

function play(game) {
  if (game.hasWinner()) {
    return;
  }
  game.playTurn();
  play();
}

play();
