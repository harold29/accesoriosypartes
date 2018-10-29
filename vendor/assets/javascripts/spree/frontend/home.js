$(document).ready(function() {
  // $("#carousel-companies").carousel({
  //   wrap: false,
  // });

  $('.dropdown-submenu a.sub-link').on("click", function(e){
    console.log("MENU");
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
  });

  $('.companies-conveyor').slick({
    speed: 6500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 0,
    arrows: false,
    cssEase: 'linear',
    dots: false,
    paused: false,
    pauseOnHover: true,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 3
      }
    }]
  });

  $('.companies-slider-sub').slick({
    speed: 2500,
    slidesToShow: 9,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    arrows: false,
    cssEase: 'linear',
    dots: false,
    paused: false,
    pauseOnHover: true,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 3
      }
    }]
  });

  $('.clients-slider').slick({
    speed: 2500,
    variableWidth: true,
    slidesToShow: 9,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    arrows: false,
    cssEase: 'linear',
    dots: false,
    paused: false,
    pauseOnHover: true,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 3
      }
    }]
  });

  $('#products-featured').slick({
    speed: 6500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 0,
    arrows: true,
	variableWidth: true,
    cssEase: 'linear',
    dots: false,
    paused: true,
    pauseOnHover: true,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 3
      }
    }]
  });

  $('#products-other-models').slick({
    speed: 2500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplaySpeed: 0,
    arrows: true,
    initialSlide: 3,
	  // variableWidth: true,
    cssEase: 'linear',
    dots: false,
    paused: true,
    pauseOnHover: true,
    nextArrow: '<button type="button" class="right-arrow control-button slick-next"><span class="glyphicon flecha-icono glyphicon-menu-right" aria-hidden="true"></span></button>',
    prevArrow: '<button type="button" class="left-arrow control-button slick-prev"><span class="glyphicon flecha-icono glyphicon-menu-left" aria-hidden="true"></span></button>',
    arrows: true,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 3
      }
    }]
  });

  $('#products-other').slick({
    speed: 2500,
    slidesToShow: 5,
    slidesToScroll: 4,
    autoplaySpeed: 0,
    arrows: true,
    initialSlide: 3,
	  // variableWidth: true,
    cssEase: 'linear',
    dots: false,
    // paused: true,
    pauseOnHover: true,
    arrows: true,
    // nextArrow: '<button type="button" class="right-arrow control-button slick-next"><span class="glyphicon flecha-icono glyphicon-menu-right" aria-hidden="true"></span></button>',
    // prevArrow: '<button type="button" class="left-arrow control-button slick-prev"><span class="glyphicon flecha-icono glyphicon-menu-left" aria-hidden="true"></span></button>',
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 3
      }
    }]
  });

  var aboveHeight = $('#header').outerHeight();
  $(window).scroll(function(){
  	if ($(window).scrollTop() > aboveHeight){
  	$('#header').addClass('fixed').next().css('margin-top','0px');
  	$('#image-logo-menu').addClass('image-logo-menu-fixed').next().css('margin-top','0px');
  	$('#search-menu').addClass('image-logo-menu-fixed').next().css('margin-top','0px');
  	$('#phone-menu').addClass('image-logo-menu-fixed').next().css('margin-top','0px');
  	$('#phone-fixed').addClass('phone-fixed-total').next().css('margin-top','0px');

  	} else {
  	$('#header').removeClass('fixed').next().css('margin-top','0');
  	$('#image-logo-menu').removeClass('image-logo-menu-fixed').next().css('margin-top','0');
      $('#search-menu').removeClass('image-logo-menu-fixed').next().css('margin-top','0');
  	$('#phone-menu').removeClass('image-logo-menu-fixed').next().css('margin-top','0');
  	$('#phone-fixed').removeClass('phone-fixed-total').next().css('margin-top','0');

      }
  });
  });

  $('a[href*="#"]:not([href="#"]):not([href="#show"]):not([href="#hide"])').click(function() {
  		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
  			var target = $(this.hash);
  			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
  			if (target.length) {
  				$('html,body').animate({
  					scrollTop: target.offset().top
  				}, 1000);
  				return false;
  			}
  		}
  	});



  // $('.dropdown-submenu a.test').on("click", function(e){
  //   console.log("FOR TWO LEVELS")
  //   $(this).next('ul').toggle();
  //   e.stopPropagation();
  //   e.preventDefault();
  // });

  var item = $(".desenfoque");
  // agrego la clase blur a todos los 'ítem' que NO sea al que le se le esta aplicando el evento 'hover'
  item.hover(function() {
  document.getElementById("slider").style.filter="blur(10px)";
  // al perder el foco, retiro la clase a todos los 'item'
  }, function() {
  document.getElementById("slider").style.filter="blur(0px)";
  console.log("CAROUSEL WRAP");

});
