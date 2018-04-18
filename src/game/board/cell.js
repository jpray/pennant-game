import {default as hyper} from 'hyperhtml/esm/index';
import {customElement, events, properties, stopEvent} from 'web-components-core';
import {classBuilder} from 'utility-toolkit';
import delegate from 'dom-delegate';
import {movePiece} from 'common/tasks/move-piece';
import {tempState} from 'common/temp-state';
import {BaseView} from 'common/views/base-view';
import {getPieceStateById} from 'common/tasks/get-piece-state-by-id';

//export class Cell extends BaseView {
export class Cell extends classBuilder(customElement()).with(
	events,
	properties) {

  construct() {
    this.html = hyper(this);
    super.construct();
		this.cellId = null;
    this.delegateEl = delegate(this);
    this.addEventListeners();
  }

	static get properties() {
		return {
			cellId: {
				type: String,
				value() {
					return '';
				}
			},
			pieceId: {
				type: String,
				value() {
					return '';
				}
			}
		};
	}

	addEventListeners() {
    // this.addEventListener('dragover', function(e) {
		// 	e.preventDefault();
		// })
		// this.addEventListener('drop', this.handleDrop.bind(this));
		this.addEventListener('click', this.handleDrop.bind(this));
	}

	handleDrop(e) {
    debugger;
		let piece = tempState.currentElementBeingDragged;
		movePiece(piece, this);
	}

  render() {
		if (this.pieceId) {
			debugger;
		}
		let pieceState = getPieceStateById(this.pieceId);
		let type = pieceState && pieceState.type;
    return this.html`
		 <p-sword class="${type === 'sword' ? 'show' : 'hide'}"></p-sword>
		 <p-spear class="${type === 'spear' ? 'show' : 'hide'}"></p-spear>
		 <p-shield class="${type === 'shield' ? 'show' : 'hide'}"></p-shield>
    `;
  }
}

Cell.define('p-cell');
