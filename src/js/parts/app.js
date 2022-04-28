import 'slick-carousel';

export class App{

  init() {

    // hero slider
    $('.hero-slider').slick({
      dots: true,
      arrows: false,
      infinite: true,
      speed: 300,
      autoplay: true,
      slidesToShow: 1,
      responsive: [
          {
              breakpoint: 768,
              settings: {
                adaptiveHeight: true,
                dots: false,
              }
          }
      ]
  });


    // testimonial slider
    $('.testimonial-slider').slick({
      dots: true,
      arrows: false,
      infinite: true,
      speed: 300,
    //   autoplay: true,
      slidesToShow: 1,
      responsive: [
          {
              breakpoint: 768,
              settings: {
                adaptiveHeight: true,
              }
          }
      ]
  });


  /* related products slider */
  $('.logos-slider').slick({
      dots: false,
      arrows: false,
      infinite: true,
      speed: 400,
      autoplay: true,
      slidesToShow: 6,
      responsive: [
          {
              breakpoint: 1200,
              settings: {
                  slidesToShow: 5,
                  arrows: false,
              }
          },
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 4,
              }
          },
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 3,
              }
          },
          {
              breakpoint: 480,
              settings: {
                  slidesToShow: 2,
              }
          }
      ]
  });



  }

  slickSLider (){

  }

}