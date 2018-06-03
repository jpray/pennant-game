import {default as hyper} from 'hyperhtml/esm/index';
import {customElement, events, properties, stopEvent} from 'utility-toolkit';
import {classBuilder} from 'utility-toolkit';
import delegate from 'dom-delegate';
import appCh, {MOVE_PIECE, PUSH_PIECE, TURN_ENDED} from 'common/app-channel';
import turnModel from 'common/turn-model';
import {baseView} from 'common/views/base-view';
import {getPieceStateById} from 'common/tasks/get-piece-state-by-id';
import {getCurrentPieceForCell} from 'common/tasks/get-current-piece-for-cell';
import {getCurrentCellForPiece} from 'common/tasks/get-current-cell-for-piece';
import pieceCh, { SHAKE } from '../pieces/piece-channel';

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
				type: Number,
				value() {
					return NaN;
				}
			},
      isAllowedMove: {
        type: String,
        value() {
          return 'false';
        }
      },
      isAllowedPush: {
        type: String,
        value() {
          return 'false';
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
    if (!turnModel.get('activePieceData')) {
      return;
    }
    console.log(e.target);
    console.log(e.currentTarget);

		let piece = turnModel.get('activePieceData');
    if (piece.cellId === this.cellId) {
      if (turnModel.get('phase') === 'PUSH') {
        appCh.publish(TURN_ENDED);
      }
      return;
    }
    if (!piece.cellId || piece.cellId.includes('sideline')) {
      if (Number(this.startingCellForPlayer) !== piece.playerId) {
        pieceCh.publish(SHAKE, piece.pieceId);
        return;
      }
    }

    if (turnModel.get('phase') === 'MOVE') {
        if (!turnModel.get('allowedCells').includes(this.cellId)) {
          pieceCh.publish(SHAKE, piece.pieceId);
        } else {
          appCh.publish(MOVE_PIECE, piece, this);
        }
        return;
    }

    if (turnModel.get('phase') === 'PUSH') {
        if (!turnModel.get('allowedPushCells').includes(this.cellId)) {
          pieceCh.publish(SHAKE, piece.pieceId);
        } else {
          let currentCellForPiece = getCurrentCellForPiece(piece.pieceId);
          let pushedPiece = getCurrentPieceForCell(this.cellId);
          let pieceX = Number(currentCellForPiece[0]);
          let pieceY = Number(currentCellForPiece[1]);
          let pushedPieceX = Number(this.cellId[0]);
          let pushedPieceY = Number(this.cellId[1]);
          let xChange = pushedPieceX - pieceX;
          let yChange = pushedPieceY - pieceY;
          appCh.publish(PUSH_PIECE, piece, pushedPiece, xChange, yChange);
        }
        return;
    }
	}

  render() {
		if (this.startingCellForPlayer === 0) {
			this.classList.add('starting-cell');
			this.classList.add('starting-cell--player-one');
		} else if (this.startingCellForPlayer === 1) {
			this.classList.add('starting-cell');
			this.classList.add('starting-cell--player-two');
		} else if (this.winningCell) {
			this.classList.add('winning-cell');
		}

    this.classList[this.isAllowedMove === 'true' ? 'add' : 'remove']('allowed-move-cell');
    this.classList[this.isAllowedPush === 'true' ? 'add' : 'remove']('allowed-push-cell');


		let pieceState = getPieceStateById(this.pieceId);
		let type = pieceState && pieceState.type;
    let playerId = pieceState && pieceState.playerId;

    return this.html`
		 <p-sword cell-id="${this.cellId}" player-id="${playerId}" id="${this.pieceId}" class="${type === 'sword' ? 'show' : 'hide'}"></p-sword>
		 <p-spear cell-id="${this.cellId}" player-id="${playerId}" id="${this.pieceId}" class="${type === 'spear' ? 'show' : 'hide'}"></p-spear>
		 <p-shield cell-id="${this.cellId}" player-id="${playerId}" id="${this.pieceId}" class="${type === 'shield' ? 'show' : 'hide'}"></p-shield>
    `;
  }
}

Cell.define('p-cell');
