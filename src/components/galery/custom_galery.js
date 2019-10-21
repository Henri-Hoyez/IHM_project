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
    this.keyword = "";
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

    document.addEventListener('search-evnt', (e) => { 
      this.keyword = e.detail; 
      this.requestUpdate();
    });

  }

 

  render() {  
    
    if ((this.gender_categories == null && this.clothes_categories == null)){
      return html `  
        <script type="module" src="../../../src/components/home/home.js"></script>
       
        <custom-home></custom-home>
      `;
    }
    
    this.items = null;

    

    if(this.gender_categories != null && this.clothes_categories == null){
      // Categories loading.

      var tmp_items = catalog[this.gender_categories.toLowerCase()];
      this.items = Array();

      if(tmp_items == null)
      {
        return html``;
      }

      for (const [key, values] of Object.entries(tmp_items)){
        let obj = {
          title:key,
          largeImage: values[0].largeImage
        };        

        this.items.push( obj );
      }
    }

    
    if(this.gender_categories != null && this.clothes_categories != null){
      // Loading requested cards
      this.items = catalog[this.gender_categories.toLowerCase()][this.clothes_categories.toLowerCase()];
      
      
    }
    
    if(this.clothes_categories !== null){
      var reg = RegExp('.*'+ this.keyword +'.*', 'i');    
    }else{
      var reg = RegExp('.*', 'i');    
    }
    
    return html`
    <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'>
    <link rel="stylesheet" href="../../../src/style/custom_galery.css">
    <div class="wrapper">




        ${this.items.map(item =>{ return html`
        
        ${(reg.test(item.title) || this.keyword.length === 0 ) ? html`<custom-card title='${item.title.replace(item.title[0], item.title[0].toUpperCase())}' img='${item.largeImage}' price='${item.price}' desc=${item.description}> </custom-card>` : ''}  `  })}

    </div>
    `;

  }
}

customElements.define('custom-galery', CustomGalery);

