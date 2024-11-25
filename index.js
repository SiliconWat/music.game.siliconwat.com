import "/components/sw-music/element.mjs";
import "/components/sw-timer/element.mjs";
import "/components/sw-scoreboard/element.mjs";

window.onload = async () => {
    const origin = window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5660" : "https://music.siliconwat.dev";
    await import(`${origin}/components/sw-nav/element.mjs`);
    await import(`${origin}/components/sw-menubar/element.mjs`);
    await import(`${origin}/components/sw-instrument/element.mjs`);
    await import(`${origin}/components/sw-editor/element.mjs`);
    await import(`${origin}/components/sw-piano/element.mjs`);
}

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-NX7ZBWWHDN');