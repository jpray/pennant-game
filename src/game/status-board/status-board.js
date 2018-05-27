import {stopEvent} from 'utility-toolkit';
import {classBuilder} from 'utility-toolkit';
import './status-board.css';
import delegate from 'dom-delegate';
//import {getCurrentPlayer} from 'common/providers/current-player';
import {appModel} from 'common/app-model';
import {baseView} from 'common/views/base-view';

export class StatusBoard extends baseView() {
  constructor() {
    super();

    const appModelPropBinder = appModel
      .createPropertyBinder(this)
      .addBindings([
      [appModel.accessors.CURRENT_PLAYER, 'currentPlayer'],
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

  render() {
    return this.html`
      Player ${this.currentPlayer}'s Turn.
      <div>Player 1's Points: ${this.player0Points}</div>
      <div>Player 2's Points: ${this.player1Points}</div>
    `;
  }
	addEventListeners() {
		this.delegateEl.on('click', 'p-cell', (e) => {

		})
	}
}

StatusBoard.define('status-board');
