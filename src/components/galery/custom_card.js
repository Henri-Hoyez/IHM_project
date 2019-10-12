import { LitElement, html } from 'lit-element';
import "../custom_button/custom_button"

class CustomCard extends LitElement {
  static get properties() {
    return { 
            title: { type: String },
            price: { type: Number},
            desc: {type:String},
            img: {type:String},
            isFavorite: {type:Boolean}
            };
  }

  constructor() {
    super();
    this.title = 'Title';
    this.price = 0;
    this.desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
    this.img = "images/manifest/150x150.jpg";
    this.isFavorite = false;
    
  }
  
  firstUpdated(){
    this.isFavorite = JSON.parse( localStorage.getItem(this.title));
  }
  
  render() {
    return html`
        <link rel="stylesheet" href="src/style/vertical_card.css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">


        <link rel="stylesheet" href="node_modules/@material/card/dist/mdc.card.css">
        <link href="/node_modules/@material/icon-button/dist/mdc.icon-button.css" rel="stylesheet">


        <div @click=${ this.card_click } class="my-card-media mdc-card">
            <img src="${ this.img }" alt="default image">

            <div class="top-informaion" tabindex="1" >

                <div class="title" style=${this.price ? '' : "width:100%; text-align: center; font-size:25px;" } >${this.title}</div> 



                <div class="price">${this.price ? this.price.toString()+'€':"" }</div>
            </div>

            <div class="bottom-information" tabindex="3">
               
                <button @click="${this.like_event}" class="mdc-icon-button material-icons" style="color:red; visibility: ${this.price ? 'visible':'hidden' }">
                ${this.isFavorite?"favorite":"favorite_border"}
              </button>
        
            </div>      
    </div>
    `;
  }


  like_event(){
    this.isFavorite = !this.isFavorite
    localStorage.setItem(this.title, JSON.stringify(this.isFavorite));
  }

  card_click(e){

    if(this.price){
      
      document.dispatchEvent(new CustomEvent("update-detail-view",{
        bubbles:true,
        composed:true,
        detail: {
          title: this.title,
          image: this.img,
          desc : this.desc,
          price: this.price
        }

    }));



    }else{
      console.log('shop page');

      document.dispatchEvent(new CustomEvent("shop-event",{
        bubbles:true,
        composed:true,
        detail: this.title
    }));
    }

  }

}


customElements.define('custom-card', CustomCard);

