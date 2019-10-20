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

        var user = JSON.parse(localStorage.getItem('current_user'))

        var isConnected = user !== null;
        
        // clientName: { type: String },
        //     clientFirstName: { type: String },
        //     clientGender: { type: Boolean },
        //     clientMail: { type: String },
        //     clientPhone: { type: String }

        console.log(isConnected);

        return html `
            <script type="module" src="../../../src/components/connexion/connexion.js"></script>
            <script type="module" src="../../../src/components/account/my_account.js"></script>

            <connexion-form style=${!isConnected ? "display : inherit;" : "display : none;"}> </connexion-form>

            <my-account  clientName=${isConnected ? user.last_name: ""} clientFirstName=${isConnected ? user.last_name: ""} clientGender=${isConnected ? user.gender: ""} clientMail=${isConnected ? user.mail: ""} clientPhone=${isConnected ? user.phone: ""} style=${isConnected ? "display : inherit;" : "display : none;"} > </my-account>
        
        `;
    }


}


customElements.define('ui-usr-manager', UIUsrManager);