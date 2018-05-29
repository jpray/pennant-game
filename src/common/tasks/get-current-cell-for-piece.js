import appModel from '../app-model';


export function getCurrentCellForPiece(pieceId) {
  return [].concat.apply([], appModel.get('board')).reduce((out, cellPieceId, i) => {
    let cellId = String(Math.floor(i/5)) + String(i%5);
    return out ? out : cellPieceId === pieceId ? cellId : out;
  }, null);
}
