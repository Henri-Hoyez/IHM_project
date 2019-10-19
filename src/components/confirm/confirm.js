import { LitElement, html } from 'lit-element';


class Confirm extends LitElement {

  

  constructor() {
    super();

    
  }

    returnToShop(e){
        document.dispatchEvent(new CustomEvent('cat-evnt', {
            bubbles: true,
            composed: true,
            detail: null
        }));
    }
  

  render() { 
    
    return html `
        <link rel="stylesheet" href="../../../node_modules/@material/button/dist/mdc.button.css">
        <link rel="stylesheet" href="../../../src/style/confirm.css" alt='thanks gif'>
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">


        <img src="images/manifest/thanks.webp"/>

        <div class='center-handler'>
            <div> Thanks for your purchases !</div>
            <br>
            <button @click=${this.confirm} class="mdc-button mdc-button--raised confirm">
                <span @click=${this.returnToShop} class="mdc-button__label">Continue shopping</span>
            </button>
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

customElements.define('confirm-section', Confirm);

