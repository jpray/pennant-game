import {baseView} from 'common/views/base-view';
import './pieces.css';
import turnModel from 'common/turn-model';
import {getCurrentCellForPiece} from 'common/tasks/get-current-cell-for-piece';
import appModel from 'common/app-model';
import pieceCh, { SHAKE } from './piece-channel';
export class Piece extends baseView() {

  static get properties() {
		return {
			playerId: {
				type: Number,
				value() {
					return NaN;
				}
			},
      cellId: {
        type: String,
        value() {
          return '';
        }
      }
		};
	}

  constructor() {
    super();
  }

  connected() {
    this.addEventListeners();
    this.pieceChSubscriber = pieceCh.createSubscriber().on(SHAKE, (pieceId) => {
      if (this.id === pieceId) {
        this.shake();
      }
    })
  }

  disconnected() {
    this.pieceChSubscriber.destroy();
  }

  get currentCell() {
    return getCurrentCellForPiece(this);
  }

  addEventListeners() {
    this.addEventListener('click', this.handleClick.bind(this));
  }

  shake() {
    this.classList.add('invalid');
    setTimeout(() => {
      this.classList.remove('invalid');
    },1000)
  }

  handleClick(e) {
    e.preventDefault();
    let pieceId = e.currentTarget.pieceId || e.currentTarget.id;
    let currentPlayerId = appModel.get('game.currentPlayer');
    let piecePlayerId = e.currentTarget.playerId;

    if (turnModel.get('phase') === 'PUSH') {
      return;
    }

    if (currentPlayerId !== piecePlayerId) {
      this.shake();
      turnModel.set('activePieceData', null);
      return;
    }

    if (pieceId) {
      turnModel.set('activePieceData', appModel.getPieceStateById(pieceId));
    }
  }

}
