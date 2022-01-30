// ==UserScript==
// @name        TechReview Anti-Paywall
// @namespace   https://alteregobot.me/
// @description die lol
// @author      MissingNO123
// @include     https://www.technologyreview.com/s/*
// @version     1
// @grant       none
// ==/UserScript==

// Probably not hard to adapt this to work with other sites too

payWall = document.getElementsByClassName("paywall");
payWall[0].parentNode.removeChild(payWall[0]);
