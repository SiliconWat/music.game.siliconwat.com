import template from './template.mjs';

export class SwTimer extends HTMLElement {
    static getFormattedDuration(totalSeconds) {
        const m = Math.floor(totalSeconds % 3600 / 60);
        const s = Math.floor(totalSeconds % 3600 % 60);
    
        const minutes = String(m).padStart(2, '0');
        const seconds = String(s).padStart(2, '0');
    
        return `${minutes}:${seconds}`;
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.timer = null;
        this.startTime = null;
        this.pauseDuration = null;
        
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
        this.stop = this.stop.bind(this);
        this.runTimer = this.runTimer.bind(this);
        this.updateDuration = this.updateDuration.bind(this);
    }

    connectedCallback() {
        this.shadowRoot.getElementById('play').onclick = this.play;
        this.shadowRoot.getElementById('pause').onclick = this.pause;
        this.shadowRoot.getElementById('stop').onclick = this.stop;
        this.shadowRoot.getElementById('treble').onclick = () => this.dispatchEvent(new CustomEvent("sw-clef", { bubbles: true, composed: true, detail: { clef: 'treble' }}));
        this.shadowRoot.getElementById('bass').onclick = () => this.dispatchEvent(new CustomEvent("sw-clef", { bubbles: true, composed: true, detail: { clef: 'bass' }}));
    }

    play() {
        if (this.startTime) {
            if (this.pauseDuration) {
                this.startTime = new Date() - this.pauseDuration;
                this.runTimer();
                this.pauseDuration = null;
            }
        } else {
            this.startTime = new Date();
            this.runTimer();
        }
    }

    pause() {
        if (this.startTime) {
            clearInterval(this.timer);
            this.pauseDuration = new Date() - this.startTime;
        }
    }

    stop() {
        if (this.startTime) {
            clearInterval(this.timer);
            this.startTime = null;
        }
    }

    runTimer() {
        this.timer = setInterval(this.updateDuration, 1000);
    }

    updateDuration() {
        this.shadowRoot.getElementById('duration').textContent = SwTimer.getFormattedDuration((new Date() - this.startTime) / 1000);
    }
}