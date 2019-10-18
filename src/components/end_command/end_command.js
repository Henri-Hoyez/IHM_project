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

        this.titles = ["Thanks you for pushasing !", "You did it !", "Congratulations !"]
        this.subtitles = ["Your are amazing !", "We like your clothing taste", "Don't forget to return here when ou need some other clothes"]
        this.paths = ["congrats","valid"];
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

    render() {


        console.log('/src/components/end_command/'+ this.paths[this.getRandomNumber(this.paths.length)] + '.jpg');
        
        
        return html`
            <link rel="stylesheet" href="/node_modules/@material/button/dist/mdc.button.css">

            <section>
                <div id="form_titles">
                    <h2 class="title1">${this.titles[this.getRandomNumber(this.titles.length)]}</h2>
                    <h3 class="title2">${this.subtitles[this.getRandomNumber(this.subtitles.length)]}</h3>
                </div><br>

                <article>
                    <img src="/src/components/end_command/${this.paths[this.getRandomNumber(this.paths.length)]}.jpg" alt="Visual validation">
                    <div class="button-container">
                        <button @click=${this.returnShop} class="mdc-button mdc-button--raised next">
                            <span class="mdc-button__label">Next</span>
                        </button>
                    </div>
                </article>
            </section>

            `;
    }

}

customElements.define("end-command", EndCommand);
