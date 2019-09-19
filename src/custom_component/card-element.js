import {LitElement, html} from 'lit-element'


class CardElement extends LitElement {

  static get properties(){
    return {
      title: { type: String },
      img : { type: String },
      content : { type: String },
      price : { type: Number },
    };
  }

  constructor(){
    
  }

  render(){
    return html`
      <link rel="stylesheet" href="style/card.css">
      <div class="card-container"> 

          <div class="img-container">
              <img src="images/manifest/150x150.jpg" alt="test-image">
          </div>

          <div class="content-container">
              <div class="card-header">
                  <p class="card-title">Default title.</p>
                  <p class="card-price">00 €</p>
              </div>

              <div class="card-description">
                  <p class="card-content">123 Lorem ipsum dolor sit amet consectetur adipisicing elit.  Explicabo assumenda dolores quos voluptatum, unde eveniet iste porro tempore commodi optio omnis id perspiciatis. Nesciunt reiciendis neque atque, suscipit harum voluptate.</p>
                  <img class="like-button" src="images/like_image.png" alt="like button">
              </div>    
          </div>
      </div>

    `;
  }
   
    
}

  customElements.define('card-element', CardElement);