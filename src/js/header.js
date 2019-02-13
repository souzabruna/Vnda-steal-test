$('.submenu').mouseover(function(){
	$(this).find('ul').css("visibility", "visible");
});

$('.submenu').mouseleave(function(){
	$(this).find('ul').css("visibility", "hidden");
});