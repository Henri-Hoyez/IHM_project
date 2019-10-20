import { LitElement, html, css } from 'lit-element';

class CustomFooter extends LitElement {

    constructor() {
        super();
        this.hidden = false;
    }

    firstUpdated(){
        document.addEventListener('update-detail-view', (e) => {
            this.hidden = !this.hidden;
        });
    }

    static get styles() {
        return css`

        div {
            text-align: center;
            font-weight: bold;
            margin-top: 50px;
            clear: both;
            position: relative;
            height: 100px;
            z-index:0;
        }

        .footer--hidden{
            display : none;
        }


        a {
            color: black;
            text-decoration: underline;
            cursor: pointer;
            font-style: italic;
        }

        hr {
            width: 70%;
        }
        `
    }

    render() {
        return html`
            <div class= ${this.hidden ?  "footer--hidden": ""} >
                <br><hr><br>
                <span>©2019 — Neo Clothes — Crédits</span><br>
                <span>Contact : <em><a href="mailto:contact@neo-clothes.com">contact@neo-clothes.com</a></em></span><br>
                &nbsp;
            </div>`
    }

}

customElements.define('custom-footer', CustomFooter);
