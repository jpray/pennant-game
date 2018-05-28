import {baseView} from 'common/views/base-view';
import './pieces.css';
import {tempState} from 'common/temp-state';
import {getCurrentCellForPiece} from 'common/tasks/get-current-cell-for-piece';
import appModel from 'common/app-model';

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
    if (currentPlayerId !== piecePlayerId) {
      this.shake();
      tempState.currentElementBeingDragged = null;
      return;
    }

    if (pieceId) {
      appModel.set('selectedPiece', pieceId);
    }

    tempState.currentElementBeingDragged = e.currentTarget;
  }

}
