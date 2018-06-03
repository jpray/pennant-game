import appCh, { MOVE_ENDED, TURN_ENDED, UPDATE_POINTS, UPDATE_WINNER, UPDATE_CURRENT_PLAYER, MOVE_PIECE, PUSH_PIECE } from './app-channel';
import appModel from './app-model';
import turnModel from './turn-model';
import {getCurrentCellForPiece} from 'common/tasks/get-current-cell-for-piece';
import {getCurrentPieceForCell} from 'common/tasks/get-current-piece-for-cell';

import {Move} from './actions/move.action';
import {Push} from './actions/push.action';


const appChSubscriber = appCh.createSubscriber();

appChSubscriber.on(TURN_ENDED, function() {
  appCh.publish(UPDATE_POINTS);
  appCh.publish(UPDATE_WINNER);
  appCh.publish(UPDATE_CURRENT_PLAYER);
  turnModel.reset();
})

appChSubscriber.on(UPDATE_POINTS, function() {
  const winningCellPieceId = appModel.get('board.2.2');

  if (winningCellPieceId) {
    const player = Number(winningCellPieceId[0]);
    appModel.update(`players.${player}.points`, value => value + 1 );
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

appChSubscriber.on(MOVE_PIECE, function(piece, cell) {
  let action = new Move();
  action.playerId = appModel.get('game.currentPlayer');
  action.boardId = 'default';
  action.pieceId = piece.pieceId;
  action.startingCellId = getCurrentCellForPiece(action.pieceId);
  //action.startingCellId = piece.currentCell.cellId;
  action.endingCellId = cell.cellId;
  //validateAction(action);
  appModel.update('actions', actions => actions.concat([action]));
  if (action.startingCellId && !action.startingCellId.includes('sideline')) {
    appModel.set(`board.${action.startingCellId[0]}.${action.startingCellId[1]}`, null);
  }
  let pieceState = appModel.getPieceStateById(action.pieceId);
  if (pieceState.location !== 'board') {
    pieceState.location = 'board';
    appModel.update(`sideline.${action.playerId}`, value => value-1 );
  }

  pieceState.cellId = action.endingCellId;
  appModel.setPieceStateById(action.pieceId, pieceState);
  turnModel.set('activePieceData', appModel.getPieceStateById(action.pieceId));
  appCh.publish(MOVE_ENDED);
})

appChSubscriber.on(MOVE_ENDED, function() {
  turnModel.calculateAllowedPushCells();
  if (turnModel.get('allowedPushCells').length === 0) {
    appCh.publish(TURN_ENDED);
    return;
  }
})

appChSubscriber.on(PUSH_PIECE, function(piece, pushedPiece, xChange, yChange) {
  let action = new Push();
  action.playerId = appModel.get('game.currentPlayer');
  action.boardId = 'default';
  action.pieceId = piece.pieceId;
  action.currentCellId = getCurrentCellForPiece(action.pieceId);
  action.pushedPieceId = pushedPiece.pieceId;
  action.xChange = xChange;
  action.yChange = yChange;
  appModel.update('actions', actions => actions.concat([action]));

  function doPush(cellId, xChange, yChange) {
    let pushedPieceState = getCurrentPieceForCell(cellId);
    let pushedPieceId = pushedPieceState.pieceId;
    pushedPieceState.cellId = computePushCellId(pushedPieceState.cellId, xChange, yChange);

    let nextPushedPieceId = getCurrentPieceForCell(pushedPieceState.cellId);
    if (nextPushedPieceId) {
      doPush(pushedPieceState.cellId, xChange, yChange);
    }

    appModel.setPieceStateById(pushedPieceId, pushedPieceState);
  }

  doPush(getCurrentCellForPiece(action.pushedPieceId), action.xChange, action.yChange);

  appCh.publish(MOVE_ENDED);
})

function computePushCellId(cellId, xChange, yChange) {
  let startX = Number(cellId[0]);
  let startY = Number(cellId[1]);
  let newX = startX + xChange;
  let newY = startY + yChange;
  if (newX < 0 || newX > 4 || newY < 0 || newY > 4) {
    return 'graveyard';
  }
  return `${newX}${newY}`;
}
