// ==UserScript==
// @name     		Booth Automatic Language Changer
// @name:ja         Booth.pm 自動言語チェンジャー
// @name:ko         Booth.pm 자동 언어 체인저
// @name:zh-CN      Booth.pm自动语言更换器
// @name:zh-TW      Booth.pm自动语言更换器
// @description	Change from en/ja/ko/zh/etc to your preferred language
// @license     GNU GPLv3
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
