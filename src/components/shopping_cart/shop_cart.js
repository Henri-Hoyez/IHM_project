import { LitElement, html, css } from 'lit-element';
import { MDCRipple } from '@material/ripple';


class ShopCart extends LitElement {

    constructor() {
        super();     
    }

    firstUpdated() {
        MDCRipple.attachTo(this.shadowRoot.querySelector('.empty'));
        MDCRipple.attachTo(this.shadowRoot.querySelector('.confirm'));
        MDCRipple.attachTo(this.shadowRoot.querySelector('.sign-in'));
        MDCRipple.attachTo(this.shadowRoot.querySelector('.shop'));

        document.addEventListener('buy-evnt', (e)=> { this.requestUpdate(); });

        document.addEventListener('cat-evnt', (e) => {this.requestUpdate(); })
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

        .title1 { font-size: 1.95em; }

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
            width: 40%;
            min-width: 20em;
            height: auto;
        }

        `
    }

    ereaseBacket(e){
        var user = JSON.parse(localStorage.getItem('current_user'));
        
        BasketManager.ereaseBasket(user);

        this.requestUpdate();
    }


    delete(e){
        var item = e.target.getAttribute('value');        
        
        BasketManager.delete(item);

        this.requestUpdate();
    }


    backToShop(e){
        document.dispatchEvent(new CustomEvent('cat-evnt', {
            bubbles:true,
            composed:true,
            detail:null
        }))
    }

    updateQuantity(e){
        var itemName = e.target.getAttribute('item');
        var quantity = e.target.value;        
        
        BasketManager.updateQuentity(itemName, quantity);
    }

    render() {
        var totalPrice = 0;   
        var totalQuantity = 0; 

        var user = JSON.parse(localStorage.getItem('current_user'));

        var orderedProducts = (user != null) ?  JSON.parse(localStorage.getItem('current_user')).basket : Array();     

        this.isEmpty = (orderedProducts.length === 0);  

        orderedProducts.forEach(product => {
            totalQuantity += product.quantity;
            totalPrice += product.quantity * product.price;
        });

        totalPrice = totalPrice.toFixed(2);

        return html`
            <link rel="stylesheet" href="../../../node_modules/@material/button/dist/mdc.button.css">
            <link rel="stylesheet" href="src/components/shopping_cart/shop_cart.css">

            <section class="${this.isEmpty ? "shop-cart--close" : "shop-cart--open"}">
                <h2 id="title1">VOTRE PANIER</h2>
                <table>
                    <thead>
                    <tr>
                        <td>Visual</td>
                        <td>Title</td>
                        <td>Price</td>
                        <td>Quantitée</td>
                        <td>Sous-total</td>
                        <td> </td>
                    </tr>

                    ${orderedProducts.map(product => html`
                        <tr>
                            <td><img class="visuel" src="${product.image}" alt="Visuel article"></td>
                            <td>${product.title}</td>
                            <td>${product.price} €</td>
                            <td> <input @click=${this.updateQuantity} item=${product.title} type='number' value=${product.quantity}> </td>
                            <td>${product.quantity * product.price} €</td>
                            <td>
                                <input @click=${this.delete} value="${product.title}" class="supprimerArticle" type="image" src="/src/components/shopping_cart/annule.jpg" width="20">
                            </td>
                        </tr>
                    `)}

                    </thead>
                    <tbody>

                    </tbody>
                    <tfoot>
                        <tr>
                            <th colspan="3"></th>
                            <th>Total quantity<br>${totalQuantity}</th>
                            <th>Total price<br>${totalPrice} €</th>
                            <th></th>
                        </tr>
                    </tfoot>
                </table>

            </section>

            <span class="button-container ">
                    <button @click=${this.ereaseBacket} type="button" class="mdc-button empty ${this.isEmpty ? "shop-cart--close" : "shop-cart--open"}">
                        <span class="mdc-button__label">Empty cart</span>
                    </button>
                    <button class="mdc-button mdc-button--raised confirm ${this.isEmpty ? "shop-cart--close" : "shop-cart--open"}">
                        <span class="mdc-button__label">Confirm</span>
                    </button>
            </span>


            <section class=${this.isEmpty ? "shop-cart--open" : "shop-cart--close"}>
                <h2 id="title1" >Your shopping cart is empty...</h2>
                <img src=src/components/shopping_cart/empty-cart.jpg>
            </section>

            <span class="button-container  ">
                    <button @click=${this.backToShop} type="button" class="mdc-button shop ${this.isEmpty ? "shop-cart--open" : "shop-cart--close"}">
                        <span class="mdc-button__label">Back to shop</span>
                    </button>

                    <button class="mdc-button mdc-button--raised sign-in ${ localStorage.getItem('current-user') != null ? "shop-cart--open" : "shop-cart--close"}">
                        <span class="mdc-button__label">
                        Sign in
                        </span>
                    </button>
            </span>
           `;
    }



}

customElements.define('shop-cart', ShopCart);
