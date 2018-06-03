import {state} from 'utility-toolkit';
import {classBuilder} from 'utility-toolkit';
import {Board} from './board/board';
import {StatusBoard} from './status-board/status-board';
import './side-line/side-line';
import {Player} from '../player';
import appModel from 'common/app-model';
import {baseView} from 'common/views/base-view';


const NUM_POINTS_TO_WIN = 9;

export class Game extends baseView() {

  constructor() {
    super();
		this.appModel = appModel;
		this.listenForEvents();
  }

	static get properties() {
		return {
			currentPlayer: {
				type: Number,
				value() {
					return 999;
				}
			}
		};
	}

	connected() {
		this.appModelPropBinder = appModel
			.createPropertyBinder(this)
			.addBindings([
			['game.currentPlayer', 'currentPlayer']
		]);
	}

	disconnected() {
		this.appModelPropBinder.destroy();
	}

	listenForEvents() {
		this.addEventListener('gameEvent', this.handleGameEvent.bind(this));
	}

	handleGameEvent(e) {
		let details = e.details;
		//this.appModel.handleEvent(details);
	}

  render() {

		this.classList[this.currentPlayer === 0 ? 'add' : 'remove']('game--first-player');
		this.classList[this.currentPlayer === 1 ? 'add' : 'remove']('game--second-player');

    return this.html`
				<status-board />
				<side-line player-id="0"/>
        <p-board state="${this.appModel.get('board')}" />
				<side-line player-id="1"/>
      `;
  }

}

Game.define('p-game');
