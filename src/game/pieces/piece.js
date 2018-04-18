import {BaseView} from 'common/views/base-view';
import './pieces.css';
import {tempState} from 'common/temp-state';
import {getCurrentCellForPiece} from 'common/tasks/get-current-cell-for-piece';

export class Piece extends BaseView {
  constructor() {
    super();
  }

  get currentCell() {
    return getCurrentCellForPiece(this);
  }

  addEventListeners() {
    this.addEventListener('click', this.handleClick.bind(this));
  }

  handleClick(e) {
    e.preventDefault();
    tempState.currentElementBeingDragged = e.currentTarget;
  }

}
