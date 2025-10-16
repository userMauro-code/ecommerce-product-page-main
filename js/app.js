// -------------------menu mobile-----------------
const buttonNav = document.getElementById("btnMenuNav");
const menu = document.getElementById("menuNav");
const imgMenu = document.querySelector(".imgMenu");
const fondo = document.querySelector(".fondo");
// --------------cart mobile----------
const buttonCart = document.getElementById("button__cart");
const boxCart = document.getElementById("box__cart");
const cartTitle = document.querySelector(".cart__title");
// ---------------imagenes----------
const arrowPevious = document.querySelector(".arrow__previous");
const arrowNext = document.querySelector(".arrow__next");
const arrow = document.querySelector(".arrow");
const imgPrincipal = document.querySelector(".img__gallery");


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
});

// ---------------cart mobile finalizado------------------

// -------------galeria---------------

let imagenesArray = [
    "../images/image-product-1.jpg", 
    "../images/image-product-2.jpg", 
    "../images/image-product-3.jpg", 
    "../images/image-product-4.jpg"
];

let indiceActual = 0;
imgPrincipal.src = imagenesArray[indiceActual];

arrowNext.addEventListener("click", () => {
    indiceActual = indiceActual + 1;
    
    if(indiceActual >= imagenesArray.length){
        indiceActual = 0
    }
    imgPrincipal.src = imagenesArray[indiceActual];    
});

arrowPevious.addEventListener("click", () => {
    indiceActual = indiceActual - 1;
    
    if(indiceActual < 0){
        indiceActual = imagenesArray.length - 1;
    }
    imgPrincipal.src = imagenesArray[indiceActual];
});

