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

// PROTECCIÓN AGRESIVA CONTRA INSPECCIÓN DE CÓDIGO
(function() {
    'use strict';

    // Variables de control
    let devToolsDetected = false;
    let warningCount = 0;
    const maxWarnings = 3;

    // Función para redirigir o cerrar
    function blockAccess(message) {
        alert(message || "⚠️ Acceso denegado. Contacta al administrador.");
        // Opciones: redirigir o cerrar
        window.location.href = 'index.html'; // Redirigir al inicio
        // window.close(); // O cerrar la ventana
    }

    // Detectar herramientas de desarrollador abiertas (método avanzado)
    function detectDevTools() {
        const widthThreshold = window.outerWidth - window.innerWidth > 160;
        const heightThreshold = window.outerHeight - window.innerHeight > 160;
        
        // Método adicional: detección por timing
        const start = performance.now();
        debugger; // Si las dev tools están abiertas, esto pausará
        const end = performance.now();
        
        if (widthThreshold || heightThreshold || (end - start) > 100) {
            if (!devToolsDetected) {
                devToolsDetected = true;
                warningCount++;
                if (warningCount >= maxWarnings) {
                    blockAccess("Demasiados intentos de inspección detectados.");
                } else {
                    alert(`⚠️ Herramientas de desarrollador detectadas. Advertencia ${warningCount}/${maxWarnings}`);
                }
            }
        } else {
            devToolsDetected = false;
        }
    }

    // BLOQUEO MASIVO DE TECLAS
    document.addEventListener("keydown", function(event) {
        const isInputField = event.target.tagName === 'INPUT' || 
                           event.target.tagName === 'TEXTAREA' || 
                           event.target.contentEditable === 'true';

        // Lista completa de teclas bloqueadas
        const blockedKeys = [
            'F12', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11'
        ];

        // Combinaciones bloqueadas
        const blockedCombinations = [
            // Herramientas de desarrollador
            (event.ctrlKey && event.shiftKey && event.key === 'I'),
            (event.ctrlKey && event.shiftKey && event.key === 'J'),
            (event.ctrlKey && event.shiftKey && event.key === 'C'),
            (event.ctrlKey && event.key === 'U'), // Ver código fuente
            (event.ctrlKey && event.key === 'S'), // Guardar página
            (event.ctrlKey && event.shiftKey && event.key === 'S'), // Guardar como
            (event.ctrlKey && event.key === 'P'), // Imprimir
            (event.ctrlKey && event.key === 'A' && !isInputField), // Seleccionar todo
            (event.ctrlKey && event.key === 'C' && !isInputField), // Copiar
            (event.ctrlKey && event.key === 'V' && !isInputField), // Pegar
            (event.ctrlKey && event.key === 'R'), // Recargar
            (event.ctrlKey && event.shiftKey && event.key === 'R'), // Recargar forzado
            (event.altKey && event.key === 'Tab'), // Alt+Tab
            (event.ctrlKey && event.key === 'W'), // Cerrar pestaña
            (event.ctrlKey && event.shiftKey && event.key === 'Delete'), // Abrir task manager
        ];

        // Si es campo de entrada, solo bloquear teclas específicas de dev tools
        if (isInputField) {
            if (blockedKeys.includes(event.key) ||
                (event.ctrlKey && event.shiftKey && ['I', 'J', 'C'].includes(event.key)) ||
                (event.ctrlKey && event.key === 'U')) {
                event.preventDefault();
                event.stopPropagation();
                alert("⚠️ Acción bloqueada por seguridad");
                return false;
            }
        } else {
            // Para otros elementos, bloquear más agresivamente
            if (blockedKeys.includes(event.key) || blockedCombinations.some(combo => combo)) {
                event.preventDefault();
                event.stopPropagation();
                alert("⚠️ Acción bloqueada por seguridad");
                return false;
            }
        }
    });

    // BLOQUEO TOTAL DE CLIC DERECHO
    document.addEventListener('contextmenu', function(event) {
        event.preventDefault();
        event.stopPropagation();
        alert("⚠️ Clic derecho deshabilitado por seguridad");
        return false;
    }, true);

    // BLOQUEO DE SELECCIÓN DE TEXTO
    document.addEventListener('selectstart', function(event) {
        if (event.target.tagName !== 'INPUT' && event.target.tagName !== 'TEXTAREA') {
            event.preventDefault();
            return false;
        }
    });

    // BLOQUEO DE ARRASTRAR
    document.addEventListener('dragstart', function(event) {
        event.preventDefault();
        return false;
    });

    // DESHABILITAR CONSOLE
    Object.defineProperty(window, 'console', {
        value: {
            log: function() { blockAccess("Acceso a consola bloqueado"); },
            warn: function() { blockAccess("Acceso a consola bloqueado"); },
            error: function() { blockAccess("Acceso a consola bloqueado"); },
            info: function() { blockAccess("Acceso a consola bloqueado"); },
            debug: function() { blockAccess("Acceso a consola bloqueado"); },
            clear: function() { blockAccess("Acceso a consola bloqueado"); },
            table: function() { blockAccess("Acceso a consola bloqueado"); },
            trace: function() { blockAccess("Acceso a consola bloqueado"); },
            dir: function() { blockAccess("Acceso a consola bloqueado"); },
            dirxml: function() { blockAccess("Acceso a consola bloqueado"); },
            group: function() { blockAccess("Acceso a consola bloqueado"); },
            groupEnd: function() { blockAccess("Acceso a consola bloqueado"); },
            time: function() { blockAccess("Acceso a consola bloqueado"); },
            timeEnd: function() { blockAccess("Acceso a consola bloqueado"); },
            assert: function() { blockAccess("Acceso a consola bloqueado"); },
            count: function() { blockAccess("Acceso a consola bloqueado"); }
        },
        writable: false,
        configurable: false
    });

    // DETECCIÓN CONTINUA DE DEV TOOLS
    setInterval(detectDevTools, 100);

    // PROTECCIÓN CONTRA DEBUGGER
    setInterval(function() {
        try {
            debugger;
        } catch(e) {}
    }, 1000);

    // BLOQUEAR ACCESO A CÓDIGO FUENTE
    document.addEventListener('keyup', function(event) {
        if (event.key === 'F12' || 
            (event.ctrlKey && event.key === 'u') ||
            (event.ctrlKey && event.shiftKey && event.key === 'I')) {
            blockAccess("Intento de acceso al código fuente detectado");
        }
    });

    // PROTECCIÓN ADICIONAL CONTRA HERRAMIENTAS
    Object.defineProperty(window, 'DevTools', {
        get: function() {
            blockAccess("Herramientas de desarrollador detectadas");
        },
        set: function() {
            blockAccess("Herramientas de desarrollador detectadas");
        }
    });

    // BLOQUEAR COPY DE CÓDIGO
    document.addEventListener('copy', function(event) {
        const selection = window.getSelection().toString();
        if (selection.length > 50 && event.target.tagName !== 'INPUT' && event.target.tagName !== 'TEXTAREA') {
            event.preventDefault();
            event.clipboardData.setData('text/plain', '❌ CONTENIDO PROTEGIDO ❌');
            alert("⚠️ Copia de contenido bloqueada");
        }
    });

    // DETECTAR CAMBIOS EN EL DOM (en caso de que alguien trate de modificar el código)
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList' || mutation.type === 'attributes') {
                // Si detecta cambios sospechosos
                console.warn("Cambios detectados en el DOM");
            }
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true
    });

    // MENSAJE INICIAL
    window.addEventListener('load', function() {
        console.clear();
        console.log("%c🛡️ PROTECCIÓN ACTIVA", "color: red; font-size: 24px; font-weight: bold; text-shadow: 2px 2px 4px #000;");
        console.log("%c⚠️ Este sitio está bajo protección avanzada", "color: orange; font-size: 16px; font-weight: bold;");
        console.log("%c❌ Cualquier intento de inspección será bloqueado", "color: red; font-size: 14px;");
    });

    // PROTECCIÓN FINAL: LIMPIAR SCRIPTS DESPUÉS DE CARGAR
    setTimeout(function() {
        const scripts = document.querySelectorAll('script');
        scripts.forEach(function(script) {
            if (script.innerHTML.includes('detectDevTools') || 
                script.innerHTML.includes('blockAccess')) {
                // No eliminar el script de protección, pero sí ocultar su contenido
                script.style.display = 'none';
            }
        });
    }, 3000);

})();

// PROTECCIÓN ADICIONAL EN EL HTML
// Agregar esto al HTML: <body oncontextmenu="return false" onselectstart="return false" ondragstart="return false">

// ESTILO CSS ADICIONAL PARA BLOQUEAR SELECCIÓN
const antiSelectStyle = document.createElement('style');
antiSelectStyle.innerHTML = `
    body {
        -webkit-user-select: none !important;
        -moz-user-select: none !important;
        -ms-user-select: none !important;
        user-select: none !important;
        -webkit-touch-callout: none !important;
        -webkit-tap-highlight-color: transparent !important;
    }
    
    input, textarea {
        -webkit-user-select: text !important;
        -moz-user-select: text !important;
        -ms-user-select: text !important;
        user-select: text !important;
    }
    
    /* Ocultar contenido si se detectan dev tools */
    @media screen and (max-width: 1px) {
        body { display: none !important; }
    }
`;
document.head.appendChild(antiSelectStyle);

// FINAL DE CODIGOS DE ACTIVACION PARA EVITAR COPIA DE CODIGO



//BLOQUEO DESCARGA DE IMAGENES Y VISUALIZACION DE CODIGO FUENTE
// Bloquear teclas como F12, Ctrl+U, Ctrl+Shift+I

// document.addEventListener("keydown", function (event) {
//     Bloquea F12, Ctrl+U, Ctrl+Shift+I
//   if (
//     event.key === "F12" ||
//     (event.ctrlKey && event.shiftKey && event.key === "I") ||
//     (event.ctrlKey && event.key === "U")
//   ) {
//     event.preventDefault();
//   }
// });

// codigo de arriba validar si al descomentar se ejecutan los script de proteccion o bloquea algunos movimientos





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
// OJO con esto: window.innerHeight > 250 aumentar si provoca que muestre mensaje al ampliar pagina web

setInterval(function () {
  if (
    window.outerHeight - window.innerHeight > 250 ||
    window.outerWidth - window.innerWidth > 250
  ) {
    document.body.innerHTML = "";
    alert("Inspeccionar está deshabilitado.");
    window.location.href = "https://www.google.com";
  }
}, 1000);