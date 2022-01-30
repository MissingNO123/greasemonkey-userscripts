// ==UserScript==
// @name        Auto Refresh VRChat Friends List Page (And Turn On Push Notifs)
// @namespace   https://alteregobot.me/
// @description Auto Refresh VRChat Friends List Page, And Automatically Turn On Push Notifs
// @author      MissingNO123
// @version     1
// @grant       none
// @include     https://vrchat.com/home/friends
// @include     https://vrchat.com/home/locations
// @include     https://vrchat.com/home/user/usr_*
// @include     https://api.vrchat.cloud/api/1/visits
// @require     https://code.jquery.com/jquery-2.2.4.min.js?version=1
// ==/UserScript==

setTimeout(location.reload.bind(location), 30 * 60 * 1000);

function clickButton() {
	try {
		var evt = document.createEvent("MouseEvents");
		evt.initEvent("click", true, true);
		$("button[title='Push Notifications']")[0].dispatchEvent(evt);
	} catch (err) {
		console.error('Script error in %s:\n%s: %s',
		"[Greasemonkey script null/Auto Refresh VRChat Friends List Page; version 1]", err.name, err.message);
	}
}

setTimeout(clickButton, 5*1000);
