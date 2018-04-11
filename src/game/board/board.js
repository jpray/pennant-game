import {default as hyper} from 'hyperhtml/esm/index';
import {customElement, events, properties, stopEvent} from 'web-components-core';
import {classBuilder} from 'utility-toolkit';
import {Cell} from './cell';
import './board.css';
import {BaseView} from 'common/views/base-view';

export class Board extends BaseView {
  constructor() {
    super();
    this.state = Array.apply(null, Array(5)).map((ignore, rowIndex) => {
      return Array.apply(null, Array(5)).map((ignore, colIndex) => {
        return null;
      })
    })
  }
  render() {
    return this.html`
      ${this.state.map((row, x) => hyper.wire(row)`<div class="b-row">
        ${row.map((cell, y) => hyper.wire(cell)`
          <p-cell x="${x}" y="${y}"></p-cell>
          `)}
      </div>`)}
      `;
  }
	addEventListeners() {
		this.delegateEl.on('click', 'p-cell', (e) => {
			debugger;
		})
	}
}

Board.define('p-board');
