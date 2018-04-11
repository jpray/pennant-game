import {default as hyper} from 'hyperhtml/esm/index';
import {customElement, events, properties, stopEvent} from 'web-components-core';
import {classBuilder} from 'utility-toolkit';
import delegate from 'dom-delegate';
import {movePiece} from 'common/tasks/move-piece';
import {tempState} from 'common/temp-state';
import {BaseView} from 'common/views/base-view';

export class Cell extends BaseView {
  construct() {
    super.construct();
		this.id = '1';
  }

	static get properties() {
		return {
			x: {
				type: Number,
				value() {
					return NaN;
				}
			},
      y: {
				type: Number,
				value() {
					return NaN;
				}
			}
		};
	}

	addEventListeners() {
    this.addEventListener('dragover', function(e) {
			e.preventDefault();
		})
		this.addEventListener('drop', this.handleDrop.bind(this));
	}

	handleDrop(e) {
		debugger;
		let piece = tempState.currentElementBeingDragged;
		movePiece(piece, this);
	}

  render() {
    return this.html`
      ${this.currentPiece}
    `;
  }
}

Cell.define('p-cell');
