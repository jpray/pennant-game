import {Piece} from './piece';

export class Spear extends Piece {

  construct() {
    super.construct();
    //this.id = '0_spear_0';
    this.setAttribute('draggable', true);
    this.classList.add('piece');

  }

  render() {
    return this.html`
      <a href="#" class="${'piece-for-player'+this.getAttribute('player-id')}">
        <img width="100%" height="100%" src="https://upload.wikimedia.org/wikipedia/commons/0/06/Spear.svg">
      </a>
    `;
  }
}

Spear.define('p-spear');
