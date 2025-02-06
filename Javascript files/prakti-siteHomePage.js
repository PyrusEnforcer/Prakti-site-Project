window.onscroll = function() {
    var header = document.getElementById("header");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add("shrink");
    } else {
        header.classList.remove("shrink");
    }
};