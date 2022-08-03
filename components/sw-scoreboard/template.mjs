const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="components/sw-scoreboard/shadow.css">
    <ul>
        <li>Score: 100%</li>
        <li>Correct: 0</li>
        <li>Wrong: 0</li>
    </ul>
`;

export default template;