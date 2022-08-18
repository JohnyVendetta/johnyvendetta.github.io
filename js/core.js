(function () {
    const burger = document.querySelector('.button-burger-hidden');
    const navactive = document.querySelector('.burger-nav');
    const active_text1 = document.querySelector('port-list')

    burger.addEventListener('click', () => {
burger.classList.toggle('burger_active')
navactive.classList.toggle('nav_activee');

    });

}());