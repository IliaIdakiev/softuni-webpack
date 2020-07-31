import { html, render } from 'lit-html';
import * as axios from 'axios';
import * as utils from './utils';

function appTemplate(context) {
  return html`
    <style>${require('./app.css')}</style>
    <div>${require('./app-text.txt')}</div>
    <button @click=${context.btnClickHandler}>CLICK ME!</button>
  `;
}

class AppRoot extends HTMLElement {

  btnClickHandler = () => { console.log(this); };

  constructor() {
    super();
    const root = this.attachShadow({ mode: 'closed' });
    this._update = function () {
      const templateResult = appTemplate(this);
      render(templateResult, root);
    }
    this._update();

    const a = null;
    const t = a?.test;
    console.log(t);
  }

  connectedCallback() {
    console.log(utils.intToBool(0));
    axios.get('https://jsonplaceholder.typicode.com/users').then(users => {
      console.log(users);
    });
  }
}

customElements.define('app-root', AppRoot);

