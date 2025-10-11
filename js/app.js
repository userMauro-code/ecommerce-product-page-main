const buttonNav = document.getElementById("btnMenuNav");
const menu = document.getElementById("menuNav");
const imgMenu = document.querySelector("img");
const fondo = document.querySelector(".fondo");


buttonNav.addEventListener("click", () => {
    
    if(buttonNav.getAttribute("aria-expanded") === "false"){
        menu.hidden = false;
        buttonNav.setAttribute("aria-expanded", "true");
        imgMenu.setAttribute("src", "../images/icon-close.svg");
        fondo.classList.add("active");
    }else{
        menu.hidden = true;
        buttonNav.setAttribute("aria-expanded", "false");
        imgMenu.setAttribute("src", "../images/icon-menu.svg");
        fondo.classList.remove("active");
    }
});