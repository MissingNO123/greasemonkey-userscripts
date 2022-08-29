// ==UserScript==
// @name     		Booth Automatic Language Changer
// @description	Change from en/ja/ko/zh/etc to your preferred language
// @version  		1
// @namespace		https://greasyfork.org/en/users/878446-missingno123
// @grant    		none
// @include    	/^https?:\/\/(www.)?booth\.pm\/([a-zA-Z]{2}|[a-zA-Z]{2}-[a-zA-Z]{2})\/.*$/
// @run-at      document-start
// ==/UserScript==

var prefLocale = '/en/'; // en, ja, ko, zh-tw, zh-cn
var reger = /(\/[a-zA-Z]{2}\/)|(\/[a-zA-Z]{2}-[a-zA-Z]{2}\/)/i;

var addr = window.location.toString();
var locale = addr.match(reger)[0];

if (locale !== prefLocale) {
	window.location.replace(addr.replace(reger, prefLocale));
}
