function mostraFrente(){var s=$(this).find(".Produto-imagem").attr("name");$(this).find(".OverMouse").css("visibility","hidden"),$(this).find(".Produto-imagem").attr("src",s)}function mostraAtras(){var s=$(this).find(".Produto-imagem").attr("id");$(this).find(".OverMouse").css("visibility","visible"),$(this).find(".Produto-imagem").attr("src",s)}$(document).ready(function(){$(".carrossel").slick({infinite:!0,speed:300,arrows:!0,slidesToShow:4,slidesToScroll:4,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".slick-next").html('<img class="svg" src="./imagens/icon-arrow-r-black.svg">'),$(".slick-prev").html('<img class="svg" src="./imagens/icon-arrow-l-black.svg">')}),$(".Produto .carrossel .item .image").hover(mostraAtras,mostraFrente);