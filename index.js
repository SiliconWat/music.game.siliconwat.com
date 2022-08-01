const origin = window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5508" : "https://music.siliconwat.com";

window.onload = async () => {
    let module = await import(`${origin}/components/sw-menu/element.mjs`);
    customElements.define("sw-menu", module.SwMenu);

    module = await import(`${origin}/components/sw-editor/element.mjs`);
    customElements.define("sw-editor", module.SwEditor);

    module = await import(`${origin}/components/sw-piano/element.mjs`);
    customElements.define("sw-piano", module.SwPiano);
}

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-NX7ZBWWHDN');