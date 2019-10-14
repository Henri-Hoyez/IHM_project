import { LitElement, html, css } from 'lit-element';
import { MDCRipple } from '@material/ripple';


class ShopCart extends LitElement {


    constructor() {
        super();
        this.totalPrice = 50.50;
        this.totalQuantity = 2;
        this.orderedProducts = Object.getOwnPropertyNames();
        this.isEmpty = false;
    }

    firstUpdated() {
        MDCRipple.attachTo(this.shadowRoot.querySelector('.shop'));
        MDCRipple.attachTo(this.shadowRoot.querySelector('.valid'));
    }

    static get properties() {
        return {
            totalPrice: { type: Number },
            totalQuantity: { type: Number },
            isEmpty: { type: Boolean },
        }
    }

    static get styles() {
        return css`

        .title1 { font-size: 1.85em; }

        .title2 { font-size: 1.5em; }

        section {
            text-align: center;
        }


        table {
            margin: auto;
            border-collapse: collapse;
            border: 1px solid gray;
            min-height: 15em;
            width: 70%;
        }

        thead th, thead td, tfoot th {
            height: 50px;
            background-color: #BBB;
            color: white;
        }

        section span {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            padding: 0.4em 0 ;
            margin:50px; /* espacement entre les boutons*/
        }

        section td {
            width: 20%;
            border-top: 1px solid lightgrey;
        }

        section > a { text-decoration: underline; }

        section tbody a {
            font-weight: bold;
            color: coral;
        }

        section .supprimerArticle { margin: 0.5em 0.7em 0 0; }

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

            <section >
                <h2 id="title1">VOTRE PANIER</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Aperçu</th>
                            <th>Article</th>
                            <th>Prix unitaire</th>
                            <th>Quantité</th>
                            <th>Total</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    ${this.orderedProducts.map(product => html`
                        <tr>
                            <td><img class="visuel" src="${product.image}" alt="Visuel article"></td>
                            <td>${product.title}</td>
                            <td>${product.price} €</td>
                            <td>${product.quantity}</td>
                            <td>${product.quantity * product.price} €</td>
                            <td>
                                <input class="supprimerArticle" type="image" src="components/shop_cart/annule.jpg" width="20">
                            </td>
                        </tr>
                    `)}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colspan="3"></th>
                            <th>Total quantity<br>${this.totalQuantity}</th>
                            <th>Total price<br>${this.totalPrice} €</th>
                            <th></th>
                        </tr>
                    </tfoot>
                </table>

                <div class="button-container">
                    <button type="button" class="mdc-button shop">
                        <span class="mdc-button__label">
                        Back to shop
                        </span>
                    </button>
                    <button class="mdc-button mdc-button--raised valid">
                        <span class="mdc-button__label">
                        Validate
                        </span>
                    </button>
                </div>

            </section>



           `
    }



}

customElements.define('shop-cart', ShopCart);
