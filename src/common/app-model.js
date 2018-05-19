import {classBuilder} from 'utility-toolkit';
import {model} from './mixins/model.mixin';
import {modelSync} from './mixins/model-sync.mixin';
import {piecesDefaultState} from './tasks/pieces-default-state';
import {getPieceStateById} from './tasks/get-piece-state-by-id';
class AppModel extends classBuilder(class{}).with(model, modelSync) {

  constructor() {
    super();
    this.listeners = [];

    this.accessors = {
      CURRENT_PLAYER: 'game.currentPlayer',
      GAME: 'game',
      SIDELINE_PLAYER0: 'sideline.0',
      SIDELINE_PLAYER1: 'sideline.1',
      PIECES: 'pieces',
      PIECE: (pieceId) => {

      },
      PIECE_CELL: (pieceId) => {

        this.get('pieces')
      }
    };
  }

  get defaultState() {
    let state = {
      actions: [],
      players: [],
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
    this.notifyListeners();
  }

  endTurn() {
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
