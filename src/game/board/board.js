import {default as hyper} from 'hyperhtml/esm/index';
import {customElement, events, properties, stopEvent} from 'web-components-core';
import {classBuilder} from 'utility-toolkit';
import {Cell} from './cell';
import './board.css';
import {BaseView} from 'common/views/base-view';
import {getCurrentPieceForCell} from 'common/tasks/get-current-piece-for-cell';
import {appModel} from 'common/app-model';

export class Board extends BaseView {
  constructor() {
    super();
    this.state = Array.apply(null, Array(5)).map((ignore, rowIndex) => {
      return Array.apply(null, Array(5)).map((ignore, colIndex) => {
        return null;
      })
    })
    appModel.on('update', this.render.bind(this));
  }

  render() {
    return this.html`
      ${this.state.map((row, x) => hyper.wire(row)`<div class="b-row">
        ${row.map((cell, y) => {
          let cellId = ''+x+y;
          let pieceData = getCurrentPieceForCell(cellId) || {};
          if (pieceData.pieceId) {
            debugger;
          }
          let isWinningCell = x === 3 && y === 3;
          return hyper.wire(cell)`
          <p-cell cell-id="${cellId}" piece-id="${pieceData.pieceId}"></p-cell>
          `})}
      </div>`)}
      `;
  }
}

Board.define('p-board');
