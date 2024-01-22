const mainImage = document.getElementById("main-image");
const imageMenu = document.getElementById("header-icon-menu");
const mobileMenu = document.getElementById("mobile-menu");
const menuCloseBtn = document.getElementById("menu-close-btn");
let windowWidth = window.innerWidth; //Gets the width of the viewport
const MOBILE_BREAKPOINT = 375;

// Función para verificar y actualizar la imagen principal según el ancho de la ventana
const checkWindowSize = () => {
  windowWidth <= MOBILE_BREAKPOINT
    ? (mainImage.src = "/assets/images/image-web-3-mobile.jpg")
    : (mainImage.src = "/assets/images/image-web-3-desktop.jpg");
};

// Evento para ocultar el menú móvil al cargar la página en pantallas más grandes
document.addEventListener("DOMContentLoaded", function () {
  if (windowWidth >= MOBILE_BREAKPOINT) {
    mobileMenu.style.display = "none";
  }
});

// Función para abrir el menú móvil
const openMenu = () => {
  mobileMenu.style.display = "block";
};

//Función para cerrar el menú movil
const hideMenu = () => {
  mobileMenu.style.display = "none";
};
