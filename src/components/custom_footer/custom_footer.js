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
            font-family: 'Roboto', sans-serif;
            font-weight: bold;
            position: relative;
            left: 0;
            bottom: 0;
            width: 100%;
            background-color: #c62828;
            color: white;
            text-align: center;
            box-shadow: 0 -2px 4px rgba(0,0,0,.5);
            padding-top:15px;
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
        `
    }

    render() {
        return html`
            <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"> 
            <div class= ${this.hidden ?  "footer--hidden": ""} >
                <span>©2019 — Neo Clothes — Credits</span><br>
                <span>Contact : <em><a href="mailto:contact@neo-clothes.com">contact@neo-clothes.com</a></em></span><br>
                &nbsp;
            </div>`
    }

}

customElements.define('custom-footer', CustomFooter);
