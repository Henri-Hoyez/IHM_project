import { LitElement, html, css } from 'lit-element';
import { MDCRipple } from '@material/ripple';

class EndCommand extends LitElement {


    firstUpdated() {
        MDCRipple.attachTo(this.shadowRoot.querySelector('.cancel'));
        MDCRipple.attachTo(this.shadowRoot.querySelector('.next'));

        document.addEventListener('buy-evnt', (e)=> { this.requestUpdate(); });
    }


    constructor() {
        super();

        this.titles = ["Do you want to confirm", "Thanks you"];
        this.subtitles = ["Click on the confirm button", "We looking forward to see you again"];
        this.paths = ["congrats","valid"];
        this.index = 0;
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

        .congrat-button-container{
            display: block;
            width: 150px;
            margin: auto;
        }

        .button-container button {
            margin: 5px;
        }
        `
    }

    getRandomNumber(max){
        //Get a value between 0 and "max"
        return Math.floor(Math.random() * max);
    }

    returnShop(){
        document.dispatchEvent(new CustomEvent('cat-evnt', {
            bubbles : true,
            composed : true,
            detail: null
        }));
    }

    confirmEvent(e){
        var user = JSON.parse(localStorage.getItem('current_user'));
        BasketManager.ereaseBasket(user);

        this.displayCongrat();
    }

    displayCongrat(){
        this.index = 1;
        this.requestUpdate();
    }

    resetView(){
        this.index = 0;
        this.requestUpdate();
    }

    render() {        
        
        return html`
            <link rel="stylesheet" href="/node_modules/@material/button/dist/mdc.button.css">

            <section>
                <div id="form_titles">
                    <h2 class="title1">${this.titles[this.index]}</h2>
                    <h3 class="title2">${this.subtitles[this.index]}</h3>
                </div><br>

                <article>
                    <img src="/src/components/end_command/${this.paths[this.index]}.jpg" alt="Visual validation">
                    <div class="button-container" style=${this.index == 0 ? "" : "display : none;"} >

                        <button @click=${this.returnShop} type="button" class="mdc-button cancel    ">
                            <span class="mdc-button__label">Cancel</span>
                        </button>

                        <button @click=${this.confirmEvent} class="mdc-button mdc-button--raised next">
                            <span class="mdc-button__label">Next</span>
                        </button>
                    </div>

                    <div class="congrat-button-container" style=${this.index == 1 ? "" : "display : none;"} >
                        <button @click=${this.confirmEvent} class="mdc-button mdc-button--raised next">
                            <span class="mdc-button__label">Return shopping</span>
                        </button>
                    </div>

                </article>
            </section>

            `;
    }

}

customElements.define("end-command", EndCommand);
