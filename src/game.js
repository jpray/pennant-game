import {default as hyper} from 'hyperhtml/esm/index';
import {customElement, events, properties, stopEvent, state} from 'web-components-core';
import {classBuilder} from 'utility-toolkit';
import {Board} from './board/board';
import {StatusBoard} from './status-board/status-board';
import {Player} from './player';
import {appModel} from './common/app-model';

const NUM_POINTS_TO_WIN = 9;

export class Game extends classBuilder(customElement()).with(
	events,
	properties,
  state) {

  constructor(numPlayers = 2) {
    super();
		this.appModel = appModel;
    this.numPlayers = numPlayers;
    this.initPlayers();
    this.board = new Board();
		this.statusBoard = new StatusBoard();
    this.currentPlayerIndex = 0;
    this.html = hyper(this);
		this.setState({test:1});
		setInterval(() => {
			this.setState({test:Math.random()});
		},5000)
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
      `;
  }

	componentDidUpdate(previousState) {
		debugger;
  }

}

Game.define('p-game');
