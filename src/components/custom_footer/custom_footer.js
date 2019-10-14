import { LitElement, html, css } from 'lit-element';

class CustomFooter extends LitElement {

    constructor() {
        super();
    }

    static get styles() {
        return css`

        footer {
            text-align: center;
            font-weight: bold;
            margin-top: 50px;
            clear: both;
            position: relative;
            height: 100px;
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
            <footer>
                <br><hr><br>
                <span>©2019 — Neo Clothes — Crédits</span><br>
                <span>Contact : <em><a href="mailto:contact@neo-clothes.com">contact@neo-clothes.com</a></em></span><br>
                &nbsp;
            </footer>`
    }

}

customElements.define('custom-footer', CustomFooter);
