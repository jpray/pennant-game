import {baseView} from 'common/views/base-view';
import './pieces.css';
import {tempState} from 'common/temp-state';
import {getCurrentCellForPiece} from 'common/tasks/get-current-cell-for-piece';
import {appModel} from 'common/app-model';

export class Piece extends baseView() {
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

  handleClick(e) {
    e.preventDefault();
    let pieceId = e.currentTarget.pieceId || e.currentTarget.id;
    if (pieceId) {
      appModel.set('selectedPiece', pieceId);
    }
    tempState.currentElementBeingDragged = e.currentTarget;
  }

}
