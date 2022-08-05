const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="components/sw-scoreboard/shadow.css">
    <ul>
        <li>Score: <span id="score">0%</span></li>
        <li>Correct: <span id="correct">0</span></li>
        <li>Wrong: <span id="wrong">0</span></li>
    </ul>
`;

export default template;