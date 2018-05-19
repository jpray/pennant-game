import {default as hyper} from 'hyperhtml/esm/index';
import {customElement, events, properties, stopEvent} from 'utility-toolkit';
import {classBuilder} from 'utility-toolkit';
import './side-line.css';
import delegate from 'dom-delegate';
import {appModel} from 'common/app-model';
import {baseView} from 'common/views/base-view';

export class SideLine extends baseView() {
// export class SideLine extends classBuilder(customElement()).with(
// 	events,
// 	properties) {
    constructor() {
      super();
      this.html = hyper(this);
      this.appModel = appModel;
    }


  construct() {
    super.construct();
  }

  connected() {
    const appModelPropBinder = appModel
      .createPropertyBinder(this)
      .addBindings([
      [appModel.accessors['SIDELINE_PLAYER'+this.playerId], 'numSidelinePieces'],
      [appModel.accessors.CURRENT_PLAYER, 'currentPlayer']
    ]);

  }

  propertiesChanged(val1, val2, c) {
    this.render();
  }

  get disabled() {
    return this.currentPlayer !== this.playerId;
  }

  static get properties() {
		return {
			numSidelinePieces: {
				type: Number,
				value() {
					return 0;
				}
			},
      playerId: {
				type: Number,
				value() {
					return 999;
				}
			},
      currentPlayer: {
        type: Number,
        value() {
          return 999;
        }
      }
		};
	}

  render() {
    this.classList[this.disabled ? 'add' : 'remove']('sideline--disabled');
    return this.html`
       <div>Number of Available Pieces: ${this.numSidelinePieces}</div>
       <div class="sideline_cell">
        <p-sword></p-sword>
       </div>
       <div class="sideline_cell">
        <p-spear></p-spear>
       </div>
       <div class="sideline_cell">
        <p-shield></p-shield>
       </div>
    `;
  }

}

SideLine.define('side-line');
