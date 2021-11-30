function removeFooter(){
    var ads=[ ...document.querySelectorAll(".k_ __web-inspector-hide-shortcut__"), ...document.querySelectorAll("#adBlock"),
            ...document.querySelectorAll("#mn-adsense-bottom-desktop-2"), ...document.querySelectorAll(".analytics-adsense-ads"),
            ...document.querySelectorAll("#master-a-2"),  ...document.querySelectorAll("#master-2")];

    for (let ad of ads){
        if (ad) {
            ad.remove();
            ad.style.display = "none";
        }
    }
    setTimeout(removeFooter,500);
}
removeFooter();
