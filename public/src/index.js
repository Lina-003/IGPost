import * as components from './components/index.js';

class AppContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
        <my-post nameprofile="EllyWs" viewers="234 vistas" comments="ver todos los comentarios"></my-post>
        `;
  }
}

customElements.define('app-container', AppContainer);
