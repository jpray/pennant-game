import {default as hyper} from 'hyperhtml/esm/index';
import {customElement, evented, properties, stopEvent} from 'web-components-core';
import {classBuilder} from 'utility-toolkit';
import './status-board.css';
import delegate from 'dom-delegate';
//import {getCurrentPlayer} from '../common/providers/current-player';
import {store} from '../common/store';

export class StatusBoard extends classBuilder(customElement()).with(
	evented,
	properties) {
  constructor() {
    super();
    this.html = hyper(this);
		this.delegateEl = delegate(this);
		this.addEventListeners();

    store.setValue(store.accessors.CURRENT_PLAYER, 1);
    this.currentPlayer = store.getValue(store.accessors.CURRENT_PLAYER);
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
