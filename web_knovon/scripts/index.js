    $(document).ready(function () {
  //     setTimeout(function() {
  //   $('.loader').addClass('d-none');
  // }, 2000);
      var owllogo = $('.owl-carousel_logo');
      var owlCulture = $('.owl-carousel_Culture');
      var owl = $('.owl-carousel_Case');
      var owlbanner = $('.owl-carousel_banner');
      owllogo.owlCarousel({
        items: 4,
        loop: true,
        margin: 4,
        autoplay: true,
        slideSpeed: 800,
        autoPlay: 6000,
        smartSpeed: 2000,
        responsive: {
          0: {
            items: 2
          },
          600: {
            items: 4
          }
        }
      });
      owlCulture.owlCarousel({
        center: false,
        items: 4,
        loop: true,
        autoplay: true,
        slideSpeed: 800,
        autoPlay: 10000,
        smartSpeed: 2000,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 4
          }
        }
      });
      owl.owlCarousel({
        autoplayHoverPause:true,
        items: 1,
        autoplay: false,
        loop: true,
        slideSpeed: 800,
        autoPlay: 10000,
        smartSpeed: 2000,

      });
      owlbanner.owlCarousel({
        stagePadding: 0,
        margin: 0,
        items: 1,
        loop: true,
        autoplay: true,
        slideSpeed: 1000,
        smartSpeed: 2000,
        nav: true,
        navText: [" ", "<img src='assets/img/next-btn.png' class='next-btn'>"],

      });
      // owl.on("mousewheel", ".owl-stage", function (e) {
      //     if (e.originalEvent.wheelDelta > 0) {
      //       owl.trigger("next.owl");
      //     } else {
      //       owl.trigger("prev.owl");
      //     }
      //     e.preventDefault();
      //   });
      AOS.init({});

    $(window).on('scroll',function () {
        if ($(this).scrollTop() > 70) {
          $('nav').addClass('shade',200);
        } else {
          $("nav").removeClass("shade",200);
  
        }
      });
      $('.scroll_top').hide()
      $(window).scroll(function() {  
        var scrollHeight = window.scrollY || $(window).scrollTop();                                          
            if ((window.innerHeight + scrollHeight) >= document.body.offsetHeight) {                       
        $('.scroll_top').show()                                             
            }       
            else{
              $('.scroll_top').hide()
            }                                                                                                         
    });
    });
