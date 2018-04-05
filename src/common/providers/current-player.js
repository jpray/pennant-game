import {appModel} from '../app-model';

export function getCurrentPlayer() {
  return appModel.state.game.currentPlayer;
}

export function setCurrentPlayer(value) {
  appModel.state.game.currentPlayer = value;
}
