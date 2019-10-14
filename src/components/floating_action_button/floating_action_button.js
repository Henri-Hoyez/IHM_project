import { LitElement, html, css } from 'lit-element';
import { MDCRipple } from '@material/ripple';


class FloatingActionButton extends LitElement {

    constructor() {
        super();
    }

    static get styles() {
        return css`

        button {
            position: fixed !important;
            right: 2em;
            bottom: 2em;
            z-index: 10;
        }

        .mdc-fab:not(.mdc-ripple-upgraded):focus::before, .mdc-fab.mdc-ripple-upgraded--background-focused::before {
            opacity: 0!important:
        }

        .mdc-fab.mdc-ripple-upgraded {
            --mdc-ripple-fg-opacity : 0!important;
        }

        `
    }


    render() {
        return html`
            <link rel="stylesheet" href="../../../node_modules/@material/fab/dist/mdc.fab.css">

            <style>
                @font-face {
                font-family: 'Material Icons';
                font-style: normal;
                font-weight: 400;
                src: url(https://example.com/MaterialIcons-Regular.eot); /* For IE6-8 */
                src: local('Material Icons'),
                  local('MaterialIcons-Regular'),
                  url(https://example.com/MaterialIcons-Regular.woff2) format('woff2'),
                  url(https://example.com/MaterialIcons-Regular.woff) format('woff'),
                  url(https://example.com/MaterialIcons-Regular.ttf) format('truetype');
            }

            .material-icons {
                font-family: 'Material Icons';
                font-weight: normal;
                font-style: normal;
                font-size: 24px;
                display: inline-block;
                line-height: 1;
                text-transform: none;
                letter-spacing: normal;
                word-wrap: normal;
                white-space: nowrap;
                direction: ltr;
            }
            </style>
            <a href="#">
                <button class="mdc-fab mdc-fab--mini" aria-label="Favorite" >
                    <span class="mdc-fab__icon material-icons"><slot>keyboard_arrow_up</slot></span>
                </button>
            </a>`
    }

    firstUpdated() {
        MDCRipple.attachTo(this.shadowRoot.querySelector('.mdc-fab'));
    }

}

customElements.define('floating-action-button', FloatingActionButton);
