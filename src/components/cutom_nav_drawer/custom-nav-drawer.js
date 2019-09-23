import { LitElement, html, css } from 'lit-element';


class CustomNavDrawer extends LitElement {

  static get properties() {
    return {
      username: { type: String },
      productTypes: { type: Array }
    };
  }

  constructor() {
    super();
    this.productTypes = ["T-shirts", "Outerwear"];
  }

  render() {
    return html`
    <link rel="stylesheet" href="style/bulma.min.css">
    <link href="components/nav_drawer/custom-nav-drawer.css" rel="stylesheet">

    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a role="button" @click="${this.showHideMenu}" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbar">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbar" class="navbar-menu is-active">
        <div class="navbar-start">
          <a class="navbar-item"><img class="is-hidden-desktop icons" src="components/nav_drawer/home_icon.svg">Home</a>

          <div class="navbar-item has-dropdown is-hoverable is-hidden-touch">
            <a class="navbar-link">Women</a>
            <div class="navbar-dropdown">
                ${this.productTypes.map(i => html`<a class="navbar-item">${i}</a>`)}
            </div>
          </div>

          <div class="navbar-item has-dropdown is-hoverable is-hidden-touch">
            <a class="navbar-link">Men</a>
            <div class="navbar-dropdown">
                ${this.productTypes.map(i => html`<a class="navbar-item">${i}</a>`)}
            </div>
          </div>

          <a class="navbar-item is-hidden-desktop"><img class="icons" src="components/nav_drawer/t-shirt_icon.png">Shop</a>

          <a class="navbar-item"><img class="is-hidden-desktop icons" src="components/nav_drawer/shopping_cart.png">My cart</a>

        </div>
      </div>
    </nav>`

  }
  showHideMenu(e) {
    var id = e.target.getAttribute("data-target");
    this.shadowRoot.getElementById(id).classList.toggle("is-active");
  }
}

customElements.define('custom-nav-drawer', CustomNavDrawer);
