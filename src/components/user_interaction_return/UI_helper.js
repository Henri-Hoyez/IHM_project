import { LitElement, html, css } from 'lit-element';


class UiHelper extends LitElement{

    constructor(){
        super();
        this.message = "Lorem ipsum";
        this.destroyed = false;
    }

    static get properties() {
        return {
          message : {type: String}
        };
    }

    static get styles(){
        return css`
            div{
                font-family: 'Roboto', sans-serif;
            }
        `;
    }

    firstUpdated(){
        this.shadowRoot.querySelector('.container--closed').setAttribute('class', 'container--opened');

        setTimeout(this.closeCard.bind(this), 2000);
    }

    closeCard(){
        var container = this.shadowRoot.querySelector('.container--opened');

        container.setAttribute('class', 'container--closed');

        setTimeout(this.detroy.bind(this), 500);
    }

    detroy(){
        this.shadowRoot.querySelector('.container--closed').remove();

        this.destroyed = true;
    }

    render(){
        return html`
            <link rel="stylesheet" href="../../../src/style/ui_helper.css">
            <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">

            <div class="container--closed"> 
                <p class="message"> ${this.message} </p>

            </div>
            `;

    }


}
customElements.define("ui-helper", UiHelper);