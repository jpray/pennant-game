import  appModel from '../app-model';

export function getPieceStateById(pieceId) {
  let pieces = appModel.get('pieces');
  let filteredArray = pieces.filter(function (piece) {
    return piece.pieceId === pieceId;
  });
  return filteredArray[0];
}

export function setPieceStateById(pieceId, value) {
  appModel.get('pieces').forEach((piece, index) => {
    if (piece.pieceId === pieceId) {
      appModel.set(`pieces.${index}`, value)
    }
  })
}
