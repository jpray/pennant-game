import {appModel} from '../app-model';
import {Move} from '../actions/move.action';

function performMoveAction(action) {
  //requires that appModel actually contain and be used for board/cell info
  let newActions = appModel.get('actions').concat([action]);
  appModel.set('actions', newActions);

  //

  //let piece = getPiece(action.pieceId);
  appModel.setPiece(action);
  appModel.endTurn();
  //piece.currentCellId = action.endingCellId;
}

export function movePiece(piece, cell) {
  let action = new Move();
  action.playerId = appModel.get(appModel.accessors.CURRENT_PLAYER);
  action.boardId = 'default';
  action.pieceId = piece.id;
  action.startingCellId = piece.currentCell.cellId;
  action.endingCellId = cell.cellId;
  //validateAction(action);
  performMoveAction(action);
}
