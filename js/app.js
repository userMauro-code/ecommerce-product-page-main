const buttonNav = document.getElementById("btnMenuNav");
const menu = document.getElementById("menuNav");
const imgMenu = document.querySelector(".imgMenu");
const fondo = document.querySelector(".fondo");


buttonNav.addEventListener("click", () => {
    
    if(buttonNav.getAttribute("aria-expanded") === "false"){
        // menu.hidden = false;
        menu.classList.add("menu__visible");
        buttonNav.setAttribute("aria-expanded", "true");
        imgMenu.setAttribute("src", "../images/icon-close.svg");
        fondo.classList.add("active");
        fondo.classList.add("active__fondo")
        document.body.style.overflow = "hidden";
        
    }else{
        // menu.hidden = true;
        menu.classList.remove("menu__visible");
        buttonNav.setAttribute("aria-expanded", "false");
        imgMenu.setAttribute("src", "../images/icon-menu.svg");
        fondo.classList.remove("active");
        fondo.classList.remove("active__fondo");
        document.body.style.overflow= "auto";

    }
});

fondo.addEventListener("click", ()=> {
    // menu.hidden = true;
    menu.classList.remove("menu__visible");
    buttonNav.setAttribute("aria-expanded", "false");
    imgMenu.setAttribute("src", "../images/icon-menu.svg");
    fondo.classList.remove("active");
    fondo.classList.remove("active__fondo");
});