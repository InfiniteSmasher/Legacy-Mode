# Legacy Mode (Basic) | Shell Shockers
```js
// ==UserScript==
// @name         Legacy Mode | Shell Shockers
// @version      3.0
// @author       Infinite Smasher
// @description  Go back in time with the old in-game sound effects (2018/2019) and legacy default gun skins!
// @icon         https://raw.githubusercontent.com/InfiniteSmasher/Legacy-Mode/main/ico_egg.png
// @match        *://shellshock.io/*
// @run-at       document-end
// ==/UserScript==

(function() {
    let script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/gh/InfiniteSmasher/Legacy-Mode@latest/legacy1.js';
    document.head.appendChild(script);
})();
```

# Legacy Mode (w/ SFX Settings Toggle) | Shell Shockers
```js
// ==UserScript==
// @name         Legacy Mode (w/ SFX Settings Toggle) | Shell Shockers
// @version      4.0
// @author       Infinite Smasher
// @description  Go back in time with a settings toggle for the old in-game sound effects (2018/2019) and legacy default gun skins!
// @icon         https://raw.githubusercontent.com/InfiniteSmasher/Legacy-Mode/main/ico_egg.png
// @match        *://shellshock.io/*
// @run-at       document-body
// ==/UserScript==

(function() {
    let script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/gh/InfiniteSmasher/Legacy-Mode@latest/legacy2.js';
    document.head.appendChild(script);
})();
```
