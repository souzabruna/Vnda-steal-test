$(document).ready(function(){	
	$(window).scroll(function (event) {
		var scroll = $(window).scrollTop();
		 if(scroll >= 61){
		 	$('.Header-mobile').css("padding", "15px 0 0 0");
		 } else if(scroll < 61){
		 	$('.Header-mobile').css("padding", "0");
		 }
	});
});

$(function() {
	$('nav#menu').mmenu();
});
