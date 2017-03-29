$(document).ready(function(){
	$('.slide_flat').slick({
		speed: 500,
		arrows: false,
		centerMode: false,

		dots: true
	});

	if($(window).width()<='550'){

	$('.flat_white').slick({

		speed: 500,
		zIndex: 2000,
		slidesToShow: 1,
		arrows: false,
		centerMode: false,
		centerPadding: '0px',
		dots: true
	});
}
	$('.slider_bank').slick({
		slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
    	{
     	 
      	 breakpoint: 960,
			//сообщает, при какой ширине экрана нужно включать настройки
     	 settings: {
        	slidesToShow: 1,
        	slidesToScroll: 1,
        	infinite: true,
      			}
    		}
		],
		speed: 200,
		arrows: true,
		centerMode: false,
		dots: false
	});
	$('.clider_otdelka').slick({
		speed: 500,
		arrows: false,
		centerMode: false,
		dots: true
	});
	$('.clider_gallery1').slick({
		speed: 500,
		slidesToShow: 3,
		arrows: true,
		centerMode: false,
		responsive: [
    	{
     	 
      	 breakpoint: 1130,
			//сообщает, при какой ширине экрана нужно включать настройки
     	 settings: {
        	slidesToShow: 1,
        	slidesToScroll: 1,
        	infinite: true,
      			}
    		}
		],
		
		dots: false
	});
	

	$("a.fancybox").fancybox({
		'transitionIn'	:	'fade',
		'transitionOut'	:	'fade',
		'speedIn'		:	2000, // скорость открытия
		'speedOut'		:	2000, // затухание
		'overlayShow'	:	true, // затемнение страницы
		'hideOnContentClick':	true,
		'overlayOpacity':	0.9,
		'showNavArrows':	true,
		'showCloseButton':	true

	});
	
});
$("body").on("click", "a.scroll_down_a", function(){
    var idtop = $($(this).attr("href")).offset().top;
    $('html,body').animate({scrollTop: idtop}, 1000);
    return false;
	});
$("body").on("click", "a.botton_blue, a.botton_green_call, a.botton_green_price, a.make_order", function(){
    var idtop = $($(this).attr("href")).offset().top;
    $('html,body').animate({scrollTop: idtop}, 1000);
    return false;
	});


// if($(window).width()<='1200')function(){
	
// 		$('.flat_white').slick({
// 		slidesToShow: 1,
// 		speed: 500,
// 		arrows: false,
// 		centerMode: true,
// 		dots: true
// 	});
	
// 	};
