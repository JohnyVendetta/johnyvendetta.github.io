(function () {
    const burger = document.querySelector('.button-burger-hidden');
    const navactive = document.querySelector('.burger-nav');
    const active_text1 = document.querySelector('port-list')

    burger.addEventListener('click', () => {
burger.classList.toggle('burger_active')
navactive.classList.toggle('nav_activee');

    });

}());


var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({triggerElement: "#trigger"})
// trigger a velocity opaticy animation
.setClassToggle(".button-burger-hidden", "scalep")
.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: "#trigger2"})
// trigger a velocity opaticy animation
.setClassToggle(".button-burger-hidden", "scalep2")
.addTo(controller);


var scene = new ScrollMagic.Scene({triggerElement: "#trigger34"})
// trigger a velocity opaticy animation
.setClassToggle(".logo_text", "logo_text22")
.addTo(controller);


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
