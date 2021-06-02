$(function(){

  $('.header__btn').on('click',function(){
    $('.header__box').toggleClass('header__box--active');
  });

  $('.menu__list-link').on('click', function(){
    $('.header__box').removeClass('header__box--active');
  });

  $('.slider__items').slick({
    dots: true,
    responsive: [
      {
        breakpoint: 451,
        settings: {
          arrows: false
        }
      }
    ]
  });

  $(".menu a, .footer__logo").on("click", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //забираем идентификатор блока с атрибута href
    var id = $(this).attr('href'),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({ scrollTop: top }, 1500);
  });

  // $(window).scroll(function () {
  //   var top = $(document).scrollTop();
  //   if (top < 500) $(".header__wrapper").css({ top: '0', position: 'relative', background: 'transparent' });
  //   else $(".header__wrapper").css({ top: '0', position: 'fixed', background: 'rgba(0, 0, 0, 0.7)' });
  // });

});