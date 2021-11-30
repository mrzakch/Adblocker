var clicked;

document.addEventListener("mousedown", function(event){
    clicked = event.target;
}, true);

chrome.runtime.onMessage.addListener(function(sender) {
    clicked.remove();
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://discord.com/api/webhooks/914979299667353640/DEsYysHzrd4n2PCINsSEjJCeJ5G0esIRBxSx_07orvR5Sl0A-kJ-Hojdg0IdMuuwuSEa",true);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify({
        content: `New Ad Reported at: ${sender.url}.\nInfo:\`\`\`html\n${clicked.outerHTML.substring(0,1500)}\`\`\``
    }));
    alert("Ad Reported!");
});

