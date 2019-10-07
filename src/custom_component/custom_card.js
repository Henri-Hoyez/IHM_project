import { LitElement, html } from 'lit-element';

class CustomCard extends LitElement {
  static get properties() {
    return { 
            title: { type: String },
            price: { type: Number},
            desc: {type:String},
            img: {type:String}
            };
  }

  constructor() {
    super();
    this.title = 'Title';
    this.price = 0;
    this.desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
    this.img = "images/manifest/150x150.jpg";
  }
  
  render() {
    return html`
        <link rel="stylesheet" href="style/vertical_card.css">
        <link rel="stylesheet" href="node_modules/@material/card/dist/mdc.card.css">
        <div class="my-card-media mdc-card">
            <div class="mdc-card__primary-action" tabindex="0">
                <img src="${ this.img }" alt="default image">
            </div>

            <div class="top-informaion" tabindex="1" >
                <div class="title">${this.title}</div> 
                <div class="price">${this.price} €</div>
            </div>

            <div class="bottom-information" tabindex="3">
               
                <button> like icon button </button>
            </div>      
    </div>
    `;
  }
}

customElements.define('custom-card', CustomCard);

