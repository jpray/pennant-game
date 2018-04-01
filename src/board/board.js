import {default as hyper} from 'hyperhtml/esm/index';
import {customElement, evented, properties, stopEvent} from 'web-components-core';
import {classBuilder} from 'utility-toolkit';
import {Cell} from './cell';
import './board.css';

export class Board extends classBuilder(customElement()).with(
	evented,
	properties) {
  constructor() {
    super();
    this.html = hyper(this);
    this.grid = Array.apply(null, Array(5)).map(() => {
      return Array.apply(null, Array(5)).map(() => {
        return null;
      })
    })
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
}

Board.define('p-board');
