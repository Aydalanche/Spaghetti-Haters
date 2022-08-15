const links = Array.from(document.querySelector("head"));

/*const links = [
    "https://c.amazon-adsystem.com/*",
    "https://tpc.googlesyndication.com/*"
];*/

chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return {cancel: true}; },
    {urls: links},
    ["blocking"],
);
