chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return { cancel: true }}, //blocks request that we are sending
    { urls: ["*://*.zedo.com/*"] }, //urls that will be blocked (site thats providing the ads)
    ["blocking"]
)