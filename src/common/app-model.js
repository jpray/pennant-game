import {classBuilder} from 'utility-toolkit';
import {model} from './model.mixin';
import {modelSync} from './model-sync.mixin';


class AppModel extends classBuilder(class{}).with(model, modelSync) {
  constructor() {
    super();
    this.state = {
      players: [],
      pieces: [],
      board: {},
      game: {
        currentPlayer: 0,
        somethingElse: [{foo: 'bye'}]
      }
    }

  }

  get accessors() {
    return {
      CURRENT_PLAYER: 'game.currentPlayer',
      GAME: 'game'
    }
  }

}

const appModel = new AppModel();
export { appModel }
