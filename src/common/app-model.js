import {classBuilder} from 'utility-toolkit';
import {model} from './model.mixin';
import {modelSync} from './model-sync.mixin';
import {sideLineDefaultState} from './tasks/side-line-default-state';
import {piecesDefaultState} from './tasks/pieces-default-state';
class AppModel extends classBuilder(class{}).with(model, modelSync) {

  constructor() {
    super();

    this.accessors = {
      CURRENT_PLAYER: 'game.currentPlayer',
      GAME: 'game',
      SIDELINE_SWORDS: 'sideline.swords',
      SIDELINE_SPEARS: 'sideline.spears',
      SIDELINE_SHIELDS: 'sideline.shields'
    };
  }

  get defaultState() {
    let state = {
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

}

const appModel = new AppModel();
export { appModel }
