import { LitElement, html, css } from 'lit-element';


class FloatingActionButton extends LitElement {

    static get properties() {
        return {
            content: { type: String },
        };
    }

    constructor() {
        super();
        this.content = "+";
    }

    render() {
        return html`
            <link href="components/floating_action_button/floating_action_button.css" rel="stylesheet">
            <button>${this.content}</button>`
    }

}

customElements.define('floating-action-button', FloatingActionButton);
