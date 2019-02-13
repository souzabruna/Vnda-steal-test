$(document).ready(function(){
	$.get("views/topoMobile.html", function(data) {
    	$("#topoMobile").html(data);
	});

	$.get("views/sliderPrincipal.html", function(data) {
    	$("#sliderPrincipal").html(data);
	});

	$.get("views/Produtos.html", function(data) {
    	$("#produtos").html(data);
	});

	$("#destaques").load("views/destques.html"); 
	$("#modal").load("views/modal.html"); 
	$('#Header').load("views/header.html");

	$('Slider').slick();

});

function abreModal(){
	$('.Modal').addClass("Modal-aberta");
}
function fechaModal(){
	$('.Modal').removeClass("Modal-aberta");
}