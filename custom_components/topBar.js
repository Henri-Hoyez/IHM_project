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
        var topAppBarElement = this.shadowRoot.querySelector(".mdc-top-app-bar");
        console.log(topAppBarElement);
        const topAppBar = new MDCTopAppBar(topAppBarElement);
    }
    render(){
        return html`
        <style>
            @import 'mdc.top-app-bar.css';
            @import 'mdc.icon-button.css';
        </style>
        
        <header class="mdc-top-app-bar">
            <div class="mdc-top-app-bar__row">
                <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
                    <button class="mdc-icon-button material-icons mdc-top-app-bar__navigation-icon--unbounded">menu</button>
                    <img id=icon src="web_icon.png">
                    <span class="mdc-top-app-bar__title">Little fox</span> 
                </section>
                <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end">
                    <button class="mdc-icon-button material-icons mdc-top-app-bar__action-item--unbounded" aria-label="Profile">person</button>
                    <button class="mdc-icon-button material-icons mdc-top-app-bar__action-item--unbounded" aria-label="Shopping cart">shopping_cart</button>
                </section>
            </div>
        </header>
        `
    }
}
customElements.define("top-bar",TopBar);