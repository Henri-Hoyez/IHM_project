import { LitElement, html, css } from 'lit-element';
import { MDCList } from "@material/list";


class NumberInput extends LitElement {

  static get properties() {
    return {
      value: { type: Number },
      item_name : {type : String}
    };
  }

  constructor() {
    super();
    this.value = 1;
    
  }

  firstUpdated(){
    document.addEventListener('update-detail-view', (e)=>{
      this.value = 1;
    });
  }

  increaseEvent(){
    this.value += 1;

    this.makeEvent();

    this.requestUpdate();
  }

  decreaseEvent(){
    if(this.value > 1){
        this.value -= 1;
    }

    this.makeEvent();

    this.requestUpdate();
  }

  makeEvent(){

    var itemDetail = JSON.stringify( {
        value : this.value,
        item_name : this.item_name
    });

    document.dispatchEvent(new CustomEvent('click', {
        bubbles:true,
        composed:true,
        detail: itemDetail
    }));
  }
  
  render() {        
    return html`
        <link href="../../../node_modules/@material/icon-button/dist/mdc.icon-button.css" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
        <link rel="stylesheet"  href="../../../src/style/number_input.css">


            <div class='wrap'> 
                <button class="mdc-icon-button material-icons mdc-top-app-bar__action-item--unbounded"  @click=${this.decreaseEvent}  aria-label="Search">-</button>
                <p> ${this.value} </p>
                <button class="mdc-icon-button material-icons mdc-top-app-bar__action-item--unbounded"  @click=${this.increaseEvent}  aria-label="Search">+</button>
            </div>
    `;

  }

}

customElements.define('number-input', NumberInput);
