import  {appModel} from '../app-model';

export function getPieceStateById(pieceId) {
  let pieces = appModel.get('pieces');
  let filteredArray = pieces.filter(function (piece) {
    return piece.pieceId === pieceId;
  });
  return filteredArray[0];
}
