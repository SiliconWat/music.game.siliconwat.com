const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="components/sw-timer/shadow.css">
    <ul>
        <li>00:00</li>
        <li>▶️</li>
        <li>⏸</li>
        <li>⏹</li>
    </ul>
`;

export default template;