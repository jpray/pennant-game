import {state} from 'utility-toolkit';
import {classBuilder} from 'utility-toolkit';
import {Board} from './board/board';
import {StatusBoard} from './status-board/status-board';
import './side-line/side-line';
import {Player} from '../player';
import appModel from 'common/app-model';
import {baseView} from 'common/views/base-view';


const NUM_POINTS_TO_WIN = 9;

export class Game extends classBuilder(baseView()).with(
	state) {

  constructor(numPlayers = 2) {
    super();
		this.appModel = appModel;
    this.numPlayers = numPlayers;
    this.initPlayers();
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
				<status-board />
				<side-line player-id="0"/>
        <p-board state="${this.appModel.get('board')}" />
				<side-line player-id="1"/>
      `;
  }

}

Game.define('p-game');
