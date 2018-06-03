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
      ['players.1.points', 'player1Points']
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


      <div class="player-info"><span class="player-swatch player-one-swatch"></span> Player 1's Penants: ${this.player0Points}</div>
      <div class="player-info"><span class="player-swatch player-two-swatch"></span> Player 2's Penants: ${this.player1Points}</div>
    `;
  }
	addEventListeners() {
		this.delegateEl.on('click', 'p-cell', (e) => {

		})
	}
}

StatusBoard.define('status-board');
