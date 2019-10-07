import { LitElement, html } from 'lit-element';
import { MDCTextField } from '@material/textfield'


class MyTextField extends LitElement {

    constructor() {
        super();
    }

    firstUpdated() {
        MDCTextField.attachTo(this.shadowRoot.querySelector('.mdc-text-field'));
    }

    render() {
        return html`
            <link rel="stylesheet" href="../../../node_modules/@material/textfield/dist/mdc.textfield.css">
            <script src="../../../node_modules/@material/textfield/dist/mdc.textfield.js"></script>

            <div class="mdc-text-field">
                <label class="mdc-floating-label" for="my-text-field"> <slot> Hint text </slot> </label>
                <input type="text" id="my-text-field" class="mdc-text-field__input">
            <div class="mdc-line-ripple"></div>
        </div>`;
    }

}

customElements.define("my-textfield", MyTextField);
