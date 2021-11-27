const defaultFilters = [ //all the ads sites that will have their ad request blocked
	"*://*.doubleclick.net/*",
	"*://partner.googleadservices.com/*",
	"*://*.googlesyndication.com/*",
	"*://*.google.com/afs/ads*",
	"*://*.google.com/adsense*",
	"*://*.google-analytics.com/*",
	"*://creative.ak.fbcdn.net/*",
	"*://*.adbrite.com/*",
	"*://*.exponential.com/*",
	"*://*.quantserve.com/*",
	"*://*.scorecardresearch.com/*",
	"*://*.zedo.com/*",
	"*://*.anyclip.com/*",
	"*://*.adpushup.com/*",
	"*://*.smartyads.com/*",
	"*://*.trafficforce.com/*",
	"*://*.ad-maven.com/*",
	"*://*.propellerads.com/*",
	"*://*.popads.net/*",
	"*://*.infolinks.com/*",
	"*://*.revenuehits.com/*",
	"*://*.bidvertiser/*",
	"*://*.adbuffs.com/*",
	"*://*.weborama.com/*",
	"*://*.trustarc.com/*",
	"*://*.meetrics.com/*",
	"*://*.integralads.com/*",
	"*://*.innovid.com/*",
	"*://*.site.adform.com/*",
	"*://*.adition.com/*",
	"*://*.engineeringportal.nielsen.com/*",
		
]



chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return { cancel: true }}, //blocks request that we are sending
    { urls: defaultFilters }, //urls that will be blocked (site thats providing the ads)
    ["blocking"]
	
)
