$(document).ready(function(){
	$('.carrossel').slick({
  
	  infinite: true,
	  speed: 300,
	  arrows: true,
	  slidesToShow: 4,
	  slidesToScroll: 4,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3,
	        infinite: true,
	        
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
	});

	$('.slick-next').html('<img class="svg" src="./imagens/icon-arrow-r-black.svg">');
	$('.slick-prev').html('<img class="svg" src="./imagens/icon-arrow-l-black.svg">');
});

function mostraFrente(){
	var src = $(this).find('.Produto-imagem').attr("name");
	$(this).find('.OverMouse').css("visibility", "hidden");

	$(this).find('.Produto-imagem').attr("src", src);
}

function mostraAtras(){
	var src = $(this).find('.Produto-imagem').attr("id");
	$(this).find('.OverMouse').css("visibility", "visible");
	$(this).find('.Produto-imagem').attr("src", src);
}

$('.Produto .carrossel .item .image').hover(mostraAtras, mostraFrente);