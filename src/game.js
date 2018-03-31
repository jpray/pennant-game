import {Board} from './board';
import {Player} from './player';

const NUM_POINTS_TO_WIN = 9;

export class Game {
  constructor(numPlayers = 2) {
    this.numPlayers = numPlayers;
    this.initPlayers();
    this.board = new Board();
    this.currentPlayerIndex = 0;
  }

  get currentPlayer() {
    return this.players[this.currentPlayerIndex];
  }

  initPlayers() {
    this.players = Array.apply(null, Array(this.numPlayers)).map(() => {
      return new Player();
    });
  }

  hasWinner() {
    return this.players.reduce((out, player) => {
      return out || player.points >= NUM_POINTS_TO_WIN;
    },false)
  }

  async playTurn() {
    await this.currentPlayer.playTurn(this.game);
  }

}
