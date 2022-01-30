// ==UserScript==
// @name         EveryNoise Scan Continue
// @namespace    https://alteregobot.me/
// @description  press n to continue scan instead of having to scroll up every time
// @author       MissingNO123
// @include      https://everynoise.com/*
// @version      1
// @grant        none
// ==/UserScript==

// Inject a script tag into the document, 
// this is to call the scan() function from GM
function exec(fn) {
    var script = document.createElement('script');
    script.setAttribute("type", "application/javascript");
    script.textContent = '(' + fn + ')();';
    document.body.appendChild(script); // run the script
    document.body.removeChild(script); // clean up
}

document.addEventListener("keydown", Next);

function Next(e) {
  if (e.key == "n"){ 
    exec(function() {
    	return scan("continue");
    });
  }
}
