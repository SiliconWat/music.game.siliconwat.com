import template from './template.mjs';

export class SwScoreboard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.correct = 0;
        this.wrong = 0;
        this.incrementCorrect = this.incrementCorrect.bind(this);
    }

    incrementCorrect() {
        this.shadowRoot.getElementById('correct').textContent = ++this.correct;
    }
}