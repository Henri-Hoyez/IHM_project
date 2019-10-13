import { LitElement, html, css } from 'lit-element';
import { MDCRipple } from '@material/ripple';

class EndCommand extends LitElement {


    firstUpdated() {
        MDCRipple.attachTo(this.shadowRoot.querySelector('.cancel'));
        MDCRipple.attachTo(this.shadowRoot.querySelector('.next'));
    }

    static get properties() {
        return {
            title: { type: String },
            subtitle: { type: String },
            image_path: { type: String }
        }
    }

    constructor() {
        super();
    }

    static get styles() {
        return css`

        #form_titles {
            text-align:center;
        }

        section article {
            font-weight: bold;
            width: 50%;
            margin: auto;
            text-align: right;
        }

        img {
            display: block;
            margin: auto;
            margin-bottom: 2em;
            max-width:100%;
            height: auto;
        }

        section span {
            display: flex;
            justify-content: space-around;
            padding: 0.4em 0;
        }

        .title1 { font-size: 1.85em; }

        .title2 { font-size: 1.5em; }

        .button-container {
            display: flex;
            justify-content: space-between;
            max-width: 350px;
            margin: auto;
          }

          .button-container button {
            margin: 5px;
        }
        `
    }

    render() {
        return html`
            <link rel="stylesheet" href="../../../node_modules/@material/button/dist/mdc.button.css">

            <section>
                <div id="form_titles">
                    <h2 class="title1">${this.title}</h2>
                    <h3 class="title2">${this.subtitle}</h3>
                </div><br>

                <article>
                    <img src=${this.image_path} alt="Visual validation">
                    <div class="button-container">
                        <button type="button" class="mdc-button cancel">
                            <span class="mdc-button__label">Cancel</span>
                        </button>
                        <button class="mdc-button mdc-button--raised next">
                            <span class="mdc-button__label">Next</span>
                        </button>
                    </div>
                </article>
            </section>

            `;
    }

}

customElements.define("end-command", EndCommand);
