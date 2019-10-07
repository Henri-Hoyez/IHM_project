import {LitElement, html} from 'lit-element'


class CardElement extends LitElement {

  static get properties(){
    return {
      title: { type: String },
      product_image : { type: String },
      button_image: {type: String},
      content : { type: String },
      price : { type: Number }
    };
  }

  constructor(){
    super();    
    this.title = 'Default title';
    this.product_image = 'images/manifest/150x150.jpg';
    this.price = 0;
    this.content = 'Default content';
    this.button_image = 'images/like_image.png';
  }

  render(){
    return html`
      <link rel="stylesheet" href="style/card.css">
      <div class="card-container"> 

          <div class="img-container">
              <img src='${this.product_image}' alt="test-image">
          </div>

          <div class="content-container">
              <div class="card-header">
                  <p class="card-title">${this.title}</p>
                  <p class="card-price">${this.price} €</p>
              </div>

              <div class="card-description">
                  <p class="card-content">${this.content}</p>
                  <img class="like-button" src="${this.button_image}" alt="like button">
              </div>    
          </div>
      </div>

    `;
  }
   
    
}

  customElements.define('card-element', CardElement);