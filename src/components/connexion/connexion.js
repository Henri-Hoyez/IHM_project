import { LitElement, html, css } from 'lit-element';
import { MDCTextField } from '@material/textfield';
import { MDCRipple } from '@material/ripple';

class Connexion extends LitElement {

    constructor() {
        super();
    }

    firstUpdated() {

        MDCTextField.attachTo(this.shadowRoot.querySelector('.email'));
        MDCTextField.attachTo(this.shadowRoot.querySelector('.password'));
        MDCRipple.attachTo(this.shadowRoot.querySelector('.cancel'));
        MDCRipple.attachTo(this.shadowRoot.querySelector('.next'));

        document.addEventListener('usr-evnt', (e) => {
            this.requestUpdate();

        });

    }

    static get styles() {
        return css`

        :root {
            --mdc-theme-primary: #c62828;
            --mdc-theme-secondary: #ffca28;
            --mdc-theme-on-primary: #ffffff;
            --mdc-theme-on-secondary: #6d4c41;
            --mdc-ripple-surface--primary: #c62828;

        }

        .mdc-text-field--focused .mdc-text-field__input:required ~ .mdc-floating-label::after,
        .mdc-text-field--focused .mdc-text-field__input:required ~ .mdc-notched-outline .mdc-floating-label::after {
                color:  #000;
        }

        .mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label {
            color: #000;
        }

        .mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input:required ~ .mdc-floating-label::after,
        .mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input:required ~ .mdc-notched-outline .mdc-floating-label::after {
            color: #ffca28;
            /* @alternate */
            color: var(--mdc-theme-error, #b00020);
        }

        .mdc-text-field--invalid.mdc-text-field--with-trailing-icon:not(.mdc-text-field--with-leading-icon):not(.mdc-text-field--disabled) .mdc-text-field__icon {
            color: #b00020;
            /* @alternate */
            color: var(--mdc-theme-error, #b00020);
        }


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
            justify-content: space-between;
            max-width: 300px;
            margin: auto;
          }

          .button-container button {
            margin: 3px;
        }

        `
    }

    category_event(e) {
        document.dispatchEvent(new CustomEvent('cat-evnt', {
            bubbles: true,
            composed: true,
            detail: 'connection'
        }));

    }

    makeErrMessage(message) {
        let selector = this.shadowRoot.querySelector('.err-display')
        selector.innerHTML = message;
        selector.style.color = 'red';
        selector.style.display = 'inherit';
    }

    cancelConnexion() {
        document.dispatchEvent(new CustomEvent('cat-evnt', {
            bubbles: true,
            composed: true,
            detail: null
        }));
    }


    makeConnection() {

        var mail = this.shadowRoot.getElementById('email-input');
        var password = this.shadowRoot.getElementById('password-input');

        var user = UserManager.findUserByEmail(mail.value);


        if (user === null) {
            this.makeErrMessage("User not found, did you sign-up ?");
            return;
        }

        if (user.password === password.value) {
            UserManager.connectUser(user);
        } else {
            this.makeErrMessage("Username or password are incorect. Please try again.");
        }

        mail.value = "";
        password.value = "";
        this.makeErrMessage('');

    }


    accountPageCall() {
        document.dispatchEvent(new CustomEvent('cat-evnt', {
            bubbles: true,
            composed: true,
            detail: "account"
        }));
    }

    render() {

        return html`
            <link rel="stylesheet" href="../../../node_modules/@material/textfield/dist/mdc.textfield.css">
            <link rel="stylesheet" href="../../../node_modules/@material/button/dist/mdc.button.css">
            <script src="../../../node_modules/@material/textfield/dist/mdc.textfield.js"></script>

            <div id="form_titles">
                <h2 class="title1">Sign into to your acount</h2>
                <h3 style="display : none; ", class="err-display"></h3>
                <h3 class="title2">No Neo-clothes account ? <a @click=${this.category_event} >sign up</a></h3>
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
                <button @click=${this.cancelConnexion} type="button" class="mdc-button cancel">
                    <span class="mdc-button__label">
                    Cancel
                    </span>
                </button>
                <button @click=${this.makeConnection} class="mdc-button mdc-button--raised next">
                    <span class="mdc-button__label">
                    Next
                    </span>
                </button>
            </div>
            `;
    }

}

customElements.define("connexion-form", Connexion);
