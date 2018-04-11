import {BaseView} from 'common/views/base-view';
import './pieces.css';
import {getCurrentCellForPiece} from 'common/tasks/get-current-cell-for-piece';

export class Sword extends BaseView {

  construct() {
    super.construct();
    this.id = 'sword1';
    this.setAttribute('draggable', true);
    this.classList.add('piece');

  }

  get currentCell() {
    return getCurrentCellForPiece(this);
  }

  render() {
    return this.html`
      <a href="#" draggable="false">
        <img draggable="false" width="100%" height="100%" src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Coa_Illustration_Elements_Arms_Sword.svg">
      </a>
    `;
  }
}

Sword.define('p-sword');
