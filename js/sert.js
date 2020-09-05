$(() => {

  $('.sert__slider').slick({
    slidesToShow: 4,
    arrows: true,
    infinite: true,
    infinite: true,
  });


  $('.sert__slider').on('mouseenter', function(){
    $('.slick-next').toggleClass('show');
    $('.slick-prev').toggleClass('show');
  }).on('mouseleave', function(){
    $('.slick-next').toggleClass('show');
    $('.slick-prev').toggleClass('show');
  });

})