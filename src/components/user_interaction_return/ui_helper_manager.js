import { LitElement, html, css } from 'lit-element';


class UiHelperManager extends LitElement{

    constructor(){
        super();
    }

    firstUpdated(){
        document.addEventListener('ui-msg', (e) => {

            var test = document.createElement('ui-helper');
            test.setAttribute('message', e.detail);

            this.shadowRoot.querySelector('.ui-container').appendChild(test);  
        });
    }

    closeCard(){
        var container = this.shadowRoot.querySelector('.container--opened');

        container.setAttribute('class', 'container--closed');
    }

    render(){
        return html`
            <script type="module" src="../../../src/components/user_interaction_return/UI_helper.js"></script>
            <link rel="stylesheet" href="../../../src/style/ui_manager.css">

            <div class="ui-container">  
                
            </div>
            `;

    }


}
customElements.define("ui-helper-manager", UiHelperManager);