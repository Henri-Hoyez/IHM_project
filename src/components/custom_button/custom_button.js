import { LitElement, html, css } from 'lit-element';
import { MDCRipple } from '@material/ripple';


class CustomButton extends LitElement {

    constructor() {
        super();
    }

    render() {
        return html`
            <link rel="stylesheet" href="../../../node_modules/@material/button/dist/mdc.button.css">

            <button class="mdc-button mdc-button--outlined"><slot>Confirm</slot></button>`
    }

    firstUpdated() {
        MDCRipple.attachTo(this.shadowRoot.querySelector('.mdc-button'));
    }

}

customElements.define('custom-button', CustomButton);
