chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({'mySwitch': true}, function(data){
        console.log("Switch is enabled")
    });

})
var isExtensionOn = true;
chrome.storage.onChanged.addListener(function (changes, area) {
    if (area === 'local' && changes.mySwitch) {
        if (changes.mySwitch.newValue) {
            isExtensionOn = true;
         }
         else {
             isExtensionOn = false;
         }
    }
});

chrome.storage.local.get(['linksDB'], result => {
	chrome.webRequest.onBeforeRequest.addListener(
		function(details) {
			return {cancel: isExtensionOn};
		},
		{ urls: result.linksDB },
		["blocking"]
	);
});