import {default as hyper} from 'hyperhtml/esm/index';
import {customElement, events, properties, stopEvent} from 'utility-toolkit';
import {classBuilder} from 'utility-toolkit';
import {Cell} from './cell';
import './board.css';
import {baseView} from 'common/views/base-view';
import {getCurrentPieceForCell} from 'common/tasks/get-current-piece-for-cell';
import appModel from 'common/app-model';
import turnModel from 'common/turn-model';

export class Board extends baseView() {

  static get properties() {
		return {
			allowedCells: {
				type: Array,
				value() {
					return [];
				}
			},
      allowedPushCells: {
				type: Array,
				value() {
					return [];
				}
			}
    };
	}

  constructor() {
    super();
    this.state = Array.apply(null, Array(5)).map((ignore, rowIndex) => {
      return Array.apply(null, Array(5)).map((ignore, colIndex) => {
        return null;
      })
    })
    appModel.createSubscriber().on('*', this.render.bind(this));
    turnModel.createPropertyBinder(this).addBindings([
      ['allowedCells', 'allowedCells'],
      ['allowedPushCells', 'allowedPushCells']
    ]);
  }

  render() {
    return this.html`
      ${this.state.map((row, x) => hyper.wire(row)`<div class="b-row">
        ${row.map((cell, y) => {
          let cellId = ''+x+y;
          let pieceData = getCurrentPieceForCell(cellId) || {};
          let isWinningCell = x === 2 && y === 2 ? 'true' : '';
          let startingCellForPlayer = NaN;
          if ((x === 0 && y === 0) || (x === 1 && y === 0) || (x === 0 && y === 1)) {
            startingCellForPlayer = 0;
          }
          if ((x === 4 && y === 4) || (x === 4 && y === 3) || (x === 3 && y === 4)) {
            startingCellForPlayer = 1;
          }
          let isAllowedMove = this.allowedCells.includes(`${x}${y}`) ? 'true' : 'false';
          let isAllowedPush = this.allowedPushCells.includes(`${x}${y}`) ? 'true' : 'false';

          return hyper.wire(cell)`
          <p-cell
            cell-id="${cellId}"
            piece-id="${pieceData.pieceId}"
            winning-cell="${isWinningCell}"
            starting-cell-for-player="${startingCellForPlayer}"
            is-allowed-move="${isAllowedMove}"
            is-allowed-push="${isAllowedPush}"
          ></p-cell>
          `})}
      </div>`)}
      `;
  }
}

Board.define('p-board');
