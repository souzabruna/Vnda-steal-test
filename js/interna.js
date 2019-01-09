var urlPage = window.location.search;
urlPage = urlPage.split('=');
var newUrl = urlPage[1];
var i=0;

$(document).ready(function(){
    $.ajax({
        type: "GET",
        dataType: "json",
        url: newUrl
    }).done(function(data){
       console.log(data);
        $.each(data.campaigns,function(){
            $('.kind-div').clone().appendTo('.block-content');
            //var divK = $('.kind-div').last();
           $('.kind-div:last-child').after('<span>'+data.campaigns[i].kind+'</span>');

           i++;
        });
    });
});