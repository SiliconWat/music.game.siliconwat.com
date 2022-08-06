import { SwTimer } from "/components/sw-timer/element.mjs";
customElements.define("sw-timer", SwTimer);

import { SwScoreboard } from "/components/sw-scoreboard/element.mjs";
customElements.define("sw-scoreboard", SwScoreboard);

const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="components/sw-menu/shadow.css">
    <section>
        <ul>
            <li>
                <h3>Sight Reading</h3>
                <nav>
                    <span>Sheet => Piano</span>
                    <span>Circle of Fifths/Fourths</span>
                    <span>Scales and Modes: Intervals</span>
                </nav>
            </li>
            <li>
                <h3>Ear Training</h3>
                <nav>
                    <span>Sound => Piano => Sheet: Always Relative</span>
                    <span>Intervals</span>
                    <span>Chords</span>
                    <span>7ths</span>
                </nav>
            </li>
            <li>
                <h3>Rhythm Training</h3>
                <nav>
                    <span>Melody => Piano => Sheet</span>
                    <span>Chord Progressions => Baseline</span>
                    <span>Jazz Progressions => Baseline</span>
                </nav>
            </li>
        </ul>
        <slot></slot>
    </section>
`;

export default template;