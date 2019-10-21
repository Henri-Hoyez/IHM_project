import { LitElement, html, css } from 'lit-element';
import { MDCRipple } from '@material/ripple';

class MyAccount extends LitElement {

    constructor() {
        super();
    }

    firstUpdated() {
        MDCRipple.attachTo(this.shadowRoot.querySelector('.disconnection'));

        document.addEventListener('usr-evnt', (e) => {
            console.log('account update');

            setTimeout(this.requestUpdate.bind(this), 700);
        });
    }

    static get properties() {
        return {
            clientName: { type: String },
            clientFirstName: { type: String },
            clientGender: { type: String },
            clientMail: { type: String },
            clientPhone: { type: String }
        };
    }

    static get styles() {
        return css`

        section {
            font-family: 'Roboto', sans-serif;
            text-align:center;
        }

        .title1 { font-size: 1.85em; }

        .title2 { font-size: 1.5em; }

        section {
            font-weight: bold;
            width: 50%;
            max-width: 24em;
            margin: auto;
        }

        section img {
            float: left;
            border-radius: 8px;
            width: 12%;
            border: 1px dotted #999;
        }

        article div {
            width: 65%;
            margin: auto;
            margin-bottom: 0.7em;
            text-align: left;
        }

        section span:first-of-type { padding: 0 1em 0 0; }

        section span:last-of-type { padding: 0 0 0 1em; }

        `
    }


    signout() {

        UserManager.signout();

        this.requestUpdate();
    }

    render() {

        return html`
            <link rel="stylesheet" href="../../../node_modules/@material/button/dist/mdc.button.css">
            <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"> 


            <section>
                <h2 class="title1">YOUR ACCOUNT</h2>
                <h3 class="title2">Your personal information</h3><br>
                <article>
                    <img src="/src/components/account/avatar.jpg" alt="Avatar"/>
                    <div>GENDER :                 ${this.clientGender}</div>
                    <div>NAME :             ${this.clientName}</div>
                    <div>FIRSTNAME :          ${this.clientFirstName}</div>
                    <div>E-MAIL :               ${this.clientMail}</div>
                    <div>PHONE NUMBER :  ${this.clientPhone}</div>

                </article>
                <br><br>
                <div class="button-container">
                    <button @click=${this.signout} class="mdc-button mdc-button--raised disconnection">
                        <span class="mdc-button__label">Sign out</span>
                    </button>
                </div>

            </section>
            `;
    }

}

customElements.define("my-account", MyAccount);
