
import {default as hyper} from 'hyperhtml/esm/index';
import {classBuilder} from 'utility-toolkit';
import {defineElement, customElement, events, properties} from 'web-components-core';
import delegate from 'dom-delegate';

export class BaseView extends classBuilder(customElement()).with(
	events,
	properties) {
    constructor() {
      super();
      this.html = hyper(this);
			this.delegateEl = delegate(this);
			this.addEventListeners();
    }

		static get properties() {
			return {};
		}

    render() {
      return this.html`test`;
    }

		addEventListeners() {}

}
