import {LitElement, css,html} from "lit-element";
import {MDCTopAppBar} from '@material/top-app-bar';


class TopBar extends LitElement{
    static get properties(){
        return {

        };
    }
    static get styles(){
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
    constructor(){
        super();
    }
    firstUpdated(){
        
        
    }
    render(){
        return html`
        <!--<style>
            @import 'components/top_bar/mdc.top-app-bar.css';
            @import 'components/top_bar/mdc.icon-button.css';
            @import 'components/top_bar/top-bar.css';
            @import 'style/bulma.min.css';
        </style>-->
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
                        <span  class="mdc-top-app-bar__title">Little fox</span>
                    </a>
                </div>
                <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end">
                    <button class="mdc-icon-button material-icons mdc-top-app-bar__action-item--unbounded" aria-label="Profile">person</button>
                    <button class="mdc-icon-button material-icons mdc-top-app-bar__action-item--unbounded" aria-label="Shopping cart">shopping_cart</button>
                </section>
            </div>
        </header>
        `
    }
    menu_event(){
        var topAppBarElement = this.shadowRoot.querySelector(".mdc-top-app-bar");
        const topAppBar = new MDCTopAppBar(topAppBarElement);
        console.log("aaaa")
        
        document.dispatchEvent(new CustomEvent("toggle-menu",{
            bubbles:true,
            composed:true,
            detail:"toggle menu"
        }));
        console.log("toggle send")

    }
}
customElements.define("top-bar",TopBar);