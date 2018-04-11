import {uniqueString, objectAssign, objectDeepFreeze, adviceAfter} from 'utility-toolkit';
//import {global, objectAssign, adviceBefore, functionName, createStorage, microTask} from 'utility-toolkit';
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

  const stateKey = uniqueString.get('_state');

  return class Model {
    constructor() {
      this.accessors = {};
      this.setState(this.defaultState);
    }

    get defaultState(){
			return {};
		}

		get state() {
			return this[stateKey];
		}

    get(accessor) {
      return this.getState(accessor);
    }

    set(accessor, value) {
      let newState = this.getState();
      let {propName, path} = delveSplit(accessor);
      let obj = delve(newState, path);
      obj[propName] = value;
      this.setState(newState, accessor);
    }

    getState(accessor='') {
      return jsonClone(accessor ? delve(this[stateKey], accessor) : this[stateKey]);
    }

    setState(newState, accessor) {
      const currentState = this.getState();
      this[stateKey] = newState;
    }

  }
}
