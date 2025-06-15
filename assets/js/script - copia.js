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
// const form = document.querySelector("[data-form]");
// const formInputs = document.querySelectorAll("[data-form-input]");
// const formBtn = document.querySelector("[data-form-btn]");

// CODIGO DEL FORMULARIO FORMSPREE
  window.addEventListener("DOMContentLoaded", function () {
    const forms = document.querySelectorAll("form[data-formspree]");
    forms.forEach(form => {
      form.addEventListener("submit", function (event) {
        event.preventDefault();
        const data = new FormData(form);
        fetch(form.action, {
          method: form.method,
          body: data,
          headers: {
            'Accept': 'application/json'
          }
        }).then(response => {
          if (response.ok) {
            window.location.href = form.dataset.redirect;
          } else {
            alert("Hubo un problema al enviar el formulario.");
          }
        }).catch(error => {
          alert("Error de conexión.");
        });
      });
    });
  });

// FINALIZA CODIGO DEL FORMULARIO FORMSPREE


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

// INICIO CODIGOS DE ACTIVACION PARA EVITAR COPIA DE CODIGO


// Bloquear clic derecho (excepto en campos de formulario)
document.addEventListener("contextmenu", function (event) {
  const isFormElement = event.target.tagName === 'INPUT' || 
                       event.target.tagName === 'TEXTAREA' || 
                       event.target.tagName === 'SELECT';
  
  if (!isFormElement) {
    event.preventDefault();
    // Opcional: mostrar mensaje educativo
    alert("El clic derecho está deshabilitado para proteger el contenido");
  }
});

// Bloquear arrastre de imágenes
document.addEventListener("dragstart", function (event) {
  if (event.target.tagName === 'IMG') {
    event.preventDefault();
  }
});

// Bloquear teclas de desarrollo (excepto en formularios)
document.addEventListener("keydown", function (event) {
  const isFormElement = event.target.tagName === 'INPUT' || 
                       event.target.tagName === 'TEXTAREA' || 
                       event.target.tagName === 'SELECT';
  
  // Si está en un formulario, permitir todo
  if (isFormElement) return;
  
  // Bloquear combinaciones de teclas para dev tools
  if (
    event.key === "F12" ||
    (event.ctrlKey && event.shiftKey && event.key === "I") ||
    (event.ctrlKey && event.shiftKey && event.key === "J") ||
    (event.ctrlKey && event.key === "U")
  ) {
    event.preventDefault();
    // Opcional: redirigir o mostrar mensaje
    alert("Acceso restringido");
  }
});

// Bloquear selección de texto (opcional, excepto en formularios)
document.addEventListener("selectstart", function (event) {
  const isFormElement = event.target.tagName === 'INPUT' || 
                       event.target.tagName === 'TEXTAREA';
  
  if (!isFormElement) {
    event.preventDefault();
  }
});

// CSS para prevenir selección (aplicado dinámicamente)
const antiCopyStyle = document.createElement('style');
antiCopyStyle.innerHTML = `
  body {
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
  }
  input, textarea, [contenteditable="true"] {
    user-select: text !important;
    -webkit-user-select: text !important;
    -moz-user-select: text !important;
    -ms-user-select: text !important;
  }
`;
document.head.appendChild(antiCopyStyle);


// FINAL DE CODIGOS DE ACTIVACION PARA EVITAR COPIA DE CODIGO