var menuBtn = document.getElementById("menuBtn");
var sidenav = document.getElementById("sidenav");
var menu = document.getElementById("menu");

sidenav.style.right == "-250px";

menuBtn.onclick = function() {
    if (sidenav.style.right == "-250px") {
        sidenav.style.right = "0";
        menu.src = "Barber_Shop_img/close.png"
    } else {
        sidenav.style.right = "-250px"
        menu.src = "Barber_Shop_img/menu.png"
    }
}

var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true
});