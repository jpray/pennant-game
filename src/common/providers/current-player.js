import {store} from '../store';

export function getCurrentPlayer() {
  return store.state.game.currentPlayer;
}

export function setCurrentPlayer(value) {
  store.state.game.currentPlayer = value;
}
