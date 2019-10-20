import { LitElement, css, html } from "lit-element";
import { MDCTopAppBar } from '@material/top-app-bar';


class TopBar extends LitElement {
    static get properties() {
        return {
            isConnected: { type: Boolean },
            categories: { type: Array }
        };
    }

    firstUpdated(){
        document.addEventListener('usr-evnt', (e)=>{
            this.requestUpdate();
        });
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
        this.categories.unshift("Home")
        this.selected_cathegory = 'Home';
    }

    returnHome(){
        document.dispatchEvent(new CustomEvent('cat-evnt', {
            bubbles : true,
            composed : true,
            detail: null
        }));
    }

    render() {

        var isConnected = JSON.parse( localStorage.getItem('current_user') ) !== null;

        return html`
        <link href="../../../node_modules/@material/top-app-bar/dist/mdc.top-app-bar.css" rel="stylesheet">
        <link href="../../../node_modules/@material/icon-button/dist/mdc.icon-button.css" rel="stylesheet">
        <link href="../../../src/components/top_bar/top-bar.css" rel="stylesheet">
        <link href="../../../src/style/bulma.min.css" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">

        <header class="mdc-top-app-bar">
            <div class="mdc-top-app-bar__row">
                <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start mdc-drawer">
                    <button class="mdc-icon-button material-icons mdc-top-app-bar__navigation-icon--unbounded" @click=${this.menu_event}>menu</button>

                </section>
                <span id= "icon-header">
                    <a id="icon-header-title" @click=${this.returnHome} href="#">
                        <img src="src/components/top_bar/white_logo.png"/>
                    </a>
                </span>

                <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end fields">
                    <span id="list_menu">
                        ${this.categories.map(item => html`
                            <a class="mdc-list-item mdc-font is-hidden-touch" href="#">
                            <span @click="${this.category_event}" class="menu_item mdc-top-app-bar__action-item" class="${this.selected_cathegory == item.replace(item[0], item[0].toUpperCase()) ? "nav_indicator" : "not_selected"}">${item.replace(item[0], item[0].toUpperCase())}</span>
                            </a>
                        `)}
                    </span>
                    <button class="mdc-icon-button material-icons mdc-top-app-bar__action-item--unbounded"  @click=${this.search_event}  aria-label="Search">search</button>
                    <button class="mdc-icon-button material-icons mdc-top-app-bar__action-item--unbounded" @click=${this.category_event} aria-label="Profile">person</button>
                    <button class="mdc-icon-button material-icons mdc-top-app-bar__action-item--unbounded" @click=${this.category_event} aria-label="Shopping cart">shopping_cart</button>
                    <button class="mdc-icon-button material-icons mdc-top-app-bar__action-item--unbounded" style=${isConnected ? "display : inherit;" : "display : none;" }  @click=${this.signout} aria-label="Shopping cart">directions_run</button>
                </section>
            </div>
        </header>
        <div id="under-app-bar"></div>
        `
    }


    signout(){
        UserManager.signout();
    }

    category_event(e){
        let text_content = e.target.textContent;

        this.selected_cathegory = text_content;
        
        document.dispatchEvent(new CustomEvent("cat-evnt",{
            bubbles:true,
            composed:true,
            detail: (text_content != 'Home') ? text_content : null
        }));

        this.requestUpdate();
    }


    menu_event() {
        var topAppBarElement = this.shadowRoot.querySelector(".mdc-top-app-bar");
        const topAppBar = new MDCTopAppBar(topAppBarElement);

        document.dispatchEvent(new CustomEvent("toggle-menu", {
            bubbles: true,
            composed: true,
            detail: "toggle menu"
        }));

    }

    search_event() {
        document.dispatchEvent(new CustomEvent("search-bar", {
            bubbles: true,
            composed: true,
            detail: "search bar"
        }));
    }
}
customElements.define("top-bar", TopBar);
