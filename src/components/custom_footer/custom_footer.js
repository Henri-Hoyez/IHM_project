import { LitElement, html, css } from 'lit-element';


class CustomFooter extends LitElement {

    constructor() {
        super();
    }

    render() {
        return html`
            <link href="components/custom_footer/custom_footer.css" rel="stylesheet">
            <footer>
                <br><hr><br>
                <span>©2019 — Leaves and clouds — Crédits</span><br>
                <span>Contact : <em><a href="mailto:contact@dreamer.fr">contact@leaves-clouds.com</a></em></span><br>
                &nbsp;
            </footer>`
    }

}

customElements.define('custom-footer', CustomFooter);
