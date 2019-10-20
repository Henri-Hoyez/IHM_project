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

        var genderConverter = {
            Female : "Ladies",
            Man : "Men"
        }

        var user = JSON.parse(localStorage.getItem("current_user"));

        document.dispatchEvent(new CustomEvent('cat-evnt', {
            bubbles:true,
            composed:true,
            detail: genderConverter[user.gender]
        }));
    }

    updateQuantity(e){

        
        var itemName = e.target.__item_name;
        var quantity  = e.target.__value       
        
        BasketManager.updateQuentity(itemName, quantity);

        this.requestUpdate();
    }


    confirm(e){
        document.dispatchEvent(new CustomEvent('cat-evnt', {
            bubbles : true,
            composed : true,
            detail: "confirm"
        }));
    }

    render() {
        
        var totalPrice = 0;   
        var totalQuantity = 0; 

        var user = JSON.parse(localStorage.getItem('current_user'));

        var orderedProducts = (user != null) ?  JSON.parse(localStorage.getItem('current_user')).basket : Array();     

        this.isEmpty = (orderedProducts.length === 0);  

        orderedProducts.forEach(product => {
            totalQuantity += parseInt(product.quantity);
            totalPrice += product.quantity * product.price;
        });

        totalPrice = totalPrice.toFixed(2);

        return html`
            <script type="module" src="../../../src/components/number_input/numberInput.js"></script>

            <link rel="stylesheet" href="../../../node_modules/@material/button/dist/mdc.button.css">

            <link rel="stylesheet" href="../../../src/style/shop_cart.css">

            <section class="${this.isEmpty ? "shop-cart--close" : "shop-cart--open"}">
                <h2 id="title1">Your shopping cart</h2>
                <table class="w3-table w3-table-all my-table">
                    <thead>
                    <tr class="header">
                        <td>Visual</td>
                        <td>Title</td>
                        <td>Price</td>
                        <td>Quantity</td>
                        <td>Subtotal</td>
                        <td> </td>
                    </tr>

                    ${orderedProducts.map(product => html`
                        <tr>
                            <td><img class="visuel" src="${product.image}" alt="Visuel article"></td>
                            <td>${product.title}</td>
                            <td>${product.price} €</td>
                            <td> <number-input class="num-input" @click=${this.updateQuantity} value=${product.quantity} item_name=${product.title}> </number-input> </td>
                            <td id="${product.title}_price" unitaryPrice=${product.price} >${(product.quantity * product.price).toFixed(2)} €</td>
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
                    <button @click=${this.confirm} class="mdc-button mdc-button--raised confirm ${this.isEmpty ? "shop-cart--close" : "shop-cart--open"}">
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
