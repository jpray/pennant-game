import appModel from '../app-model';


export function getCurrentCellForPiece(pieceId) {
  return appModel.get('pieces').reduce((out, pieceData) => {
    return pieceData.pieceId === pieceId ? pieceData.cellId : out;
  },null)
}
