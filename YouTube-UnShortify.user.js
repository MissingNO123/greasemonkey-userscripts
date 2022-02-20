// ==UserScript==
// @name        Youtube Un-Shortify
// @description Redirect YouTube #Shorts to regular video pages
// @author      MissingNO123
// @namespace   https://alteregobot.me
// @version     1
// @grant       none
// @match       https://*.youtube.com/shorts/*
// ==/UserScript==

(function() {
    'use strict';
    window.location.href = (window.location.href).replace(/\.com\/shorts\//, ".com/watch?v=");
})();
