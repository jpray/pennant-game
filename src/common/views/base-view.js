
import {default as hyper} from 'hyperhtml/esm/index';
import {classBuilder} from 'utility-toolkit';
import {defineElement, customElement, evented, properties} from 'web-components-core';

export class BaseView extends classBuilder(customElement()).with(
	defineElement,
	evented,
	properties) {
    // constructor() {
    //   //super();
    //   //this.html = hyper(this);
    // }

    render() {
      debugger;
      return this.html`test`;
    }

}
