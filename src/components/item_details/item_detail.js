import { LitElement, html } from 'lit-element';
import { strings } from '@material/ripple';


class ItemDetail extends LitElement {

  static get properties() {
    return { 
            title: {type: String},
            image: {type: String},
            desc : {type: String},
            price: {type:Number}
          };
  }

  constructor() {
    super();

    this.title = 'Default title';
    this.desc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet feugiat mauris. Nunc in volutpat odio. Proin pulvinar turpis vel ipsum vehicula aliquet. Aliquam tempus eros. '
    this.price = 0;
    this.image = "https://via.placeholder.com/400x400";
  }

  firstUpdated(){
  
    if(this.gender_categories != null){    
      this.gender_categories = this.gender_categories.toLowerCase();
    }    

    if(this.clothes_categories != null)
    {    
      this.clothes_categories = this.clothes_categories.toLowerCase();
    }

  }

  render() { 
    return html `
        <link rel="stylesheet" href="/src/style/item-detail.css">
        <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'>
        <link rel="stylesheet" href="node_modules/@material/card/dist/mdc.card.css">


        <div class="detail-background">
            <div class="mdc-card detail-body">
            <div class="mdc-card__primary-action">
                <img src="${this.image}">
            </div>
            <div class="header">
                <div class="card-title"> ${this.title} </div>
                <div class="card-price"> ${this.price} € </div>
            </div>
            <div class="card-desc">
                <p> ${this.desc} </p>
            </div>



            </div>
        </div>
        
    
    
    `;
  }

}

customElements.define('item-detail', ItemDetail);

