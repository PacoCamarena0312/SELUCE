/**
 * LUBRITECH PRO - Funciones de Interactividad
 * Este script controla el comportamiento visual de la navegación
 */

window.addEventListener('scroll', function() {
    const header = document.querySelector('.navbar');
    
    // Cambia la apariencia de la barra de navegación al hacer scroll (más de 50px)
    if (window.scrollY > 50) {
        header.style.background = '#ffffff';
        header.style.padding = '0.8rem 5%';
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
    } else {
        // Estado original al estar en el tope de la página
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.padding = '1rem 5%';
        header.style.boxShadow = 'none';
    }
});

// Validación simple de clics en menú para asegurar el cierre (útil en móviles)
const navLinks = document.querySelectorAll('.nav-links li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        console.log(`Navegando a: ${link.getAttribute('href')}`);
    });
});