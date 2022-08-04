const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="components/sw-timer/shadow.css">
    <ul>
        <li id="duration">00:00</li>
        <li id="play">▶️</li>
        <li id="pause">⏸</li>
        <li id="stop">⏹</li>
    </ul>
`;

export default template;