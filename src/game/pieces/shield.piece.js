import {BaseView} from 'common/views/base-view';
import './pieces.css';

export class Shield extends BaseView {

  construct() {
    super.construct();
    this.setAttribute('draggable', true);
    this.classList.add('piece');
  }

  render() {
    return this.html`
      <a href="#">
        <img width="100%" height="100%" src="https://upload.wikimedia.org/wikipedia/commons/5/57/Coa_Illustration_Shield_Heater.svg">
      </a>
    `;
  }
}

Shield.define('p-shield');
