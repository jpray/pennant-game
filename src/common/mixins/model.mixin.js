import {objectAssign, objectDeepFreeze, dget} from 'utility-toolkit';
//import {global, objectAssign, adviceBefore, functionName, createStorage, microTask} from 'utility-toolkit';
import uniqueId from 'utility-toolkit/lib/unique-id.js';

function dgetSplit(accessor) {
  let lastDotPos = accessor.lastIndexOf('.');
  if (lastDotPos > -1) {
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

  const stateKey = uniqueId('_state');

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
      let {propName, path} = dgetSplit(accessor);
      let obj = dget(newState, path) || newState;
      if (Array.isArray(obj)) {
        obj[Number(propName)] = value;
      } else {
        obj[propName] = value;
      }
      this.setState(newState, accessor);
    }

    getState(accessor='') {
      return jsonClone(accessor ? dget(this[stateKey], accessor) : this[stateKey]);
    }

    setState(newState, accessor) {
      const currentState = this.getState();
      this[stateKey] = newState;
    }

    on(name, func) {
      this.listeners.push(func);
    }

    notifyListeners() {
      this.listeners.forEach((cb) => {
        cb('change', );
      })
    }

  }
}
