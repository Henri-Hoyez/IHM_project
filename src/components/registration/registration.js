import { LitElement, html, css } from 'lit-element';
import { MDCFormField } from '@material/form-field';
import { MDCRadio } from '@material/radio';
import { MDCTextField } from '@material/textfield';

class Registration extends LitElement {

    constructor() {
        super();
    }

    firstUpdated() {
        const radio = new MDCRadio(document.querySelector('.mdc-radio'));



        const formField = new MDCFormField(document.querySelector('.mdc-form-field'));
        formField.input = radio;

        MDCTextField.attachTo(this.shadowRoot.querySelector('.firstname'));
        MDCTextField.attachTo(this.shadowRoot.querySelector('.name'));
        // MDCTextField.attachTo(this.shadowRoot.querySelector('.cancel'));
        // MDCTextField.attachTo(this.shadowRoot.querySelector('.next'));

    }

    static get styles() {
        return css`

        #form_titles {
            text-align:center;
        }

        .title1 { font-size: 1.5em; }

        .title2 { font-size: 1em; }

        a {
            cursor: pointer;
            text-decoration: none;
        }

        .email,.password {
          display: block;
          max-width: 300px;
          margin: 20px auto;
        }

        .button-container {
            display: flex;
            justify-content: flex-end;
            width: 300px;
            margin: auto;
          }

          .button-container button {
            margin: 3px;
        }
        `
    }

    render() {
        return html`
            <link rel="stylesheet" href="../../../node_modules/@material/radio/dist/mdc.radio.css">
            <link rel="stylesheet" href="../../../node_modules/@material/form-field/dist/mdc.form-field.css">

            <link rel="stylesheet" href="../../../node_modules/@material/textfield/dist/mdc.textfield.css">
            <link rel="stylesheet" href="../../../node_modules/@material/button/dist/mdc.button.css">
            <script src="../../../node_modules/@material/textfield/dist/mdc.textfield.js"></script>


            <div id="form_titles">
                <h2 class="title1">CRÉER VOTRE COMPTE</h2>
                <h3 class="title2">Déjà un compte ? <a>Connectez-vous</a></h3>
            </div>

            <div class="mdc-form-field">
                <div class="mdc-radio">
                    <input class="mdc-radio__native-control" type="radio" id="radio-1" name="radios" checked>
                    <div class="mdc-radio__background">
                    <div class="mdc-radio__outer-circle"></div>
                    <div class="mdc-radio__inner-circle"></div>
                </div>
            </div>
            <label for="radio-1">M</label>

            <div class="mdc-radio">
                    <input class="mdc-radio__native-control" type="radio" id="radio-2" name="radios" checked>
                    <div class="mdc-radio__background">
                    <div class="mdc-radio__outer-circle"></div>
                    <div class="mdc-radio__inner-circle"></div>
                    </div>
            </div>
                <label for="radio-2">MME</label>
            </div>


            <div class="mdc-text-field name">
                <input type="text" class="mdc-text-field__input" id="name-input" name="name" required>
                <label class="mdc-floating-label" for="name-input">Name</label>
                <div class="mdc-line-ripple"></div>
            </div>

            <div class="mdc-text-field password">
                <input type="text" class="mdc-text-field__input" id="firstname-input" name="firstname" required>
                <label class="mdc-floating-label" for="firstname-input">Firstname</label>
                <div class="mdc-line-ripple"></div>
            </div>

            <div class="button-container">
                <button type="button" class="mdc-button cancel">
                    <span class="mdc-button__label">
                    Cancel
                    </span>
                </button>
                <button class="mdc-button mdc-button--raised next">
                    <span class="mdc-button__label">
                    Next
                    </span>
                </button>
            </div>


            `;
    }

}




customElements.define("registration-form", Registration);
