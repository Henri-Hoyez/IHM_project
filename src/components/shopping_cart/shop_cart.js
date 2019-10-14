import { LitElement, html, css } from 'lit-element';
import { MDCRipple } from '@material/ripple';


class ShopCart extends LitElement {


    constructor() {
        super();
        this.totalPrice = 50.50;
        this.totalQuantity = 2;
        // this.orderedProducts = Object.getOwnPropertyNames();
        this.isEmpty = true;
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

        img {
            display: block;
            margin: auto;
            margin-bottom: 2em;
            max-width:100%;
            height: auto;
        }



        `
    }

    render() {
        return html`
            <link rel="stylesheet" href="../../../node_modules/@material/button/dist/mdc.button.css">
            <link rel="stylesheet" href="src/components/shopping_cart/shop_cart.css">

            <section class="${this.isEmpty ? "shop-cart--close" : "shop-cart--open"}">
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

            </section>

            <span class="button-container ">
                    <button type="button" class="mdc-button shop ${this.isEmpty ? "shop-cart--close" : "shop-cart--open"}">
                        <span class="mdc-button__label">Cancel</span>
                    </button>
                    <button class="mdc-button mdc-button--raised valid ${this.isEmpty ? "shop-cart--close" : "shop-cart--open"}">
                        <span class="mdc-button__label">
                        Validate
                        </span>
                    </button>
            </span>


            <section>
                <h2 id="title1 ${this.isEmpty ? "shop-cart--open" : "shop-cart--close"}">Your shopping cart is empty...</h2>
                <img src=src/components/shopping_cart/empty-cart.jpg>
            </section>

            <span class="button-container ">
                    <button type="button" class="mdc-button shop ${this.isEmpty ? "shop-cart--open" : "shop-cart--close"}">
                        <span class="mdc-button__label">Back to shop</span>
                    </button>
                    <button class="mdc-button mdc-button--raised valid ${this.isEmpty ? "shop-cart--open" : "shop-cart--close"}">
                        <span class="mdc-button__label">
                        Sign in
                        </span>
                    </button>
            </span>

           `
    }



}

customElements.define('shop-cart', ShopCart);
