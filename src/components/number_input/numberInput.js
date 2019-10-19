import { LitElement, html, css } from 'lit-element';
import { MDCList } from "@material/list";


class NumberInput extends LitElement {

  static get properties() {
    return {
      value: { type: Boolean },
      isConnected: { type: Boolean },
      categories: { type: Array }
    };
  }

  constructor() {
    super();
    this.value = 1;
  }

  increaseEvent(){

  }

  decreaseEvent(){

  }
  
  render() {

    this.isConnected = (JSON.parse(localStorage.getItem('current_user')) != null);

    return html`
        <div class='input-wrapper'> 
            <button class="mdc-icon-button material-icons mdc-top-app-bar__action-item--unbounded"  @click=${this.increaseEvent}  aria-label="Search">+</button>
            <p> ${this.value} </p>
            <button class="mdc-icon-button material-icons mdc-top-app-bar__action-item--unbounded"  @click=${this.decreaseEvent}  aria-label="Search">-</button>


        </div>
    
    `;

  }


  

}

customElements.define('number-input', NumberInput);
