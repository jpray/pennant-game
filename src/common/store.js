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
        currentPlayer: 0,
        somethingElse: [{foo: 'bye'}]
      }
    }
    //this.setupEvents();
    this.syncedPropertiesData = new Map();
    this.syncedPropertiesDataPaused = new WeakMap();
  }

  get accessors() {
    return {
      CURRENT_PLAYER: 'game.currentPlayer',
      GAME: 'game'
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
    this._setState(currentState, accessor);
  }

  getState(accessor='') {
    let path = typeof accessor === 'function' ? accessor(jsonClone(this.state)) : accessor;
    return jsonClone(delve(this.state, path) || this.state);
  }

  _setState(newState, accessor) {
    const currentState = this.getState();
    this.state = newState;
    this.processSyncedPropertiesBasedOnAccessor(accessor);
  }

  syncProperties(target, ...propsArray) {
    propsArray.forEach((propData) => {
      let targetProperty = propData[0];
      let accessor = propData[1];
      this.syncedPropertiesData.set(target, {
        accessor: accessor,
        targetProperty: targetProperty
      });
    })
    this.processSyncedPropertiesBasedOnTarget(target);
  }

  pauseSync(el) {
    if (this.syncedPropertiesData.has(el)) {
      this.syncedPropertiesDataPaused.set(el, this.syncedPropertiesData.get(el));
      this.syncedPropertiesData.delete(el);
    }
  }

  unpauseSync(el) {
    if (this.syncedPropertiesDataPaused.has(el)) {
      this.syncedPropertiesData.set(el, this.syncedPropertiesDataPaused.get(el));
      this.syncedPropertiesDataPaused.delete(el);
    }
  }

  processSyncedPropertiesBasedOnAccessor(accessor) {
    this.syncedPropertiesData.forEach((opts, el) => {
      //TODO: this check is naive currently
      if (accessor.indexOf(opts.accessor) === -1) {
        return;
      }
      el[opts.targetProperty] = this.getValue(opts.accessor);
    })
  }

  processSyncedPropertiesBasedOnTarget(target=null) {
    this.syncedPropertiesData.forEach((opts, el) => {
      if (target && target !== el) {
        return;
      }
      el[opts.targetProperty] = this.getValue(opts.accessor);
    })
  }

  handleEvent(details) {
    debugger;
  }

}

const store = new Store();
export { store }
