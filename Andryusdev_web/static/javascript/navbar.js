document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.navbar__toggle');
    const menu = document.querySelector('.navbar__menu-contenedor');
    
    toggleButton.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
});