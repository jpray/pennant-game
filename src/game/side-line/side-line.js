import {default as hyper} from 'hyperhtml/esm/index';
import {customElement, events, properties, stopEvent} from 'web-components-core';
import {classBuilder} from 'utility-toolkit';
import './side-line.css';
import delegate from 'dom-delegate';
import {appModel} from 'common/app-model';
import {BaseView} from 'common/views/base-view';

export class SideLine extends BaseView {
  construct() {
    super.construct();
    appModel.syncProperties(this, ['swords', appModel.accessors.SIDELINE_SWORDS]);
    appModel.syncProperties(this, ['spears', appModel.accessors.SIDELINE_SPEARS]);
    appModel.syncProperties(this, ['shields', appModel.accessors.SIDELINE_SHIELDS]);
  }

  static get properties() {
		return {
			swords: {
				type: Array,
				value() {
					return [];
				}
			},
      spears: {
				type: Array,
				value() {
					return [];
				}
			},
      shields: {
				type: Array,
				value() {
					return [];
				}
			}
		};
	}

  render() {
    return this.html`
      <div class="sideline_cell">
        ${this.swords[0]}
        ${this.swords.length}
      </div>
      <div class="sideline_cell">
        ${this.spears[0]}
        ${this.spears.length}
      </div>
      <div class="sideline_cell">
        ${this.shields[0]}
        ${this.shields.length}
      </div>
    `;
  }

}

SideLine.define('side-line');
