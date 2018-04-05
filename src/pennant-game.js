/* @flow */
import './pennant-game.css'; // eslint-disable-line import/no-unassigned-import, import/extensions

import {default as hyper} from 'hyperhtml/esm/index';
import {customElement, events, properties, stopEvent} from 'web-components-core';
import {classBuilder} from 'utility-toolkit';
import {Game} from './game';

const NUM_PLAYERS = 2;

export class PennantGame extends classBuilder(customElement()).with(
	events,
	properties) {
    constructor() {
      super();
      this.game = new Game(NUM_PLAYERS);
			this.html = hyper(this);
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
