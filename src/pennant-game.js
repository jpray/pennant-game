/* @flow */
import './pennant-game.css'; // eslint-disable-line import/no-unassigned-import, import/extensions
import {stopEvent} from 'utility-toolkit';
import {classBuilder} from 'utility-toolkit';
import {Game} from 'game/game';
import delegate from 'dom-delegate';
import {tempState} from 'common/temp-state';
import {baseView} from 'common/views/base-view';
import 'game/pieces/shield.piece';
import 'game/pieces/spear.piece';
import 'game/pieces/sword.piece';

const NUM_PLAYERS = 2;

export class PennantGame extends baseView() {
    constructor() {
      super();
      this.game = new Game(NUM_PLAYERS);
    }

		addEventListners() {
			delegate(document.body).on('click', 'a', function(e) {
	      let href = this.getAttribute('href');
	      if (href === '#') {
	        e.preventDefault();
	        return;
	      }
	    });

			this.delegateEl.on('dragstart', '.piece', function(e) {
	      tempState.currentElementBeingDragged = e.target;
	    });

		}

    connected() {
			this.render();
			//this.play();
    }

		render() {
			return this.html`
					${this.game}
				`;
		}

    async play() {
      if (this.game.hasWinner()) {
        return;
      }
      await this.game.playTurn();
      this.play();
    }
  }

PennantGame.define('pennant-game');
