
let nav_link, open, body, open_menu, close_menu;

nav_link = document.getElementById("nav_link");
open = false;

body = document.body;

open_menu = document.getElementById("open_menu");
close_menu = document.getElementById("close_menu");

function handleMenu() {

    if (open) {
        nav_link.style.right = "-60rem";
        body.style.overflow = "visible";
        close_menu.style.display = "none";
        open_menu.style.display = "inline-block";
        open = false;
    } else {
        nav_link.style.right = 0;
        body.style.overflow = "hidden";
        close_menu.style.display = "inline-block";
        open_menu.style.display = "none";
        open = true;
    }

}