import {appModel} from '../app-model';

export function getCurrentPieceForCell(cellId) {
  let pieceData = appModel.get('pieces').reduce((out, data) => {
    if (out) {
      return out;
    }
    if (data.cellId === cellId) {
      return data;
    }
    return null;
  },null)
  return pieceData;
}
