import {stopEvent} from 'web-components-core';
import {classBuilder} from 'utility-toolkit';
import './status-board.css';
import delegate from 'dom-delegate';
//import {getCurrentPlayer} from 'common/providers/current-player';
import {appModel} from 'common/app-model';
import {BaseView} from 'common/views/base-view';

export class StatusBoard extends BaseView {
  constructor() {
    super();

    // this.currentPlayer = appModel.getValue(appModel.accessors.CURRENT_PLAYER);
    // appModel.watch(appModel.accessors.CURRENT_PLAYER, 'currentPlayer', this);
    // appModel.set(appModel.accessors.CURRENT_PLAYER, 1);
    // appModel.syncProperty({
    //   target: this,
    //   targetProperty: 'currentPlayer',
    //   accessor: appModel.accessors.CURRENT_PLAYER,
    // })

    appModel.syncProperties(this,
			['currentPlayer', appModel.accessors.CURRENT_PLAYER]);

  }

  connected() {
    appModel.unpauseSync(this);
  }

  disconnected() {
    appModel.pauseSync(this);
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
      Player ${this.currentPlayer+1}'s Turn.
    `;
  }
	addEventListeners() {
		this.delegateEl.on('click', 'p-cell', (e) => {
			debugger;
		})
	}
}

StatusBoard.define('status-board');
