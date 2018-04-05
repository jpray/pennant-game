import {default as hyper} from 'hyperhtml/esm/index';
import {customElement, events, properties, stopEvent} from 'web-components-core';
import {classBuilder} from 'utility-toolkit';
import {Cell} from './cell';
import './board.css';
import delegate from 'dom-delegate';

export class Board extends classBuilder(customElement()).with(
	events,
	properties) {
  constructor() {
    super();
    this.html = hyper(this);
    this.grid = Array.apply(null, Array(5)).map(() => {
      return Array.apply(null, Array(5)).map(() => {
        return null;
      })
    })
		this.delegateEl = delegate(this);
		this.addEventListeners();
  }
  render() {
    return this.html`
      ${this.grid.map(row => hyper.wire(row)`<div class="b-row">
        ${row.map(cell => hyper.wire(cell)`
          <p-cell piece=></p-cell>
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
