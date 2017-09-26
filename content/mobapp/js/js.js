$(document).ready(function(){
	$('.bxslider').bxSlider({
		auto: true,
		speed: 600,
		controls: false,
		pause: 3000,
		autoHover: true
	});
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	});
	
	$('.scrollup').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 600);
		return false;
	});
});