document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.navbar__toggle');
    const menu = document.querySelector('.navbar__menu-contenedor');
    const opacidad = document.querySelector('.navbar__overlay');
    
    toggleButton.addEventListener('click', function() {
        menu.classList.toggle('active');
        opacidad.classList.toggle('active');
    });

    document.querySelector('.navbar__overlay').addEventListener('click', function() {
    if(this.classList.contains('active')) {
        document.querySelector('.navbar__menu-contenedor').classList.remove('active');
        this.classList.remove('active');
        }
    });
});