import {classBuilder, model} from 'utility-toolkit';
import {getCurrentPieceForCell} from './tasks/get-current-piece-for-cell';
import {appModel} from './app-model';

function filterOccupiedCells(cells) {
  return cells.filter((cellId) => {
    return !getCurrentPieceForCell(cellId);
  })
}

function filterUnOccupiedCells(cells) {
  return cells.filter((cellId) => {
    return getCurrentPieceForCell(cellId);
  })
}

class TurnModel extends classBuilder(class{}).with(model) {

  constructor() {
    super();
    this.createSubscriber().on('activePieceData', (data) => {
      this.calculateAllowedCells(data);
    })
  }

  get defaultState() {
    let state = {
      phase: 'MOVE', //'PUSH'
      activePieceData: null,
      allowedCells: [],
      allowedPushCells: []
    };
    return state;
  }

  reset() {
    this.set('', this.defaultState);
  }

  calculateAllowedCells(data) {
    if (!data || (this.get('phase') === 'PUSH')) {
      this.set('allowedCells',[]);
      return;
    }
    let type = data.type;
    let isSideline = data.location === 'sideline';
    let cellId = data.cellId;
    let playerId = data.playerId;

    if (isSideline) {
      if (playerId === 0) {
        this.set('allowedCells', filterOccupiedCells(['00','01','10']));
      } else {
        this.set('allowedCells', filterOccupiedCells(['44','43','34']));
      }
      return;
    }

    if (!cellId) {
      return;
    }

    let allowedCells = [];

    if (type === 'sword') {
      let x = Number(cellId[0]);
      let y = Number(cellId[1]);

      //moving one space
      if (x-1 > -1) {
        allowedCells.push(`${x-1}${y}`);
      }
      if (x+1 < 5) {
        allowedCells.push(`${x+1}${y}`);
      }
      if (y-1 > -1) {
        allowedCells.push(`${x}${y-1}`);
      }
      if (y+1 < 5) {
        allowedCells.push(`${x}${y+1}`);
      }
      //moving two spaces
      if (x-2 > -1) {
        allowedCells.push(`${x-2}${y}`);
      }
      if (x+2 < 5) {
        allowedCells.push(`${x+2}${y}`);
      }
      if (y-2 > -1) {
        allowedCells.push(`${x}${y-2}`);
      }
      if (y+2 < 5) {
        allowedCells.push(`${x}${y+2}`);
      }
    }

    if (type === 'spear') {
      let x = Number(cellId[0]);
      let y = Number(cellId[1]);

      //moving one space
      if (x-1 > -1 && y-1 > -1) {
        allowedCells.push(`${x-1}${y-1}`);
      }
      if (x+1 < 5 && y+1 < 5) {
        allowedCells.push(`${x+1}${y+1}`);
      }
      if (x-1 > -1 && y+1 < 5) {
        allowedCells.push(`${x-1}${y+1}`);
      }
      if (x+1 < 5 && y-1 > -1) {
        allowedCells.push(`${x+1}${y-1}`);
      }

      //moving two spaces
      if (x-2 > -1 && y-2 > -1) {
        allowedCells.push(`${x-2}${y-2}`);
      }
      if (x+2 < 5 && y+2 < 5) {
        allowedCells.push(`${x+2}${y+2}`);
      }
      if (x-2 > -1 && y+2 < 5) {
        allowedCells.push(`${x-2}${y+2}`);
      }
      if (x+2 < 5 && y-2 > -1) {
        allowedCells.push(`${x+2}${y-2}`);
      }
    }

    if (type === 'shield') {
      let x = Number(cellId[0]);
      let y = Number(cellId[1]);

      //moving one space
      if (x-1 > -1) {
        allowedCells.push(`${x-1}${y}`);
      }
      if (x+1 < 5) {
        allowedCells.push(`${x+1}${y}`);
      }
      if (y-1 > -1) {
        allowedCells.push(`${x}${y-1}`);
      }
      if (y+1 < 5) {
        allowedCells.push(`${x}${y+1}`);
      }
      if (x-1 > -1 && y-1 > -1) {
        allowedCells.push(`${x-1}${y-1}`);
      }
      if (x+1 < 5 && y+1 < 5) {
        allowedCells.push(`${x+1}${y+1}`);
      }
      if (x-1 > -1 && y+1 < 5) {
        allowedCells.push(`${x-1}${y+1}`);
      }
      if (x+1 < 5 && y-1 > -1) {
        allowedCells.push(`${x+1}${y-1}`);
      }
    }
    this.set('allowedCells', filterOccupiedCells(allowedCells));
  }

  calculateAllowedPushCells() {
    this.set('phase', 'PUSH');
    this.set('allowedCells', []);
    let data = this.get('activePieceData');

    if (!data || (this.get('phase') === 'MOVE')) {
      this.set('allowedPushCells',[]);
      return;
    }
    let type = data.type;
    let isSideline = data.location === 'sideline';
    let cellId = data.cellId;
    let playerId = data.playerId;

    let allowedPushCells = [];

    if (type === 'sword') {
      let x = Number(cellId[0]);
      let y = Number(cellId[1]);

      if (x-1 > -1 && y-1 > -1) {
        allowedPushCells.push(`${x-1}${y-1}`);
      }
      if (x+1 < 5 && y+1 < 5) {
        allowedPushCells.push(`${x+1}${y+1}`);
      }
      if (x-1 > -1 && y+1 < 5) {
        allowedPushCells.push(`${x-1}${y+1}`);
      }
      if (x+1 < 5 && y-1 > -1) {
        allowedPushCells.push(`${x+1}${y-1}`);
      }
    }

    if (type === 'spear') {
      let x = Number(cellId[0]);
      let y = Number(cellId[1]);

      if (x-1 > -1) {
        allowedPushCells.push(`${x-1}${y}`);
      }
      if (x+1 < 5) {
        allowedPushCells.push(`${x+1}${y}`);
      }
      if (y-1 > -1) {
        allowedPushCells.push(`${x}${y-1}`);
      }
      if (y+1 < 5) {
        allowedPushCells.push(`${x}${y+1}`);
      }
    }

    if (type === 'shield') {
      let x = Number(cellId[0]);
      let y = Number(cellId[1]);

      if (x-1 > -1 && y-1 > -1) {
        allowedPushCells.push(`${x-1}${y-1}`);
      }
      if (x+1 < 5 && y+1 < 5) {
        allowedPushCells.push(`${x+1}${y+1}`);
      }
      if (x-1 > -1 && y+1 < 5) {
        allowedPushCells.push(`${x-1}${y+1}`);
      }
      if (x+1 < 5 && y-1 > -1) {
        allowedPushCells.push(`${x+1}${y-1}`);
      }

      if (x-1 > -1) {
        allowedPushCells.push(`${x-1}${y}`);
      }
      if (x+1 < 5) {
        allowedPushCells.push(`${x+1}${y}`);
      }
      if (y-1 > -1) {
        allowedPushCells.push(`${x}${y-1}`);
      }
      if (y+1 < 5) {
        allowedPushCells.push(`${x}${y+1}`);
      }
    }


    this.set('allowedPushCells',filterUnOccupiedCells(allowedPushCells));
  }

}

const turnModel = new TurnModel;

export default turnModel;
