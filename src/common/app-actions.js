import appCh, { TURN_ENDED, UPDATE_POINTS, UPDATE_WINNER, UPDATE_CURRENT_PLAYER } from './app-channel';
import appModel from './app-model';

const appChSubscriber = appCh.createSubscriber();

appChSubscriber.on(TURN_ENDED, function() {
  appCh.publish(UPDATE_POINTS);
  appCh.publish(UPDATE_WINNER);
  appCh.publish(UPDATE_CURRENT_PLAYER);
})

appChSubscriber.on(UPDATE_POINTS, function() {
  const winningCell = appModel.get('board.2.2');
  if (winningCell && winningCell.pieceId) {
    const player = Number(winningCell.pieceId[0]);
    appModel.update(`players.${player}.points`, value => value++ );
  }
})

appChSubscriber.on(UPDATE_WINNER, function() {
  const firstPlayerPoints = appModel.get('players.0.points');
  const secondPlayerPoints = appModel.get('players.1.points');
  if (firstPlayerPoints >= 8) {
    appModel.set(`game.winningPlayer`, 0);
  } else if (secondPlayerPoints >= 8) {
    appModel.set(`game.winningPlayer`, 1);
  }
})

appChSubscriber.on(UPDATE_CURRENT_PLAYER, function() {
  appModel.update(`game.currentPlayer`, value => value === 0 ? 1 : 0);
})
