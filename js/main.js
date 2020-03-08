$(function(){

    $('.slick-slider').slick({
        dots: false,
        // arrows: false,
        infinite: true,
        adaptiveHeight: true,
        speed: 500,
        // fade: true,
        cssEase: 'linear',
        prevArrow: '<span class="slick-prev"><img src="img/icons/arrow-left.png" alt=""></span>',
        nextArrow: '<span class="slick-next"><img src="img/icons/arrow-left.png" alt=""></span>',
      });

      $('.slider-testimonials').slick({
        dots: true,
        arrows: false,
        infinite: true,
        adaptiveHeight: true,
        speed: 500,
        // fade: true,
        cssEase: 'linear',

      });


  
});