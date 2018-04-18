import {classBuilder} from 'utility-toolkit';
import {model} from './mixins/model.mixin';
import {modelSync} from './mixins/model-sync.mixin';
import {sideLineDefaultState} from './tasks/side-line-default-state';
import {piecesDefaultState} from './tasks/pieces-default-state';
import {getPieceStateById} from './tasks/get-piece-state-by-id';
class AppModel extends classBuilder(class{}).with(model, modelSync) {

  constructor() {
    super();
    this.listeners = [];

    this.accessors = {
      CURRENT_PLAYER: 'game.currentPlayer',
      GAME: 'game',
      SIDELINE_SWORDS: 'sideline.swords',
      SIDELINE_SPEARS: 'sideline.spears',
      SIDELINE_SHIELDS: 'sideline.shields',
      PIECES: 'pieces',
      PIECE: (pieceId) => {
        debugger;
      },
      PIECE_CELL: (pieceId) => {
        debugger;
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
      sideline: {
        swords: sideLineDefaultState('swords'),
        spears: sideLineDefaultState('spears'),
        shields: sideLineDefaultState('shields')
      },
      graveyard: [],
      game: {
        currentPlayer: 0,
        somethingElse: [{foo: 'bye'}],
        actions: []
      }
    };
    return state;
  }

  setPiece(pieceId, cellId) {
    let pieceState = getPieceStateById(pieceId);
    if (pieceState.location !== 'board') {
      pieceState.location = 'board';
    }

    pieceState.cellId = cellId;
    debugger;
    this.notifyListeners();
  }

  on(name, func) {
    this.listeners.push(func);
  }

  notifyListeners() {
    this.listeners.forEach((cb) => {
      cb();
    })
  }


}

const appModel = new AppModel();
export { appModel }
