import {Piece} from './piece';

export class Sword extends Piece {

  construct() {
    super.construct();
    //this.id = '0_sword_0';
    this.setAttribute('draggable', true);
    this.classList.add('piece');

  }

  render() {
    return this.
    html`
      <a href="#" draggable="false" class="${'piece-for-player'+this.playerId}">
        <img draggable="false" width="100%" height="100%" src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Coa_Illustration_Elements_Arms_Sword.svg">
      </a>
    `;
  }
}

Sword.define('p-sword');
