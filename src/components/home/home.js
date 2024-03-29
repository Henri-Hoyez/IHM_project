import { LitElement, html, css } from 'lit-element';

class CustomHome extends LitElement {


    firstUpdated() {
    }


    constructor() {
        super();
    }

    static get styles() {
        return css`
            section {
                font-family: 'Roboto', sans-serif;
                text-align: center;
            }

            .title1 { font-size: 1.85em; }

            .title2 { font-size: 1.65em; }

            a {
                cursor: pointer;
                text-decoration: none;
            }

            @media screen and (max-width:940px) {
                h2, p{
                    font-size: 5px; 
                }

                
            }
        `
    }

    render() {
        return html`
            <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"> 
            <link href="/src/components/home/slider.css" rel="stylesheet">


            <section>
                <h2 class="title1"> Our new <em>Neo Clothes</em> store has just opened !</h2>
                <p class="title2 is-size-1-touch"> On this site you will find beautiful clothes that will allow you to create your own style...</p>

                <article class="slider-container">
                    <input type="radio" name="img-displayed" id="display-1" checked>
                    <input type="radio" name="img-displayed" id="display-2">
                    <input type="radio" name="img-displayed" id="display-3">
                    <div class="img-container">
                        <img src="/src/components/home/clothes.png" alt="clothes1"/>
                        <img src="/src/components/home/clothes2.png" alt="clothes2"/>
                        <img src="/src/components/home/clothes3.png" alt="clothes3"/>
                    </div>
                </article>
            </section>
            `;
    }

}

customElements.define("custom-home", CustomHome);
