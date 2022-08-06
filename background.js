const links = [
    "https://c.amazon-adsystem.com/aax2/apstag.js"
];

chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return {cancel: true}; },
    {urls: links},
    ["blocking"]
);