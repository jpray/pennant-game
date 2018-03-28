const NUM_POINTS_TO_WIN = 9;

export class Game {
  constructor() {
    this.init();
  }

  init() {
    this.board = new Board();
    this.players = [];
    this.active

  }

  hasWinner() {
    return this.players.reduce((out, player) => {
      return out || player.points >= NUM_POINTS_TO_WIN;
    },false)
  }


}
