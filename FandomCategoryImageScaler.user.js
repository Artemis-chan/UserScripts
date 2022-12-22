// ==UserScript==
// @name         Fandom Category Image Scaler
// @namespace    https://github.com/Artemis-chan
// @version      1.0
// @description  try to take over the world!
// @author       Artemis
// @match        https://*.fandom.com/wiki/Category:*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=fandom.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const WIDTH = 200;

    var ths = document.querySelectorAll('img.category-page__member-thumbnail');
    const regex = /\/smart\/width\/\d*\/height\/30/gm;

    for (var i = 0; i < ths.length; i++) {
        var th = ths[i];
        th.src = th.src.replace(regex, '');
    }

    var memberPad = WIDTH / 4;
    var linkPad = WIDTH / 2;

    var cssString = `#content .category-page__member-thumbnail { width: ${WIDTH}px; height: auto} `
    + `#content .category-page__member {padding-left: ${memberPad}px}`
    + `#content .category-page__member-link {padding-left: ${linkPad}px}`;

    var styleElement = document.createElement('style');
    styleElement.innerHTML = cssString;
    document.head.appendChild(styleElement);
})();
