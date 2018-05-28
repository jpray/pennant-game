import {classBuilder, model} from 'utility-toolkit';
import {piecesDefaultState} from './tasks/pieces-default-state';
import {getPieceStateById, setPieceStateById} from './tasks/get-piece-state-by-id';
import {tempState} from 'common/temp-state';

class AppModel extends classBuilder(class{}).with(model) {

  constructor() {
    super();
    this.accessors = {
      'board': true,
      'players': true,
      'game.currentPlayer': true,
      'board.N.N.pieceId': true,
      'players.N.points': true,
      'sideline.N': true,
      'pieces': true,
      //experimental
      'winningCell': 'board.2.2',
      'playerInTheLead': {
        calculateOn: ['players.N.points'],
        calculate: () => {
          let prevPoints = -1;
          return this.get('players').reduce((out, player, i) => {
            if(player.points > prevPoints) {
              return `players.${i}`;
            }
          });
        }
      }
    };
  }

  get(accessor) {
    if (accessor && this.accessors[accessor.replace(/[0-9]/g, 'N')] === -1) {
      console.error(`I see you are wanting to access "${accessor}".  That's cool.  Please define it in the accessors array for this model.`)
    }
    return super.get(accessor);
  }

  set(accessor, value) {
    if (this.accessors[accessor.replace(/[0-9]/g, 'N')] === -1) {
      console.error(`I see you are wanting to access "${accessor}".  That's cool.  Please define it in the accessors array for this model.`)
    }
    return super.set(accessor, value);
  }

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

  getPieceStateById(pieceId) {
    let pieces = this.get('pieces');
    let filteredArray = pieces.filter(function (piece) {
      return piece.pieceId === pieceId;
    });
    return filteredArray[0];
  }

  setPieceStateById(pieceId, value) {
    this.get('pieces').forEach((piece, index) => {
      if (piece.pieceId === pieceId) {
        this.set(`pieces.${index}`, value)
      }
    })
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
