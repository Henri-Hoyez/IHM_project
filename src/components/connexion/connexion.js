import { LitElement, html, css } from 'lit-element';
import { MDCTextField } from '@material/textfield';
import { MDCRipple } from '@material/ripple';

class Connexion extends LitElement {

    constructor() {
        super();
    }

    firstUpdated() {
        // var textFields = this.shadowRoot.querySelectorAll('.mdc-text-field');

        // for (var i = 0; i < textFields.length; i++) {
        //     MDCTextField.attachTo([i]);
        // }
        MDCTextField.attachTo(this.shadowRoot.querySelector('.email'));
        MDCTextField.attachTo(this.shadowRoot.querySelector('.password'));
        MDCRipple.attachTo(this.shadowRoot.querySelector('.cancel'));
        MDCRipple.attachTo(this.shadowRoot.querySelector('.next'));

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
            <link rel="stylesheet" href="../../../node_modules/@material/textfield/dist/mdc.textfield.css">
            <link rel="stylesheet" href="../../../node_modules/@material/button/dist/mdc.button.css">
            <script src="../../../node_modules/@material/textfield/dist/mdc.textfield.js"></script>
<!--
            <div class="mdc-text-field">
                <label class="mdc-floating-label" for="my-text-field"> <slot> Hint text </slot> </label>
                <input type="text" id="my-text-field" class="mdc-text-field__input">
                <div class="mdc-line-ripple"></div>
            </div> -->

            <!-- <div class="mdc-text-field" data-children-count="1">
                <input class="mdc-text-field__input" id="text-field-hero-input">
                <div class="mdc-line-ripple"></div>
                <label for="text-field-hero-input" class="mdc-floating-label">Name</label>
            </div>

            <div class="mdc-text-field" data-children-count="1">
                <input class="mdc-text-field__input" id="text-field-hero-input">
                <div class="mdc-line-ripple"></div>
                <label for="text-field-hero-input" class="mdc-floating-label">Name</label>
            </div> -->

            <!-- Not required
            <div class="mdc-text-field username">
                <input type="text" class="mdc-text-field__input" id="username-input" name="username">
                <label class="mdc-floating-label" for="username-input">Username</label>
                <div class="mdc-line-ripple"></div>
            </div>
            <div class="mdc-text-field password">
                <input type="password" class="mdc-text-field__input" id="password-input" name="password">
                <label class="mdc-floating-label" for="password-input">Password</label>
                <div class="mdc-line-ripple"></div>
            </div> -->

            <div id="form_titles">
                <h2 class="title1">CONNECTEZ-VOUS À VOTRE COMPTE</h2>
                <h3 class="title2">Pas de compte ? <a>Créez-en un</a></h3>
            </div>

            <div class="mdc-text-field email">
                <input type="text" class="mdc-text-field__input" id="email-input" name="email" required>
                <label class="mdc-floating-label" for="email-input">Email</label>
                <div class="mdc-line-ripple"></div>
            </div>

            <div class="mdc-text-field password">
                <input type="password" class="mdc-text-field__input" id="password-input" name="password" required minlength="8">
                <label class="mdc-floating-label" for="password-input">Password</label>
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

customElements.define("connexion-form", Connexion);