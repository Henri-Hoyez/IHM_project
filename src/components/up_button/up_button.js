import { LitElement, html, css } from 'lit-element';


class UpButton extends LitElement {

    constructor() {
        super();
    }

    render() {
        return html`
            <link href="components/up_button/up_button.css" rel="stylesheet">
            <a href="#"> <button></button></a>`
    }

}

customElements.define('up-button', UpButton);
