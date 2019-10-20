import { LitElement, css, html, customElement } from "lit-element";

class UIUsrManager extends LitElement{

    constructor(){
        super();
    }

    firstUpdated(){

        document.addEventListener('usr-evnt', (e) => {
            this.requestUpdate();
        });

    }

    render(){

        var isConnected = JSON.parse(localStorage.getItem('current_user')) !== null;

        console.log(isConnected);

        return html `
            <script type="module" src="../../../src/components/connexion/connexion.js"></script>
            <script type="module" src="../../../src/components/account/my_account.js"></script>

            <connexion-form style=${!isConnected ? "display : inherit;" : "display : none;"}> </connexion-form>

            <my-account style=${isConnected ? "display : inherit;" : "display : none;"} > </my-account>
        
        `;
    }


}


customElements.define('ui-usr-manager', UIUsrManager);