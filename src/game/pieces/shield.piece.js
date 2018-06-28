import {Piece} from './piece';

export class Shield extends Piece {

  construct() {
    super.construct();
    //this.id = '0_shield_0';
    this.setAttribute('draggable', true);
    this.classList.add('piece');
  }

  render() {
    return this.
    html`
      <a href="#" class="${'piece-for-player'+this.playerId}">
        <img width="100%" height="100%" src="https://upload.wikimedia.org/wikipedia/commons/5/57/Coa_Illustration_Shield_Heater.svg">
      </a>
    `;
  }
}

Shield.define('p-shield');
