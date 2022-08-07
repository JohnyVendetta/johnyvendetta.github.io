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

wow = new WOW(
    {
        boxClass: 'wow',      // default
        animateClass: 'animated', // default
        offset: 0,          // default
        mobile: false,       // default
        live: true        // default
    }
)
wow.init();


// ===== Open Nav =====
$(".burger-wrapper").click(function () {

    // ===== If Nav is not open	
    if ($('.nav').css("display") == "none") {
        TweenMax.to(".dim", 0.5, { opacity: 1, display: 'block', ease: Power2.easeInOut });
        TweenMax.fromTo(".nav", 0.5, { xPercent: -100 },
            { xPercent: 0, display: 'block', ease: Expo.easeOut });
        TweenMax.staggerFrom('.nav li', 0.5, { opacity: 0, y: 20, ease: Power2.easeInOut }, 0.1);

        $('.logo-text').css({ 'opacity': '0', 'display': 'none' });
    }
    // ===== If Nav is open	and in Curation page
    else if ($('.nav').css("display") == "block" && $('#curator').css("display") == "block") {
        TweenMax.to(".dim", 0.5, { opacity: 0, display: 'none', ease: Power2.easeInOut });
        TweenMax.to(".nav", 0.5, { xPercent: -100, display: 'none', ease: Expo.easeOut });
        // $('.logo-text').css({'opacity': '1', 'display': 'block'});
    }

    else {
        TweenMax.to(".dim", 0.5, { opacity: 0, display: 'none', ease: Power2.easeInOut });
        TweenMax.to(".nav", 0.5, { xPercent: -100, display: 'none', ease: Expo.easeOut });
        $('.logo-text').css({ 'opacity': '1', 'display': 'block' });
    }

});


// ===== Open Player + dim on =====


$('.dim').click(function () {
    TweenMax.to(".dim", 0.5, { opacity: 0, display: 'none', ease: Power2.easeInOut });
    TweenMax.to("#player", 0.5, { xPercent: 100, display: 'none', ease: Expo.easeOut });
    TweenMax.to(".nav", 0.5, { xPercent: -100, display: 'none', ease: Power2.easeInOut })
    TweenMax.to(".mini-player", 0.5, { x: 0, ease: Expo.easeOut });
});

$('.text_a-pg1').click(function () {
    TweenMax.to(".nav", 0.5, { xPercent: -100, display: 'none', ease: Power2.easeInOut });
    TweenMax.to(".dim", 0.5, { opacity: 0, display: 'none', ease: Power2.easeInOut });


})


jQuery(document).ready(function ($) {
    var alterClass = function () {
        var ww = document.body.clientWidth;
        if (ww < 505) {
            $('.animate__animated').removeClass('animate__animated');
            $('.wow').removeClass('wow');
        }

    };
    $(window).resize(function () {
        alterClass();
    });
    //Fire it when the page first loads:
    alterClass();
});
