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
                text-align: center;
            }

            .title1 { font-size: 1.85em; }

            .title2 { font-size: 1.65em; }

            a {
                cursor: pointer;
                text-decoration: none;
            }
        `
    }

    render() {
        return html`
            <link href="components/home/slider.css" rel="stylesheet">
            <section>
                <h2 class="title1"> Notre nouvelle boutique <em>Dream Little dreamer</em> vient d'ouvrir !</h2>
                <p class="title2"> Sur ce site, vous pourrez trouver tous les objets de décoration qui vous permettront de créer votre propre
                univers...</p>

                <article class="slider-container">
                    <input type="radio" name="img-displayed" id="display-1" checked>
                    <input type="radio" name="img-displayed" id="display-2">
                    <input type="radio" name="img-displayed" id="display-3">
                    <div class="img-container">
                        <img src="components/home/clothes.png" alt="clothes1"/>
                        <img src="components/home/clothes2.png" alt="clothes2"/>
                        <img src="components/home/clothes3.png" alt="clothes3"/>
                    </div>
                </article>
            </section>
            `;
    }

}

customElements.define("custom-home", CustomHome);
