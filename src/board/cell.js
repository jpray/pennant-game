import {default as hyper} from 'hyperhtml/esm/index';
import {customElement, evented, properties, stopEvent} from 'web-components-core';
import {classBuilder} from 'utility-toolkit';

export class Cell extends classBuilder(customElement()).with(
	evented,
	properties) {
  constructor() {
    super();
    this.html = hyper(this);
  }

  render() {
    return this.html`
      ${this.currentPiece}
    `;
  }
}

Cell.define('p-cell');
