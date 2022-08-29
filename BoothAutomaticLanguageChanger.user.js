// ==UserScript==
// @name     		Booth Automatic Language Changer
// @description	Change from en/ja/ko/zh/etc to your preferred language
// @version  		1
// @namespace		https://greasyfork.org/en/users/878446-missingno123
// @grant    		none
// @include    	/^https?:\/\/(www.)?booth\.pm\/([a-zA-Z]{2}|[a-zA-Z]{2}-[a-zA-Z]{2})\/.*$/
// @run-at      document-start
// ==/UserScript==

const prefLocale = '/en/'; // en, ja, ko, zh-tw, zh-cn
const reger = /(\/[a-zA-Z]{2}\/)|(\/[a-zA-Z]{2}-[a-zA-Z]{2}\/)/i;

const addr = window.location.toString();
const locale = addr.match(reger)[0];

if (locale !== prefLocale) {
	window.location.replace(addr.replace(reger, prefLocale));
}
