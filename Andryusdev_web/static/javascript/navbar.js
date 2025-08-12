document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.navbar__toggle');
    const menu = document.querySelector('.navbar__menu-contenedor');
    const overlay = document.querySelector('.navbar__overlay');
    let wasMenuOpen = false;
    
    function closeMenu() {
        menu.classList.remove('active');
        overlay.classList.remove('active');
    }

    function handleResize() {
        const isMobile = window.innerWidth <= 868;
        if (!isMobile) {
            closeMenu();
        } else {
            if (wasMenuOpen) {
                closeMenu();
            }
    } 
        
    }
    toggleButton.addEventListener('click', function() {
        menu.classList.toggle('active');
        overlay.classList.toggle('active');
    });

    document.querySelector('.navbar__overlay').addEventListener('click', function() {
    if(this.classList.contains('active')) {
        document.querySelector('.navbar__menu-contenedor').classList.remove('active');
        this.classList.remove('active');
        }
    });

    // Evento overlay
    overlay.addEventListener('click', closeMenu);

    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(handleResize, 100);
    });
    handleResize();
});