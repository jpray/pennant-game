import {default as hyper} from 'hyperhtml/esm/index';
import {customElement, events, properties, stopEvent} from 'web-components-core';
import {classBuilder} from 'utility-toolkit';
import './status-board.css';
import delegate from 'dom-delegate';
//import {getCurrentPlayer} from '../common/providers/current-player';
import {appModel} from '../common/app-model';

export class StatusBoard extends classBuilder(customElement()).with(
	events,
	properties) {
  constructor() {
    super();
    this.html = hyper(this);
		this.delegateEl = delegate(this);
		this.addEventListeners();

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
			debugger;
    appModel.set(appModel.accessors.CURRENT_PLAYER, 1);

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
				},
				observer(value) {
          debugger;
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
