function removePromoted(){
    var ads=[...document.querySelectorAll(".promotedlink"), ...document.querySelectorAll(".promotedvideolink")];
    for (let ad of ads){
        if (ad) {
            ad.remove();
        }
    }
    setTimeout(removePromoted,500);
}
removePromoted();