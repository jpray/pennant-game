import {appModel} from '../app-model';

export function getPieceAtPosition(x, y) {
  let pieceData = appModel.pieces.reduce((out, data) => {
    if (out) {
      return out;
    }
    if (data.x === x && data.y === y) {
      return data;
    }
    return null;
  },null)
}
