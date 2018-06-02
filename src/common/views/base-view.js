
import {default as hyper} from 'hyperhtml/esm/index';
import {classBuilder} from 'utility-toolkit';
import {defineElement, customElement, events, properties} from 'utility-toolkit';
import delegate from 'dom-delegate';

export function baseView() {
	return class extends classBuilder(customElement()).with(
		events,
		properties) {
	    constructor() {
	      super();
	      this.html = hyper(this);
				this.delegateEl = delegate(this);
	    }

			static get properties() {
				return {};
			}

			propertiesChanged() {
				this.render();
			}

	    render() {
	      return this.html``;
	    }

	}
}
