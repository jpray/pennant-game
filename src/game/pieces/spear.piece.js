import {BaseView} from 'common/views/base-view';
import './pieces.css';

export class Spear extends BaseView {

  construct() {
    super.construct();
    this.setAttribute('draggable', true);
    this.classList.add('piece');

  }

  render() {
    return this.html`
      <a href="#">
        <img width="100%" height="100%" src="https://upload.wikimedia.org/wikipedia/commons/0/06/Spear.svg">
      </a>
    `;
  }
}

Spear.define('p-spear');
