import {appModel} from '../app-model';
import {Move} from '../actions/move.action';

function performMoveAction(action) {
//requires that appModel actually contain and be used for board/cell info
}

export function movePiece(piece, cell) {
  let action = new Move();
  action.playerId = appModel.get(appModel.accessors.CURRENT_PLAYER);
  action.boardId = 'default';
  action.pieceId = piece.id;
  action.startingCellId = piece.currentCell.id;
  action.endingCellId = cell.id;
  //validateAction(action);
  performMoveAction(action);
}
