// -------------------menu mobile-----------------
const buttonNav = document.getElementById("btnMenuNav");
const menu = document.getElementById("menuNav");
const imgMenu = document.querySelector(".imgMenu");
const fondo = document.querySelector(".fondo");
// --------------cart mobile----------
const buttonCart = document.getElementById("button__cart");
const buttonAddToCart = document.querySelector(".button__addCart");
const boxCart = document.getElementById("box__cart");
const cartTitle = document.querySelector(".cart__title");
const deleteP = document.querySelector(".deleteP")
const cartNumber = document.querySelector(".cart__number");
const numberCart = document.querySelector(".total__cart");

// ---------------imagenes----------
const arrowPevious = document.querySelector(".arrow__previous");
const arrowNext = document.querySelector(".arrow__next");
const imgPrincipal = document.querySelector(".img__gallery");
// ------------imput----------------
const inputNumber = document.querySelector("input[type='number']");
const btnMinus = document.querySelector(".btn__minus");
const btnPlus = document.querySelector(".btn__plus");
// ----------------light box--------------------
const lightBox = document.querySelector(".lightbox");
const clickImg = document.querySelector(".img__gallery");
const overlay = document.querySelector(".lightbox__overlay");


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

const thumbails = document.querySelectorAll(".thumb");

thumbails.forEach((thumb, index)=>{
    thumb.addEventListener("click", ()=> {
        thumbails.forEach(t => t.classList.remove("selected"));
        thumb.classList.add("selected");
        imgPrincipal.src = imagenesArray[index];
    });
});

// ----------------galeria finalizada-------------

// -----------input---------------------

let valor = Number(0);

btnMinus.addEventListener("click", () => {
    if(valor > 0){
        valor = valor - 1;
    }
    inputNumber.value = valor
})

btnPlus.addEventListener("click", () => {
    valor = valor + 1;
    inputNumber.value = valor;
});

// ---------------cart style--------

buttonAddToCart.addEventListener("click", () => {
    let precio = 125;
    const idProduct = "Sneakers-1";
    
    if(valor === 0 && existingItem){
        existingItem.remove();
        numberCart.style.display = "none";
        deleteP.hidden = false;
        return;
    };

    if(valor === 0) {
        return;
    };
    
    if(valor >= 1){
        let producto = {
            nombre: "Fall Limited Edition Sneakers",
            total: precio * valor
        };
        const existingItem = document.querySelector(`[data-id="${idProduct}"]`);

 

        if(existingItem){
            const priceStrong = existingItem.querySelector(".price__strong");
            const qtyText = existingItem.querySelector(".qty");

            let currentQty = Number(qtyText.textContent);
            let newQty = currentQty + valor;

            qtyText.textContent = newQty;
            const newTotal = precio * newQty;
            priceStrong.textContent = `$${newTotal.toFixed(2)}`;

            numberCart.textContent= newQty;
            return;
        }else{
        
        const item = document.createElement("div");
        item.classList.add("cart__item");
        item.setAttribute("data-id", idProduct);
        
        const imgItem = document.createElement("img");
        imgItem.setAttribute("src", "../images/image-product-1-thumbnail.jpg");
        imgItem.setAttribute("alt", "Fall Limited Edition Sneakers");

        const infDiv = document.createElement("div");

        const nameP = document.createElement("p");
        nameP.textContent = "Fall Limited Edition Sneakers";

        const precioProduct = document.createElement("p");
        let totalPrice = precio * valor;
        precioProduct.innerHTML = `$${precio.toFixed(2)} X <span class="qty">${valor}</span> `; 

        const totalStrong = document.createElement("strong");
        totalStrong.classList.add("price__strong")
        totalStrong.textContent = `$${totalPrice.toFixed(2)}`;
        precioProduct.appendChild(totalStrong);

        infDiv.appendChild(nameP);
        infDiv.appendChild(precioProduct);

        // ---------boton eliminar--------
        const btnDelete = document.createElement("button");
        btnDelete.classList.add("btn__delete");

        const imgDelete = document.createElement("img");
        imgDelete.setAttribute("src", "../images/icon-delete.svg");
        imgDelete.setAttribute("alt", "Delete product");
        btnDelete.appendChild(imgDelete);


        item.appendChild(imgItem);
        item.appendChild(infDiv);
        item.appendChild(btnDelete);

        const cartProduct = document.querySelector(".cart__content");
        cartProduct.appendChild(item);

        const btnCheckout = document.querySelector(".btnCheck");
        btnCheckout.classList.add("btn__check");
        btnCheckout.hidden = false;

        btnDelete.addEventListener("click", ()=> {
            item.remove();
            btnCheckout.hidden = true;
            numberCart.style.display= "none";
            deleteP.hidden= false;
            inputNumber.value= 0;
            valor=0;
        });

        numberCart.style.display = "block";
        numberCart.textContent = valor;
        deleteP.hidden= true;
        
    }
    }else{
        numberCart.style.display = "none";
        deleteP.hidden= false;
}
});

// --------------------------overlay--------------------
const closeOverlay = document.querySelector(".lightbox__close");

clickImg.addEventListener("click", ()=> {
    if(window.innerWidth < 900) return;

    lightBox.hidden = false;
    lightBox.style.display = "flex";
    overlay.classList.add("overlay");
})

closeOverlay.addEventListener("click", ()=> {
    lightBox.hidden = true;
    lightBox.style.display = "none"
});

const btnPrevious = document.querySelector(".lightbox__previous");
const btnNext = document.querySelector(".lightbox__next");
const overlayPrincipal = document.querySelector(".img__over");

let imgLightbox = [
    "../images/image-product-1.jpg",
    "../images/image-product-2.jpg",
    "../images/image-product-3.jpg",
    "../images/image-product-4.jpg"
];
let indiceOverlay = 0;
overlayPrincipal.src = imgLightbox[indiceOverlay];

btnNext.addEventListener("click", ()=> {
    indiceOverlay = indiceOverlay + 1;
    if(indiceOverlay >= imgLightbox.length){
        indiceOverlay = 0;
    };
    overlayPrincipal.src = imgLightbox[indiceOverlay];
});

btnPrevious.addEventListener("click", ()=> {
    indiceOverlay = indiceOverlay - 1;
    if(indiceOverlay < 0){
        indiceOverlay = imgLightbox.length - 1;
    };
    overlayPrincipal.src = imgLightbox[indiceOverlay];
});

const thumbOverlay = document.querySelectorAll(".img__thumb");

thumbOverlay.forEach((overT, indexO)=> {
    overT.addEventListener("click", () => {
        thumbOverlay.forEach(O => O.classList.remove("selected"));
        overT.classList.add("selected");
        overlayPrincipal.src = imgLightbox[indexO];
    });
});

