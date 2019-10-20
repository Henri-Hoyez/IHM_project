import { LitElement, html,css } from 'lit-element';
import {MDCTextField} from '@material/textfield'


class SearchBar extends LitElement{
    static get properties(){
        return {
            open : {type: Boolean}
        };
    }
    constructor(){
        super();
        this.open = false;
    }

    static get styles(){
        return css`:host
        .mdc-text-field{
            display:flex;
        }
        `
    }

    firstUpdated(){
        MDCTextField.attachTo(this.shadowRoot.querySelector('.mdc-text-field'));
        document.addEventListener("search-bar", () => {
            this.open = !this.open;
        });
    }

    searchEvent(e){
        
        document.dispatchEvent( new CustomEvent('search-evnt',{
            bubbles:true,
            composed:true,
            detail : e.target.value
        }  ));
        
    }


    render(){
        return html`
            <link rel="stylesheet" href="../../../node_modules/@material/textfield/dist/mdc.textfield.css">
            <link rel="stylesheet" href="../../../src/components/textfield/search-bar.css">
            <script src="../../../node_modules/@material/textfield/dist/mdc.textfield.js"></script>

            <div class="mdc-text-field ${this.open?"search-bar--open":"search-bar--close"}">
                <label class="mdc-floating-label" for="my-text-field"> <slot> What's your research ? </slot> </label>
                <input type="text" id="my-text-field" class="mdc-text-field__input" @keyup=${ this.searchEvent }>
            <div class="mdc-line-ripple"></div>
        </div>`;
    }

}

customElements.define("search-bar", SearchBar);