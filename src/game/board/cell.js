import {default as hyper} from 'hyperhtml/esm/index';
import {customElement, events, properties, stopEvent} from 'utility-toolkit';
import {classBuilder} from 'utility-toolkit';
import delegate from 'dom-delegate';
import {movePiece} from 'common/tasks/move-piece';
import {tempState} from 'common/temp-state';
import {baseView} from 'common/views/base-view';
import {getPieceStateById} from 'common/tasks/get-piece-state-by-id';

export class Cell extends baseView() {

  construct() {
    this.html = hyper(this);
    super.construct();
		this.cellId = '';
    this.delegateEl = delegate(this);
  }

  connected() {
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
			},
			winningCell: {
				type: String,
				value() {
					return '';
				}
			},
			startingCellForPlayer: {
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
    if (this.cellId === '00') {
      //window.jdp = this;
      //debugger;
    }
		this.addEventListener('click', this.handleDrop.bind(this));
	}

	handleDrop(e) {
    if (!tempState.currentElementBeingDragged) {
      return;
    }
    console.log(e.target);
    console.log(e.currentTarget);

		let piece = tempState.currentElementBeingDragged;
		movePiece(piece, this);
	}

  render() {
		if (this.startingCellForPlayer === '1') {
			this.classList.add('starting-cell');
			this.classList.add('starting-cell--player-one');
		} else if (this.startingCellForPlayer === '2') {
			this.classList.add('starting-cell');
			this.classList.add('starting-cell--player-two');
		} else if (this.winningCell) {
			this.classList.add('winning-cell');
		}

		//if (appModel.get('game.selectedPiece'))

		if (this.pieceId) {

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
