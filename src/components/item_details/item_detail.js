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
    this.display = false;
  }

  firstUpdated(){
  
    if(this.gender_categories != null){    
      this.gender_categories = this.gender_categories.toLowerCase();
    }    

    if(this.clothes_categories != null)
    {    
      this.clothes_categories = this.clothes_categories.toLowerCase();
    }

    document.addEventListener('update-detail-view', (e) => { 
      console.log(e);
      this.display = !this.display; 


      if(this.display){
        this.title = e.detail.title;
        this.desc = e.detail.desc;
        this.price = e.detail.price;
        this.image = e.detail.image;
      }

      this.requestUpdate(); // update the html content !

     });

  }

  render() { 
    console.log('je rend');
    console.log(this.display == true ? "detail-background" : "detail-background--hidden");
    
    return html `
        <link rel="stylesheet" href="/src/style/item-detail.css">
        <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'>
        <link rel="stylesheet" href="node_modules/@material/card/dist/mdc.card.css">
        <link rel="stylesheet" href="/node_modules/@material/button/dist/mdc.button.css">


        <div class="${this.display == true ? "detail-background" : "detail-background--hidden"}" @click='${this.exitView}'>
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

            <button class="mdc-button">
              <span class="mdc-button__label"> Add to card </span>
            </button>



            </div>
        </div>
    `;
  }

exitView(e){
  document.dispatchEvent(new CustomEvent('update-detail-view', {
    bubbles:true,
    composed:true
  }));
}


}

customElements.define('item-detail', ItemDetail);

