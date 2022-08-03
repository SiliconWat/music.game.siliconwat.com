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
                <h3>Piano Playing</h3>
                <nav>
                    <span>Circle of Fifths</span>
                    <span>Circle of Fourths</span>
                    <span>Scales and Modes</span>
                    <span>Intervals</span>
                </nav>
            </li>
            <li>
                <h3>Sight Reading</h3>
                <nav>
                    <span>Sheet => Piano</span>
                    <span>Piano => Sheet</span>
                    <span>Treble Clef</span>
                    <span>Bass Clef</span>
                    <span>Treble + Bass Clef</span>
                </nav>
            </li>
            <li>
                <h3>Ear Training</h3>
                <nav>
                    <span>Sound => Sheet</span>
                    <span>Sound => Piano</span>
                    <span>Relative</span>
                    <span>Absolute</span>
                    <span>Intervals</span>
                    <span>Chords</span>
                    <span>7ths</span>
                </nav>
            </li>
            <li>
                <h3>Rhythm Training</h3>
                <nav>
                    <span>Melody => Sheet</span>
                    <span>Melody => Piano</span>
                    <span>Chord Progressions</span>
                    <span>Jazz Progressions</span>
                </nav>
            </li>
        </ul>
        <aside>
            <sw-timer></sw-timer>
            <sw-scoreboard></sw-scoreboard>
            <sw-instrument></sw-instrument>
        </aside>
    </section>
`;

export default template;