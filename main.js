document.addEventListener('DOMContentLoaded', function() {
    const buttonMenu = document.querySelector('.mobile-navigation__header-button');
    const mobileNavigation = document.querySelector('.mobile-navigation');
    
    buttonMenu.addEventListener('click', function() {
        mobileNavigation.classList.toggle('opened');
    });
    
    // Закрытие меню при клике на ссылки
    const menuLinks = document.querySelectorAll('.mobile-navigation .navigation__list a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileNavigation.classList.remove('opened');
        });
    });
});