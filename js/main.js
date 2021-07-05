// Slider
$('.header__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000
});


// SmoothScrolling
$('a.slider-btn').click(function() {
    let elementClick = $(this).attr('href')
    let destination = $(elementClick).offset().top;
    jQuery('html:not(:animated),body:not(:animated)').animate({
        scrollTop: destination
    }, 800);
    return false;
});


AOS.init({
    disable: 'phone', // Это для того, чтобы анимации не было на телефонах
    offset: 100, // После скольки пикселей начнется анимация
    duration: 800,
    once: false, // Анимация будет проигрываться не один раз
    anchorPlacement: 'top-center', // Отсчёт того, когда нужно анимировать, будет сверху
});


// Basket
window.addEventListener('DOMContentLoaded', function(){
    let basketModal = document.querySelector('.basket-bg'),
        openBasket = document.querySelector('.basket'),
        closeBasket = document.querySelector('.basket__close'),
        inner = document.querySelector('.basket__inner'),
        buttons = document.querySelectorAll('.modal-btn'),
        box = document.querySelectorAll('.box-info');

        openBasket.addEventListener('click', function(){
            basketModal.style.display = 'block';
        });

        closeBasket.addEventListener('click', function(){
            basketModal.style.display = 'none';
        });

    for (let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function() {
            let item = box[i].cloneNode(true),
                btn = item.querySelector('.button');

            btn.remove();

            inner.appendChild(item);
        });
    }
});

// Dark and light theme
$(function(){
    $('button:contains("Тёмная")').click(function(){
        $('body').css({
            //'background-color': 'rgb(17, 24, 61)'
            'background-color': 'rgb(43, 44, 77)'
        });
        $('a, p, h3').addClass('dark-theme_active');
        $('div.line-top, div.line-bottom').css({
            'background-color': '#fff'
        });
        $('button:contains("Светлая")').show(); // Появляется кнопка "Светлая"
        $('button:contains("Тёмная")').hide(); // Исчезает кнопка "Тёмная"
    });

    $('button:contains("Светлая")').click(function(){
        $('body').css({
            'background-color': '#fff',
            'color': '#000'
        });
        $('a, p, h3').removeClass('dark-theme_active');
        $('div.line-top, div.line-bottom').css({
            'background-color': '#000'
        });
        $('button:contains("Светлая")').hide();
        $('button:contains("Тёмная")').show();
    });
});
