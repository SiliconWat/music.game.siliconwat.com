import { SwTimer } from "/components/sw-timer/element.mjs";
customElements.define("sw-timer", SwTimer);

import { SwScoreboard } from "/components/sw-scoreboard/element.mjs";
customElements.define("sw-scoreboard", SwScoreboard);

window.onload = async () => {
    const origin = window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5508" : "https://music.siliconwat.com";

    const { SwNav } = await import(`${origin}/components/sw-nav/element.mjs`);
    customElements.define("sw-nav", SwNav);

    const { SwMenubar } = await import(`${origin}/components/sw-menubar/element.mjs`);
    customElements.define("sw-menubar", SwMenubar);

    const { SwInstrument } = await import(`${origin}/components/sw-instrument/element.mjs`);
    customElements.define("sw-instrument", SwInstrument);

    const { SwEditor } = await import(`${origin}/components/sw-editor/element.mjs`);
    customElements.define("sw-editor", SwEditor);

    const { SwPiano } = await import(`${origin}/components/sw-piano/element.mjs`);
    customElements.define("sw-piano", SwPiano);
}

const SWPianoElement = document.querySelector('sw-piano');
window.addEventListener('sw-instrument', event => {
    SWPianoElement.instrument = event.detail.instrument;
});
window.addEventListener('sw-clef', event => {
    SWPianoElement.clef = event.detail.clef;
});

const SwScoreboardElement = document.querySelector('sw-scoreboard');
window.addEventListener('sw-correct', SwScoreboardElement.incrementCorrect);
window.addEventListener('sw-wrong', SwScoreboardElement.incrementWrong);

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-NX7ZBWWHDN');