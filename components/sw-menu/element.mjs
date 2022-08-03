import template from './template.mjs';

export class SwMenu extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    async connectedCallback() {
        const origin = window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5508" : "https://music.siliconwat.com";

        const { SwInstrument } = await import(`${origin}/components/sw-instrument/element.mjs`);
        customElements.define("sw-instrument", SwInstrument);
    }
}