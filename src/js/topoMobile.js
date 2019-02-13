$(document).ready(function(){	
	$('nav#menu').mmenu({
		"slidingSubmenus": false
	});
	var API = $("nav#menu").data( "mmenu" );
      
    $("#btn-menu").click(function() {
         API.close();
    });
});