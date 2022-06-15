$(document).ready(function(){
	// Slider-area owl-carousel js active //
	$(".sliders").owlCarousel({
	  'items': 1,
	  'loop': true
	  
	});
	
	// Testimonial-area active //
	$(".testimonials").owlCarousel({
	  'items': 3,
	  'loop': true,
	  'autoplay': true,
	  'margin': 30,
	  center: true,
	   responsive:{
        0:{
            items:1
        },
        750:{
            items:2
        },
        1000:{
            items:3
        }
    }
	  
	});
	
	// init Isotope
	var $grid = $('.portfolio-items').isotope();
	// filter items on menu click
	$('.portfolio-menu').on( 'click', 'li', function() {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
	});
	// filter items menu active
	$('.portfolio-menu').on( 'click', 'li', function() {
		$(this).addClass('active').siblings().removeClass('active');
	});
	
	
	// DIDN'T WORK-------- //
//	CounterUp Active //
//  	 $('.counter').counterUp();

	
//	Magnific Popup Image Gallery -- didn't work
//		$('.gallery').magnificPopup({
//			type:'image',
//			gallery:{
//			enabled:true
//			}
//		});
	
});


//jQuery(window).load(function () {

    /* Sticky Header
    ============================*/
//    $(window).on('scroll', function () {
//      if ($(this).scrollTop() > 20) {
//        $('.header-area').addClass("sticky");
//     } else {
//         $('.header-area').removeClass("sticky");
//    }
// });
	
    /* Preloader Active
    ============================*/
//   $(".pre-loader").fadeOut();
//});


// Scroll to Top Active //

//	$(window).scroll(function(){
//		if($(this).scrollTop() > 200){
//	$('scroll').addClass('scroll-show')
//		} else {
//			$('scroll').removeClass('scroll-show')
//		}
//	})

//	$('#scroll').click(function){
//		$('html, body').animate({
//		scrollTop:0
//		}, 500)
//	})



