import template from './template.mjs';

class SwScoreboard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.correct = 0;
        this.wrong = 0;
        this.incrementCorrect = this.incrementCorrect.bind(this);
        this.incrementWrong = this.incrementWrong.bind(this);
    }

    incrementCorrect() {
        this.shadowRoot.getElementById('correct').textContent = ++this.correct;
        this.shadowRoot.getElementById('score').textContent = Math.round(this.correct*100/(this.correct + this.wrong)) + "%";
    }

    incrementWrong() {
        this.shadowRoot.getElementById('wrong').textContent = ++this.wrong;
        this.shadowRoot.getElementById('score').textContent = Math.round(this.correct*100/(this.correct + this.wrong)) + "%";
    }
}

customElements.define("sw-scoreboard", SwScoreboard);