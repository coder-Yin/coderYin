 $(function(){

    $(".mg-content").mCustomScrollbar();

     $('.mg-con').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          prevArrow:' <div class="switch-ico mg-prev"></div>',
          nextArrow:'<div class="switch-ico  mg-next"></div>'
    });

 })
