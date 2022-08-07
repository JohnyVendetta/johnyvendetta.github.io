SmoothScroll({
    // Время скролла 400 = 0.4 секунды
    animationTime: 400,
    // Размер шага в пикселях 
    stepSize: 97.5,

    // Дополнительные настройки:

    // Ускорение 
    accelerationDelta: 0,
    // Максимальное ускорение
    accelerationMax: 0,

    // Поддержка клавиатуры
    keyboardSupport: true,
    // Шаг скролла стрелками на клавиатуре в пикселях
    arrowScroll: 50,

    // Pulse (less tweakable)
    // ratio of "tail" to "acceleration"
    pulseAlgorithm: true,
    pulseScale: 4,
    pulseNormalize: 1,

    // Поддержка тачпада
    touchpadSupport: true,
})

//Плавний скрол
// Put all links in a variable
const links = document.querySelectorAll('.js-scroll');

// Add event listener to all links
links.forEach(function (elem) {
    elem.addEventListener('click', smoothScroll)
});

// Magic function to scroll smooth!
function smoothScroll(e) {
    // Prevent default anchor behaviour
    e.preventDefault();

    // Get clicked links href attribute
    const link = this.getAttribute("href");

    // Get the targets position
    const offsetTop = document.querySelector(link).offsetTop;

    // Finally scroll to target
    scroll({
        top: offsetTop,
        behavior: "smooth"
    });
}

new WOW().init();

$(function () {


    $('.menu__btn').on('click', function () {
$('.top_menu').slideToggle();
    });

});