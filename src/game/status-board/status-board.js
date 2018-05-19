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
      [appModel.accessors.CURRENT_PLAYER, 'currentPlayer']
    ]);

  }

  connected() {
  }

  disconnected() {
  }

  propertiesChanged() {

  }

  static get properties() {

		return {
			currentPlayer: {
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
    `;
  }
	addEventListeners() {
		this.delegateEl.on('click', 'p-cell', (e) => {

		})
	}
}

StatusBoard.define('status-board');
