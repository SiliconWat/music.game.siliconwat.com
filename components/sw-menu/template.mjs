const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="components/sw-menu/shadow.css">
    <section>
        <ul>
            <li>
                <h3>Piano Playing</h3>
                <nav>
                    <span>Treble Clef: Sheet => Piano</span>
                    <span>Bass Clef</span>
                    <span>Treble + Bass Clef</span>
                    <span>Circle of Fifths</span>
                    <span>Scales and Modes</span>
                </nav>
            </li>
            <li>
                <h3>Sight Reading</h3>
                <nav>
                    <span>Treble Clef: Piano => Sheet</span>
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
        <ul>
            <li>
                <label>00:00</label>
            </li>
            <li>
                <span>▶️</span>
                <span>⏸</span>
                <span>⏹</span>
            </li>
            <li>
                <span>Score: 100%</span>
                <span>Correct: 0</span>
                <span>Wrong: 0</span>
            </li>
            <li>
                <span>🎹</span>
                <span>⌨️</span>
                <span>⎋</span>
            </li>
            <li>
                <span>🎤</span>
                <span>📷</span>
            </li>
        </ul>
    </section>
`;

export default template;