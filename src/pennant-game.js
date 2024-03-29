/* @flow */
import './pennant-game.css'; // eslint-disable-line import/no-unassigned-import, import/extensions
import {stopEvent} from 'utility-toolkit';
import {classBuilder} from 'utility-toolkit';
import {Game} from 'game/game';
import delegate from 'dom-delegate';
import turnModel from 'common/turn-model';
import {baseView} from 'common/views/base-view';
import 'game/pieces/shield.piece';
import 'game/pieces/spear.piece';
import 'game/pieces/sword.piece';
import 'common/app-actions';
const NUM_PLAYERS = 2;

export class PennantGame extends baseView() {
    constructor() {
      super();
      this.game = new Game(NUM_PLAYERS);
    }

		addEventListeners() {
			delegate(document.body).on('click', 'a', function(e) {
	      let href = this.getAttribute('href');
	      if (href === '#') {
	        e.preventDefault();
	        return;
	      }
	    });

			// this.delegateEl.on('dragstart', '.piece', function(e) {
	    //   turnModel.set('activePieceData', e.target);
	    // });

		}

    connected() {
			this.render();
      //this.addEventListeners();
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
