import appCh, { MOVE_ENDED, TURN_ENDED, UPDATE_POINTS, UPDATE_WINNER, UPDATE_CURRENT_PLAYER, MOVE_PIECE, PUSH_PIECE } from './app-channel';
import appModel from './app-model';
import turnModel from './turn-model';
import {getCurrentCellForPiece} from 'common/tasks/get-current-cell-for-piece';

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

  let startingCell = (action.startingCellId || 'SS').split('');
  let endingCell = action.endingCellId.split('');
  appModel.set(`board.${startingCell[0]}.${startingCell[1]}`, null);
  //TODO: debug board set
  appModel.set(`board.${endingCell[0]}.${endingCell[1]}`, action.pieceId);
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


  let pushedPieceState = appModel.getPieceStateById(action.pushedPieceId);

  debugger;
  // pushedPieceState.cellId = '22';
  //
  // let startingCell = (action.startingCellId || 'SS').split('');
  // let endingCell = action.endingCellId.split('');
  // appModel.set(`board.${startingCell[0]}.${startingCell[1]}`, null);
  // //TODO: debug board set
  // appModel.set(`board.${endingCell[0]}.${endingCell[1]}`, action.pieceId);
  // appModel.setPieceStateById(action.pieceId, pieceState);
  //
  // turnModel.set('activePieceData', appModel.getPieceStateById(action.pieceId));
  // appCh.publish(MOVE_ENDED);
})
