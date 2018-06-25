import {stopEvent} from 'utility-toolkit';
import {classBuilder} from 'utility-toolkit';
import './status-board.css';
import delegate from 'dom-delegate';
//import {getCurrentPlayer} from 'common/providers/current-player';
import appModel from 'common/app-model';
import {baseView} from 'common/views/base-view';

export class StatusBoard extends baseView() {
  constructor() {
    super();

    const appModelPropBinder = appModel
      .createPropertyBinder(this)
      .addBindings([
      ['game.currentPlayer', 'currentPlayer'],
      ['players.0.points', 'player0Points'],
      ['players.1.points', 'player1Points'],
      ['game.winningPlayer','winningPlayer']
    ]);

  }

  propertiesChanged() {
    this.render();
  }

  static get properties() {

		return {
			currentPlayer: {
				type: Number,
				reflectToAttribute: false,
				value() {
					return 0;
				}
			},
      winningPlayer: {
				type: Number,
				reflectToAttribute: false
			},
      player0Points: {
				type: Number,
				reflectToAttribute: false,
				value() {
					return 0;
				}
			},
      player1Points: {
				type: Number,
				reflectToAttribute: false,
				value() {
					return 0;
				}
			}
		};
	}

  makeSmaller(e) {
    let currentSize = Number(document.documentElement.style.fontSize.replace('%','') || 100);
    document.documentElement.style.fontSize = `${currentSize*.9}%`;
  }

  makeBigger(e) {
    let currentSize = Number(document.documentElement.style.fontSize.replace('%','') || 100);
    document.documentElement.style.fontSize = `${currentSize*1.1}%`;
  }

  render() {
    return this.html`
      Scale: <button onclick="${this.makeSmaller}" id="scale-smaller">-</button>
             <button onclick="${this.makeBigger}" id="scale-bigger">+</button><br><br>


      <div class="player-info"><span class="player-swatch player-one-swatch"></span> Player 1 Pennants: ${this.player0Points} ${this.winningPlayer === 0 ? 'Winner!' : ''}</div>
      <div class="player-info"><span class="player-swatch player-two-swatch"></span> Player 2 Pennants: ${this.player1Points} ${this.winningPlayer === 1 ? 'Winner!' : ''}</div>
    `;
  }
	addEventListeners() {
		this.delegateEl.on('click', 'p-cell', (e) => {

		})
	}
}

StatusBoard.define('status-board');
