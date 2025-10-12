// -------------------menu mobile-----------------
const buttonNav = document.getElementById("btnMenuNav");
const menu = document.getElementById("menuNav");
const imgMenu = document.querySelector(".imgMenu");
const fondo = document.querySelector(".fondo");
// --------------cart mobile----------
const buttonCart = document.getElementById("button__cart");
const boxCart = document.getElementById("box__cart");
const cartTitle = document.querySelector(".cart__title")

// -------------------------menu mobile--------
buttonNav.addEventListener("click", () => {
    
    if(buttonNav.getAttribute("aria-expanded") === "false"){
        menu.classList.add("menu__visible");
        buttonNav.setAttribute("aria-expanded", "true");
        imgMenu.setAttribute("src", "../images/icon-close.svg");
        fondo.classList.add("active");
        fondo.classList.add("active__fondo")
        document.body.style.overflow = "hidden";
        
    }else{
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
// -----------menu mobile finalizado--------------

// -------------cart mobile-----------------
buttonCart.addEventListener("click", ()=>{

    if(buttonCart.getAttribute("aria-expanded")=== "false"){
        boxCart.classList.add("cart__visible");
        buttonCart.setAttribute("aria-expanded", "true");
        cartTitle.hidden = false;
    }else{
        boxCart.classList.remove("cart__visible");
        buttonCart.setAttribute("aria-expanded", "false");
        cartTitle.hidden= true;
       

    }
})