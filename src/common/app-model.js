import {classBuilder, model} from 'utility-toolkit';
import {piecesDefaultState} from './tasks/pieces-default-state';
import {getPieceStateById, setPieceStateById} from './tasks/get-piece-state-by-id';
import {tempState} from 'common/temp-state';

class AppModel extends classBuilder(class{}).with(model) {

  get defaultState() {
    let state = {
      actions: [],
      players: [{points:0},{points:0}],
      pieces: piecesDefaultState(),
      board: Array.apply(null, Array(5)).map((ignore, rowIndex) => {
        return Array.apply(null, Array(5)).map((ignore, colIndex) => {
          return null;
        })
      }),
      sideline: [9,9],
      graveyard: [],
      game: {
        currentPlayer: 0,
        selectedPiece: '',
        somethingElse: [{foo: 'bye'}],
        actions: []
      }
    };
    return state;
  }

  //TODO add to model
  update(path, cb) {
    this.set(path, cb(this.get(path)));
  }

  setPiece(action) {
    let pieceState = getPieceStateById(action.pieceId);
    if (pieceState.location !== 'board') {
      pieceState.location = 'board';
      this.decrementSideline(action);
    }

    pieceState.cellId = action.endingCellId;
    setPieceStateById(action.pieceId, pieceState);
  }

  assignPoints() {
    let winningCell = document.querySelector('.winning-cell');
    if (winningCell.pieceId) {
      let player = Number(winningCell.pieceId[0]);
      let points = this.get(`players.${player}.points`);
      this.set(`players.${player}.points`,
        points+1
      );
    }
  }

  endTurn() {

    tempState.currentElementBeingDragged = null;
    if (this.get('game.currentPlayer') === 0) {
      this.set('game.currentPlayer',1);
    } else {
      this.set('game.currentPlayer',0);
    }
  }

  decrementSideline(action) {
    this.set(`sideline.${action.playerId}`, this.get(`sideline.${action.playerId}`)-1);
  }


}

const appModel = new AppModel();
export default appModel;

window.appModel = appModel;
