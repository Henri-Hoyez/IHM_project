import { LitElement, html } from 'lit-element';
import { strings } from '@material/ripple';


class CustomGalery extends LitElement {

  static get properties() {
    return { 
            gender_categories: {type: String},
            clothes_categories: {type : String}
          };
  }

  constructor() {
    super();
    this.gender_categories = null;
    this.clothes_categories = null;
  }

  firstUpdated(){
  
    if(this.gender_categories != null){    
      this.gender_categories = this.gender_categories.toLowerCase();
    }    
    if(this.clothes_categories != null)
    {    
      this.clothes_categories = this.clothes_categories.toLowerCase();
    }


    document.addEventListener('cat-evnt', (e) => {this.gender_categories = e.detail; this.clothes_categories = null;});

    document.addEventListener('shop-event', (e) => {this.clothes_categories = e.detail;});

  }

  render() {  
    
    if ((this.gender_categories == null && this.clothes_categories == null)){
      return html ` page acceuil`;
    }
    
    this.items = null;

    if(this.gender_categories != null && this.clothes_categories == null){

      var tmp_items = catalog[this.gender_categories.toLowerCase()];
      this.items = Array();

      for (const [key, values] of Object.entries(tmp_items)){
        
        let obj = values[0];
        delete obj.price;
        obj.title = key;

        this.items.push( obj );
      }
    }
    
    if(this.gender_categories != null && this.clothes_categories != null){
      this.items = catalog[this.gender_categories.toLowerCase()][this.clothes_categories.toLowerCase()];
    }
    
    
    return html`
    
    <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'>
    <link rel="stylesheet" href="src/style/custom_galery.css">
    <div class="wrapper">

        ${this.items.map(item => html`
          <custom-card title="${item.title}" img="${item.largeImage}" price="${item.price}"> </custom-card> 
        `)}

    </div>
    `;

  }
}

customElements.define('custom-galery', CustomGalery);

