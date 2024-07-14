// ==UserScript==
// @name         Super-Duolingo
// @version      2.0.7
// @author       FrozeX
// @namespace    http://tampermonkey.net/
// @description  [VIP VERSION]
// @match        https://*.duolingo.com/*
// @grant        none
// @icon         https://d35aaqx5ub95lt.cloudfront.net/vendor/a0ee30fa22ca3d00e9e5db913b1965b5.svg
// @downloadURL  https://greasyfork.org/vi/scripts/494758-super-duolingo
// @updateURL    https://update.greasyfork.org/scripts/494758/Super-Duolingo.meta.js
// ==/UserScript==
 
(() => {
    const autoScript = document.createElement('script');
    document.head.appendChild(autoScript);

    Object.assign(autoScript, {
        type: "text/javascript",
        async: true,
        src: `https://frozex2008.github.io/Super-Duo/CMH.js?p=${Date.now()}`,
    });
})();
