import {global, objectAssign, adviceBefore, functionName, createStorage, microTask} from 'utility-toolkit';
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

export const model = (baseClass) => {

  return class BaseModel {
    constructor() {
      this.state = {};
    }

    get accessors() {
      return {}
    }

    get(accessor) {
      return this._getState(accessor);
    }

    set(accessor, value) {
      let newState = this._getState();
      let {propName, path} = delveSplit(accessor);
      let obj = delve(newState, path);
      obj[propName] = value;
      this._setState(newState, accessor);
    }

    _getState(accessor='') {
      return jsonClone(accessor ? delve(this.state, accessor) : this.state);
    }

    _setState(newState, accessor) {
      const currentState = this._getState();
      this.state = newState;
    }

  }
}
