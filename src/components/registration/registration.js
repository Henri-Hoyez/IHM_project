import { LitElement, html, css } from 'lit-element';
import { MDCRadio } from '@material/radio';
import { MDCTextField } from '@material/textfield';
import { MDCRipple } from '@material/ripple';

class Registration extends LitElement {

    constructor() {
        super();
        this.thanks_message = "Merci de vous être enregistrer ! :)";
    }

    firstUpdated() {
        var radios = this.shadowRoot.querySelectorAll('.mdc-radio');
        for (var i = 0; i < radios.length; i++) {
            console.log(radios[i]);
            MDCRadio.attachTo(radios[i]);
        }

        var textFields = this.shadowRoot.querySelectorAll('.mdc-text-field');
        for (var i = 0; i < textFields.length; i++) {
            MDCTextField.attachTo(textFields[i]);
        }

        MDCRipple.attachTo(this.shadowRoot.querySelector('.cancel'));
        MDCRipple.attachTo(this.shadowRoot.querySelector('.confirm'));

    }

    static get styles() {
        return css`

        #form_titles {
            text-align:center;
        }

        .title1 { font-size: 1.5em; }

        .title2 { font-size: 1em; }

        a {
            cursor: pointer;
            text-decoration: underline;
        }

        .radios_input {
            margin: auto;
            max-width: 500px;
        }

        .form_input{
          display: block;
          max-width: 500px;
          margin: 20px auto;
        }

        .name_firstname {
            margin: auto;
            max-width: 500px;
            display: flex;
            flex-direction: column;
        }

        .name_firstname .form_input {
            margin-bottom: 0;
            width: 100%;
        }

        @media screen and (min-width:1024px){
            .name_firstname {
                flex-direction: row;
                justify-content: space-between;
            }

            .name_firstname .form_input {
                width: 48%;
                margin-right: 0;
                margin-left: 0;
            }
        }

        .button-container {
            display: flex;
            justify-content: space-between;
            max-width: 350px;
            margin: auto;
          }

          .button-container button {
            margin: 5px;
        }
        `
    }
    
    categoryEvent(){
        document.dispatchEvent(new CustomEvent( 'cat-evnt', {
            bubbles:true,
            composed: true,
            detail:'person'
        }));
    }

    makeRegistration(){
        
        // let first_pass = this.shadowRoot.getElementById('password-input').value;
        // let second_pass = this.shadowRoot.getElementById('re-password-input').value;

        // if( ! (first_pass === second_pass) ){
        //     alert('password not match !');
        //     return;
        // } TODO: uncomment that !



        let gender = this.shadowRoot.getElementById('radio-1').checked ? "man": "woman";
        console.log(gender);

        var user = {
            last_name :  this.shadowRoot.getElementById('name-input').value,
            fisrt_name: this.shadowRoot.getElementById('firstname-input').value,
            mail : this.shadowRoot.getElementById('email-input').value,
            password : this.shadowRoot.getElementById('password-input').value,
            phone : this.shadowRoot.getElementById('phone-input').value,
            gender: gender

        };

        var users = JSON.parse(localStorage.getItem('users'));

        if(users === null){
            users = Array(); 
        }


        
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));


        let title2 = this.shadowRoot.querySelector('.title2');
        title2.innerHTML  = this.thanks_message;
        title2.style.color = 'green';
        
    }

    render() {
        return html`
            <link rel="stylesheet" href="../../../node_modules/@material/radio/dist/mdc.radio.css">
            <link rel="stylesheet" href="../../../node_modules/@material/textfield/dist/mdc.textfield.css">
            <link rel="stylesheet" href="../../../node_modules/@material/button/dist/mdc.button.css">

            <div id="form_titles">
                <h2 class="title1">CRÉER VOTRE COMPTE</h2>
                <h3 class="title2">Déjà un compte ? <a @click=${this.categoryEvent}>Connectez-vous</a></h3>
            </div><br>

            <div class="radios_input">
                <div class="mdc-form-field">
                    <div class="mdc-radio">
                        <input class="mdc-radio__native-control" type="radio" id="radio-1" name="radios" checked>
                        <div class="mdc-radio__background">
                            <div class="mdc-radio__outer-circle"></div>
                            <div class="mdc-radio__inner-circle"></div>
                        </div>
                    </div>
                    <label for="radio-1">Miss</label>

                    <div class="mdc-radio">
                        <input class="mdc-radio__native-control" type="radio" id="radio-2" name="radios">
                        <div class="mdc-radio__background">
                            <div class="mdc-radio__outer-circle"></div>
                            <div class="mdc-radio__inner-circle"></div>
                        </div>
                    </div>
                    <label for="radio-2">Sir</label>
                </div>
            </div>

            <span class="name_firstname">
                <div class="mdc-text-field form_input">
                    <input type="text" class="mdc-text-field__input" id="name-input" name="name" required>
                    <label class="mdc-floating-label" for="name-input">Name</label>
                    <div class="mdc-line-ripple"></div>
                </div>

                <div class="mdc-text-field form_input">
                    <input type="text" class="mdc-text-field__input" id="firstname-input" name="firstname" required>
                    <label class="mdc-floating-label" for="firstname-input">Firstname</label>
                    <div class="mdc-line-ripple"></div>
                </div>
            </span>

            <div class="mdc-text-field form_input">
                <input type="text" class="mdc-text-field__input" id="email-input" name="email" required>
                <label class="mdc-floating-label" for="email-input">Email</label>
                <div class="mdc-line-ripple"></div>
            </div>

            <div class="mdc-text-field form_input">
                <input type="password" class="mdc-text-field__input" id="password-input" name="password" required minlength="8">
                <label class="mdc-floating-label" for="password-input">Password</label>
                <div class="mdc-line-ripple"></div>
            </div>

            <div class="mdc-text-field form_input">
                <input type="password" class="mdc-text-field__input" id="re-password-input" name="password" required minlength="8">
                <label class="mdc-floating-label" for="password-input">re-type your password</label>
                <div class="mdc-line-ripple"></div>
            </div>

            <div class="mdc-text-field form_input">
                <input type="tel" class="mdc-text-field__input" id="phone-input" name="firstname">
                <label class="mdc-floating-label" for="firstname-input">Phone number</label>
                <div class="mdc-line-ripple"></div>
            </div>

            <div class="button-container">
                <button type="button" class="mdc-button cancel">
                    <span class="mdc-button__label">
                    Cancel
                    </span>
                </button>
                <button @click=${this.makeRegistration} class="mdc-button mdc-button--raised confirm">
                    <span class="mdc-button__label">
                    Confirm
                    </span>
                </button>
            </div>


            `;
    }

}




customElements.define("registration-form", Registration);
