import {stopEvent, state} from 'web-components-core';
import {classBuilder} from 'utility-toolkit';
import {Board} from './board/board';
import {StatusBoard} from './status-board/status-board';
import {SideLine} from './side-line/side-line';
import {Player} from '../player';
import {appModel} from 'common/app-model';
import {BaseView} from 'common/views/base-view';


const NUM_POINTS_TO_WIN = 9;

export class Game extends classBuilder(BaseView).with(
	state) {

  constructor(numPlayers = 2) {
    super();
		this.appModel = appModel;
    this.numPlayers = numPlayers;
    this.initPlayers();
    this.board = new Board();
		this.statusBoard = new StatusBoard();
		this.sideLine = new SideLine();
    this.currentPlayerIndex = 0;
		this.listenForEvents();
  }

	listenForEvents() {
		this.addEventListener('gameEvent', this.handleGameEvent.bind(this));
	}

	handleGameEvent(e) {
		let details = e.details;
		//this.appModel.handleEvent(details);
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
				${this.statusBoard}
        ${this.board}
				${this.sideLine}
      `;
  }

}

Game.define('p-game');
