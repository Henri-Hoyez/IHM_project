import { LitElement, css, html } from "lit-element";
import { MDCTopAppBar } from '@material/top-app-bar';


class TopBar extends LitElement {
    static get properties() {
        return {
            isConnected: { type: Boolean },
            categories: { type: Array }
        };
    }
    static get styles() {
        return css`:host
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
        `
    }
    constructor() {
        super();
        this.isConnected = false;
        this.categories = Object.getOwnPropertyNames(catalog);
    }
    firstUpdated() {


    }
    render() {
        return html`
        <link href="../../../node_modules/@material/top-app-bar/dist/mdc.top-app-bar.css" rel="stylesheet">
        <link href="../../../node_modules/@material/icon-button/dist/mdc.icon-button.css" rel="stylesheet">
        <link href="components/top_bar/top-bar.css" rel="stylesheet">
        <link href="style/bulma.min.css" rel="stylesheet">

        <header class="mdc-top-app-bar  mdc-top-app-bar">
            <div class="mdc-top-app-bar__row">
                <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start is-hidden-desktop">
                    <button class="mdc-icon-button material-icons mdc-top-app-bar__navigation-icon--unbounded" @click=${this.menu_event}>menu</button>

                </section>
                <div id= "icon-header">
                    <a id="icon-header-title" href="#">
                        <span  class="mdc-top-app-bar__title">Neo clothes</span>
                    </a>
                </div>

                <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end fields">
                    <span id="list_menu">
                        <a class=" mdc-top-app-bar__action-item is-hidden-touch mdc-top-app-bar__title" href="#"><span class="menu_item" id="nav_indicator">Home</span><!--déplacer id vers page consultée en js-->
                        </a>

                        ${this.categories.map(item => html`
                            <a class="mdc-list-item mdc-top-app-bar__title" href="#">
                            <span class="menu_item mdc-top-app-bar__action-item is-hidden-touch">${item.replace(item[0], item[0].toUpperCase())}</span>
                            </a>
                        `)}
                    </span>

                    <button class="mdc-icon-button material-icons mdc-top-app-bar__action-item--unbounded"  @click=${this.search_event}  aria-label="Search">search</button>
                    <button class="mdc-icon-button material-icons mdc-top-app-bar__action-item--unbounded" aria-label="Profile">person</button>
                    <button class="mdc-icon-button material-icons mdc-top-app-bar__action-item--unbounded" aria-label="Shopping cart">shopping_cart</button>
                </section>
            </div>
        </header>
        <div id="under-app-bar"></div>
        `
    }
    menu_event() {
        var topAppBarElement = this.shadowRoot.querySelector(".mdc-top-app-bar");
        const topAppBar = new MDCTopAppBar(topAppBarElement);

        document.dispatchEvent(new CustomEvent("toggle-menu",{
            bubbles:true,
            composed:true,
            detail:"toggle menu"
        }));

    }

    search_event(){
        document.dispatchEvent(new CustomEvent("search-bar",{
            bubbles:true,
            composed:true,
            detail:"search bar"
        }));
    }
}
customElements.define("top-bar", TopBar);
