import delve from 'dlv';

function jsonClone(value) {
  try {
    return JSON.clone(JSON.stringify(value));
  } catch(e) {
    return value;
  }
}

/*
 player {
 id,
 name,
 color
}

piece {
color,
type,
position
}

board {
orientation
}

game {
 currentPlayer
}

state {
  game,
  players,
  pieces,
  board
}
*/


class Store {
  constructor() {
    this.state = {
      players: [],
      pieces: [],
      board: {},
      game: {
        currentPlayer: 0
      }
    }
    //this.setupEvents();
  }

  get accessors() {
    return {
      CURRENT_PLAYER: 'game.currentPlayer',
      GAME: 'game',
      SOMETHING_ELSE: (state) => {
        return 'game.something[0].somethingElse';
      }
    }
  }

  getValue(accessor) {
    return delve(this.state, accessor);
  }

  setValue(accessor, value) {
    let lastDotPos = accessor.lastIndexOf('.');
    let propName;
    if (lastDotPos) {
      propName = accessor.slice(lastDotPos+1);
      accessor = accessor.slice(0,lastDotPos);
    }
    let obj = delve(this.state, accessor);
    obj[propName] = value;
  }

  getState(accessor='') {
    let path = typeof accessor === 'function' ? accessor(jsonClone(this.state)) : accessor;
    return jsonClone(delve(this.state, path));
  }

  setState(newState) {
    const currentState = this.getState();

    this.state = newState;
  }

  handleEvent(details) {
    debugger;
  }

}

const store = new Store();
export { store }
