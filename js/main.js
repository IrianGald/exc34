jQuery(function($){
	
	'use strict';
	
	if($(".slider-ppal .slider").length){
		$(".slider-ppal .slider").slick({
			slidesToShow: 5,
			arrows: true,
			autoplay: true,
			prevArrow: '<button type="button" class="sldr-arrow sldr-prev"><i class="icon-left"></i></button>',
			nextArrow: '<button type="button" class="sldr-arrow sldr-next"><i class="icon-right"></i></button>',
			responsive: [
				{
				  breakpoint: 1500,
				  settings: {
					slidesToShow: 4,
					slidesToScroll: 4
				  }
				},
				{
				  breakpoint: 1100,
				  settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				  }
				},
				{
				  breakpoint: 768,
				  settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				  }
				}
			]
		});
	}
	
	
	$("body").on("click",".modal-box .thumbs a", function(e){
		e.preventDefault();
		var theImgUrl = $(this).attr("href");
		var image = '<img src="'+theImgUrl+'" class="borde-dest">';
		$(".modal-box .bigImg").html(image);
		$(".modal-box .thumbs a").removeClass("active");
		$(this).addClass("active");
	});
	
});