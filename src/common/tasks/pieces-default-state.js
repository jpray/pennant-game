
const NUM_PLAYERS = 2;
const TYPES = ['sword','spear','shield'];
const NUM_EACH_PIECE = 9;

export function piecesDefaultState() {
  return Array.apply(null, Array(NUM_PLAYERS)).reduce((out, ignore, playerId) => {
    return out.concat(TYPES.reduce((out2, type) => {
      return out2.concat(Array.apply(null, Array(NUM_EACH_PIECE)).map((ignore, num) => {
        return {
          type: type,
          playerId: playerId,
          pieceId: `${playerId}_${type}_${num}`,
          location: 'sideline',
          x: null,
          y: null
        }
      }));
    },[]));
  },[])
}
