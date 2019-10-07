import { LitElement, html } from 'lit-element';


class CustomGalery extends LitElement {

  static get properties() {
    return { 
            first: {type: Number},
            second: {type : Number},

            // hidden : {type:Boolean}
            };
  }

  constructor() {
    super();
    this.first = -1;
    this.second = -1;
    this.categories = [['ladies', "men"], ['outerwear', 'tshirts']];
  }
  
  render() {  
    


    if ((this.first == -1 && this.second == -1)){
      console.log("coucou");
      return html ``;
    }

    this.items =  catalog[this.categories[0][ this.first ]];

    if (this.first > -1 && this.second == -1){

      // let subcategories = Object.getOwnPropertyNames()
      console.log(this.items);

      return html ` ladies and men`;

    }    

    this.items =  catalog[this.categories[0][ this.first ]][this.categories[1][ this.second ]];

    return html`
    <link rel="stylesheet" href="style/custom_galery.css">
    <div class="wrapper">

        ${this.items.map(item => html`
          <custom-card title="${item.title}" img="${item.largeImage}" price="${item.price}"> </custom-card> 
        `)}

    </div>
    `;

  }
}

customElements.define('custom-galery', CustomGalery);

