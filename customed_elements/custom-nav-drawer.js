import { LitElement, html, css } from 'lit-element';


class CustomNavDrawer extends LitElement {

  static get properties() {
    return {
      message: { type: String },
      productTypes: { type: Array },
      isConnected: { type: Boolean }
    };
  }

  constructor(isConnected) {
    super();
    //this.isConnected = false;
    this.productTypes = ["T_shirts", "Sweats", "Trainers"];
  }

  render() {

    return html`
      <nav class="nav_drawer">
        <ul>
          <li><a href="#Home">Home</a></li>
          <li><a href="#Prduits">Produits</a></li>
          <ul>${this.productTypes.map(item => html`<li>${item}</li>`)}</ul>
        ${!this.isConnected ?
        html`<li>Mon compte</li>
              <ul><li>Mes favoris</li>
              <li>Mes recherches</li>
              <li>Mes commandes</li></ul>` :
        html`<li>Connexion</li>`}
          </ul>
      </nav>`
  }

}

customElements.define('custom-nav-drawer', CustomNavDrawer);
