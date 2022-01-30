// ==UserScript==
// @name        Reddit Auto-Click Expand Buttons
// @description Automatically expands all posts on a subreddit
// @version     1
// @grant       none
// @namespace   alteregobot.me
// @include     http*://*.reddit.com/r/*
// ==/UserScript==

//might be broken nowadays idk

var expandBoxes = document.getElementsByClassName("expando-button");
for (x in expandBoxes) {
  expandBoxes[x].click();
}
