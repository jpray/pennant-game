import {classBuilder, model} from 'utility-toolkit';
import {piecesDefaultState} from './tasks/pieces-default-state';
import {getPieceStateById, setPieceStateById} from './tasks/get-piece-state-by-id';
import {tempState} from 'common/temp-state';

class AppModel extends classBuilder(class{}).with(model) {

  constructor() {
    super();
    this.listeners = [];

    this.accessors = {
      CURRENT_PLAYER: 'game.currentPlayer',
      GAME: 'game',
      SIDELINE_PLAYER0: 'sideline.0',
      SIDELINE_PLAYER1: 'sideline.1',
      PIECES: 'pieces'
    };
  }

  get defaultState() {
    let state = {
      actions: [],
      players: [{points:0},{points:0}],
      pieces: piecesDefaultState(),
      board: [],
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
    if (this.get(this.accessors.CURRENT_PLAYER) === 0) {
      this.set(this.accessors.CURRENT_PLAYER,1);
    } else {
      this.set(this.accessors.CURRENT_PLAYER,0);
    }
  }

  decrementSideline(action) {
    this.set(this.accessors['SIDELINE_PLAYER'+action.playerId], this.get(this.accessors['SIDELINE_PLAYER'+action.playerId])-1);
  }


}

const appModel = new AppModel();
export { appModel }
