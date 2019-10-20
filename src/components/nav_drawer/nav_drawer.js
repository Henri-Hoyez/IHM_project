import { LitElement, html, css } from 'lit-element';
import { MDCList } from "@material/list";


class NavDrawer extends LitElement {

  static get properties() {
    return {
      open: { type: Boolean },
      isConnected: { type: Boolean },
      categories: { type: Array }
    };
  }

  constructor() {
    super();
    this.open = false;
    this.isConnected = false;
    this.categories = Object.getOwnPropertyNames(catalog);
  }

  signout(){
    UserManager.signout();
    this.requestUpdate();
  }
  
  render() {

    this.isConnected = (JSON.parse(localStorage.getItem('current_user')) != null);

    return html`
    <link href="../../../node_modules/@material/drawer/dist/mdc.drawer.css" rel="stylesheet">
    <link href="../../../node_modules/@material/list/dist/mdc.list.css" rel="stylesheet">
    <link href="../../../src/style/bulma.min.css" rel="stylesheet">

    <!-- <script src="../../../data/product.js"></script> -->
    <style>
            @font-face {
                font-family: 'Material Icons';
                font-style: normal;
                font-weight: 400;
                src: url(https://example.com/MaterialIcons-Regular.eot); /* For IE6-8 */
                src: local('Material Icons'),
                  local('MaterialIcons-Regular'),
                  url(https://example.com/MaterialIcons-Regular.woff2) format('woff2'),
                  url(https://example.com/MaterialIcons-Regular.woff) format('woff'),
                  url(https://example.com/MaterialIcons-Regular.ttf) format('truetype');
            }

            .material-icons {
                font-family: 'Material Icons';
                font-weight: normal;
                font-style: normal;
                font-size: 24px;
                display: inline-block;
                line-height: 1;
                text-transform: none;
                letter-spacing: normal;
                word-wrap: normal;
                white-space: nowrap;
                direction: ltr;
            }

            .nav-brawer-bg--open{
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                background-color: rgb(65, 65, 65,0.7);
                z-index : 2;
            }

            .nav-brawer-bg--close{
              display:none;
            }

      </style>

      <div class="nav-brawer-bg${this.open? '--open' : '--close'}" @click=${this.toggleMenu}> </div>
      
      <aside class="mdc-drawer mdc-drawer--modal is-hidden-desktop ${this.open ? "mdc-drawer--open" : "mdc-drawer--close"}">
        <div class="mdc-drawer__header">
          <h3 class="mdc-drawer__title">Menu</h3>
        </div>
        <div class="mdc-drawer__content">
        <nav class="mdc-list">

          <a class="mdc-list-item mdc-list-item--activated" href="#" aria-current="page" @click=${this.shopEventDispach}>
            <i class="material-icons mdc-list-item__graphic" aria-hidden="true">home</i>
            <span class="mdc-list-item__text">Home</span>
          </a>

          <a class="mdc-list-item" href="#" @click=${this.shopEventDispach}>
            <i class="material-icons mdc-list-item__graphic" aria-hidden="true">account_circle</i>
            <span  class="mdc-list-item__text">${this.isConnected ? "My account" : "Connexion"}</span>
          </a>

          <a class="mdc-list-item" href="#" @click='${this.signout}' style=${this.isConnected ? "display : inherit;" : "display : none;" }>
              <i class="material-icons mdc-list-item__graphic" aria-hidden="true">directions_run</i>
              <span class="mdc-list-item__text" >Log-out</span>
          </a>

          <hr class="mdc-list-divider">
          <h6 class="mdc-list-group__subheader">Products</h6>

          ${this.categories.map(item => html`

            <a class="mdc-list-item" href="#" @click='${ this.shopEventDispach }'>
              <i class="material-icons mdc-list-item__graphic" aria-hidden="true">shopping_basket</i>
              <span class="mdc-list-item__text" >${item.toUpperCase()}</span>
            </a>

          `)}
          
        </nav>
        </div>
      </aside>`

  }


  shopEventDispach(e){
    // Will send a event to the custom galery. The pupose is to update the 
    // categories selection.
    
    var target = e.target.childNodes[3];

    let content = target.textContent;

    if(content === "My account" || content === "Connexion"){
        content = "person";        
    }

    document.dispatchEvent(new CustomEvent("cat-evnt",{
      bubbles:true,
      composed:true,
      detail: (content != 'Home') ? content : null
    }));


  }

  toggleMenu(e){
    console.log('toggle');

    document.dispatchEvent(new CustomEvent('toggle-menu', {
      bubbles: true,
      composed : true,
      detail:"toggle menu"
    }));
  }

  firstUpdated() {
    const list = MDCList.attachTo(this.shadowRoot.querySelector('.mdc-list'));
    list.wrapFocus = true;
    //const drawer = MDCDrawer.attachTo(this.shadowRoot.querySelector('.mdc-drawer'));

    document.addEventListener("toggle-menu", () => {
      this.open = !this.open;
    });
  }

}

customElements.define('nav-drawer', NavDrawer);
