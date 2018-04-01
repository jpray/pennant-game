import {default as hyper} from 'hyperhtml/esm/index';
import {customElement, evented, properties, stopEvent} from 'web-components-core';
import {classBuilder} from 'utility-toolkit';
import {Board} from './board/board';
import {Player} from './player';

const NUM_POINTS_TO_WIN = 9;

export class Game extends classBuilder(customElement()).with(
	evented,
	properties) {

  constructor(numPlayers = 2) {
    super();
    this.numPlayers = numPlayers;
    this.initPlayers();
    this.board = new Board();
    this.currentPlayerIndex = 0;
    this.html = hyper(this);
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

  render() {
    return this.html`
        ${this.board}
      `;
  }

}

Game.define('p-game');
