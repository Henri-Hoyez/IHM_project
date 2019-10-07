import { LitElement, html } from 'lit-element';


class CustomGalery extends LitElement {

  static get properties() {
    return { 
            photo : {type:String},
            description: {type:String},
            price : {type:Number},

            hidden : {type:Boolean}
        };
  }

  constructor() {
    super();
    this.first = -1;
    this.second = -1;
    this.categories = [['ladies', "men"], ['outerwear', 'tshirts']];
  }
  
  render() {  
    
    if (this.first == -1 && this.second == -1 || this.hidden == 'true'){
      return html ``;
    }

    console.log(this.hidden);

    
  }
}

customElements.define('custom-galery', CustomGalery);

