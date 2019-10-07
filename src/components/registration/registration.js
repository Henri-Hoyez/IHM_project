import { LitElement, html, css } from 'lit-element';
import { MDCRadio } from '@material/radio';
import { MDCTextField } from '@material/textfield';
import { MDCRipple } from '@material/ripple';

class Registration extends LitElement {

    constructor() {
        super();
    }

    firstUpdated() {
        var radios = this.shadowRoot.querySelectorAll('.mdc-radio');
        for (var i = 0; i < radios.length; i++) {
            console.log(radios[i]);
            MDCRadio.attachTo(radios[i]);
        }

        var textFields = this.shadowRoot.querySelectorAll('.mdc-text-field');
        for (var i = 0; i < textFields.length; i++) {
            MDCTextField.attachTo(textFields[i]);
        }

        MDCRipple.attachTo(this.shadowRoot.querySelector('.cancel'));
        MDCRipple.attachTo(this.shadowRoot.querySelector('.confirm'));

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
            text-decoration: underline;
        }

        .radios_input {
            margin: auto;
            max-width: 500px;
        }

        .form_input{
          display: block;
          max-width: 500px;
          margin: 20px auto;
        }

        .button-container {
            display: flex;
            justify-content: flex-end;
            width: 200px;
            margin: auto;
          }

          .button-container button {
            margin: 5px;
        }
        `
    }

    render() {
        return html`
            <link rel="stylesheet" href="../../../node_modules/@material/radio/dist/mdc.radio.css">
            <link rel="stylesheet" href="../../../node_modules/@material/form-field/dist/mdc.form-field.css">
            <link rel="stylesheet" href="../../../node_modules/@material/textfield/dist/mdc.textfield.css">
            <link rel="stylesheet" href="../../../node_modules/@material/button/dist/mdc.button.css">

            <div id="form_titles">
                <h2 class="title1">CRÉER VOTRE COMPTE</h2>
                <h3 class="title2">Déjà un compte ? <a>Connectez-vous</a></h3>
            </div><br>

            <div class="radios_input">
                <div class="mdc-form-field">
                    <div class="mdc-radio">
                        <input class="mdc-radio__native-control" type="radio" id="radio-1" name="radios" checked>
                        <div class="mdc-radio__background">
                            <div class="mdc-radio__outer-circle"></div>
                            <div class="mdc-radio__inner-circle"></div>
                        </div>
                    </div>
                    <label for="radio-1">Miss</label>

                    <div class="mdc-radio">
                        <input class="mdc-radio__native-control" type="radio" id="radio-2" name="radios">
                        <div class="mdc-radio__background">
                            <div class="mdc-radio__outer-circle"></div>
                            <div class="mdc-radio__inner-circle"></div>
                        </div>
                    </div>
                    <label for="radio-2">Sir</label>
                </div>
            </div>

            <div class="mdc-text-field form_input">
                <input type="text" class="mdc-text-field__input" id="name-input" name="name" required>
                <label class="mdc-floating-label" for="name-input">Name</label>
                <div class="mdc-line-ripple"></div>
            </div>

            <div class="mdc-text-field form_input">
                <input type="text" class="mdc-text-field__input" id="firstname-input" name="firstname" required>
                <label class="mdc-floating-label" for="firstname-input">Firstname</label>
                <div class="mdc-line-ripple"></div>
            </div>

            <div class="mdc-text-field form_input">
                <input type="tel" class="mdc-text-field__input" id="phone-input" name="firstname">
                <label class="mdc-floating-label" for="firstname-input">Phone number</label>
                <div class="mdc-line-ripple"></div>
            </div>

            <div class="mdc-text-field form_input">
                <input type="text" class="mdc-text-field__input" id="email-input" name="email" required>
                <label class="mdc-floating-label" for="email-input">Email</label>
                <div class="mdc-line-ripple"></div>
            </div>

            <div class="mdc-text-field form_input">
                <input type="password" class="mdc-text-field__input" id="password-input" name="password" required minlength="8">
                <label class="mdc-floating-label" for="password-input">Password</label>
                <div class="mdc-line-ripple"></div>
            </div>

            <div class="mdc-text-field form_input">
                <input type="password_confirm" class="mdc-text-field__input" id="password-confirm" name="password_confirm" required minlength="8">
                <label class="mdc-floating-label" for="password-confirm">Confirm password</label>
                <div class="mdc-line-ripple"></div>
            </div>

            <div class="button-container">
                <button type="button" class="mdc-button cancel">
                    <span class="mdc-button__label">
                    Cancel
                    </span>
                </button>
                <button class="mdc-button mdc-button--raised confirm">
                    <span class="mdc-button__label">
                    Confirm
                    </span>
                </button>
            </div>


            `;
    }

}




customElements.define("registration-form", Registration);
