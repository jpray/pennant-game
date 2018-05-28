import {classBuilder, model} from 'utility-toolkit';

class TurnModel extends classBuilder(class{}).with(model) {

  get defaultState() {
    let state = {
      activePieceData: null,
      allowedCells: []
    };
    return state;
  }

  reset() {
    this.set('', this.defaultState);
  }

  calculateAllowedCells() {

  }

}

const turnModel = new TurnModel;

export default turnModel;
