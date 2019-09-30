import { LitElement, html, css } from 'lit-element';
//import { MDCDrawer } from "@material/drawer";
import { MDCList } from "@material/list";


class NavDrawer extends LitElement {

  static get properties() {
    return {
      username: { type: String },
      productTypes: { type: Array },
      open:{type:Boolean}
    };
  }
  static get styles(){
    return css`:host
      .mdc-drawer{
        margin-top:64px;
      }
    `
  }

  constructor() {
    super();
    this.productTypes = ["T-shirts", "Outerwear"];
    this.open = false;
  }

  render() {
    return html`
    <link href="../../../node_modules/@material/drawer/dist/mdc.drawer.css" rel="stylesheet">
    <link href="../../../node_modules/@material/list/dist/mdc.list.css" rel="stylesheet">
    <link href="style/bulma.min.css" rel="stylesheet">

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
            </style>

      <aside class="mdc-drawer mdc-drawer--modal is-hidden-desktop ${this.open?"mdc-drawer--open":""}">
        <div class="mdc-drawer__header">
          <h3 class="mdc-drawer__title">Mail</h3>
          <h6 class="mdc-drawer__subtitle">email@material.io</h6>
        </div>
        <div class="mdc-drawer__content">
        <nav class="mdc-list">

          <a class="mdc-list-item mdc-list-item--activated" href="#" aria-current="page">
            <i class="material-icons mdc-list-item__graphic" aria-hidden="true">inbox</i>
            <span class="mdc-list-item__text">Inbox</span>
          </a>

          <a class="mdc-list-item" href="#">
            <i class="material-icons mdc-list-item__graphic" aria-hidden="true">star</i>
            <span class="mdc-list-item__text">Star</span>
          </a>

          <a class="mdc-list-item" href="#">
            <i class="material-icons mdc-list-item__graphic" aria-hidden="true">send</i>
            <span class="mdc-list-item__text">Sent Mail</span>
          </a>

          <a class="mdc-list-item" href="#">
            <i class="material-icons mdc-list-item__graphic" aria-hidden="true">drafts</i>
            <span class="mdc-list-item__text">Drafts</span>
          </a>

          <hr class="mdc-list-divider">
          <h6 class="mdc-list-group__subheader">Labels</h6>

          <a class="mdc-list-item" href="#">
            <i class="material-icons mdc-list-item__graphic" aria-hidden="true">bookmark</i>
            <span class="mdc-list-item__text">Family</span>
          </a>

          <a class="mdc-list-item" href="#">
            <i class="material-icons mdc-list-item__graphic" aria-hidden="true">bookmark</i>
            <span class="mdc-list-item__text">Friends</span>
          </a>

          <a class="mdc-list-item" href="#">
            <i class="material-icons mdc-list-item__graphic" aria-hidden="true">bookmark</i>
            <span class="mdc-list-item__text">Work</span>
          </a>

          <hr class="mdc-list-divider">
          <h6 class="mdc-list-group__subheader">Labels</h6>

          <a class="mdc-list-item" href="#">
            <i class="material-icons mdc-list-item__graphic" aria-hidden="true">check_box</i>
            <span class="mdc-list-item__text">Settings</span>
          </a>

        </nav>
        </div>
      </aside>`

  }

  firstUpdated() {
    const list = MDCList.attachTo(this.shadowRoot.querySelector('.mdc-list'));
    list.wrapFocus = true;
    
    document.addEventListener("toggle-menu",()=>{
      this.open = !this.open;
      console.log("toggle")
    });
  }

}

customElements.define('nav-drawer', NavDrawer);
