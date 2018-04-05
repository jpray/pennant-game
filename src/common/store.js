import delve from 'dlv';

function delveSplit(accessor) {
  let lastDotPos = accessor.lastIndexOf('.');
  if (lastDotPos) {
    let propName = accessor.slice(lastDotPos+1);
    let path = accessor.slice(0,lastDotPos);
    return {
      propName,
      path
    }
  } else {
    return {
      propName : accessor,
      path: ''
    }
  }
}

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
    this.watchers = new Map();
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
    let currentState = this.getState();
    let {propName, path} = delveSplit(accessor);
    let obj = delve(currentState, path);
    obj[propName] = value;
    this.setState(currentState);
  }

  getState(accessor='') {
    let path = typeof accessor === 'function' ? accessor(jsonClone(this.state)) : accessor;
    return jsonClone(delve(this.state, path) || this.state);
  }

  setState(newState) {
    const currentState = this.getState();
    this.state = newState;
    this.processWatchers();
  }

  watch(accessor='', watcherPropName='', el) {
    this.watchers.set(el, {
      accessor: accessor,
      watcherPropName: watcherPropName
    });
  }

  processWatchers() {
    this.watchers.forEach((data, el) => {
      el[data.watcherPropName] = this.getValue(data.accessor);
    })
  }

  handleEvent(details) {
    debugger;
  }

}

const store = new Store();
export { store }
