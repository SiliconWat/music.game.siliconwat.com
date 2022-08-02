import { SwMenu } from "/components/sw-menu/element.mjs";
customElements.define("sw-menu", SwMenu);

window.onload = async () => {
    const origin = window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5508" : "https://music.siliconwat.com";

    // const { SwMenu } = await import(`${origin}/components/sw-menu/element.mjs`);
    // customElements.define("sw-menu", SwMenu);

    const { SwEditor } = await import(`${origin}/components/sw-editor/element.mjs`);
    customElements.define("sw-editor", SwEditor);

    const { SwPiano } = await import(`${origin}/components/sw-piano/element.mjs`);
    customElements.define("sw-piano", SwPiano);
}

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-NX7ZBWWHDN');