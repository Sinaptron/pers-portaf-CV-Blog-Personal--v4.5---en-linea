'use strict';

// toggle function - alternar elementos
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// variables de la barra lateral - despliega info con boton flecha
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// barra lateral alternar con functionalidad para moviles
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });


// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}


// FINAL DE CODIGOS DE ACTIVACION PARA EVITAR COPIA DE CODIGO

// Bloquear clic derecho

document.addEventListener("contextmenu", function (event) {
  event.preventDefault(); // Bloquea clic derecho
});


// Bloquear teclas como F12, Ctrl+U, Ctrl+Shift+I  Ctrl+Shift+J =metodo 03
// en caso de que ctrl+U no bloquee, pegar sig codigo, para redireccionar a otro sitio

document.onkeydown = function (event) {
  if (event.ctrlKey && event.key === "u") {
    window.location.href = "https://www.google.com"; // Redirige a otro sitio
    return false;
  }
};


// Bloquear el acceso al mapa si detectan herramientas de desarrollador
// cerrar la página si alguien abre las herramientas de inspección:

setInterval(function () {
  if (
    window.outerHeight - window.innerHeight > 100 ||
    window.outerWidth - window.innerWidth > 100
  ) {
    document.body.innerHTML = "";
    alert("Inspeccionar está deshabilitado.");
    window.location.href = "https://www.google.com";
  }
}, 1000);


// FINAL DE CODIGOS DE ACTIVACION PARA EVITAR COPIA DE CODIGO

