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
           $('.kind-div:last-child').after('<div class="kind-div"><div class="title-kind">'+data.campaigns[i].kind+'</div></div>');
            var j=0;

             if(data.campaigns[i].channels.toString()=="facebook"){
               $('.kind-div:last-child .title-kind:last-child').after('<div class="title-chanel"><i class="fab fa-facebook-f face-color"></i><i class="fab fa-google-plus-g"></i></div>');
             } else if(data.campaigns[i].channels.toString()=="facebook,google"){
               $('.kind-div:last-child .title-kind:last-child').after('<div class="title-chanel"><i class="fab fa-facebook-f face-color"></i><i class="fab fa-google-plus-g google-color"></i></div>');
             } else if(data.campaigns[i].channels.toString()=="google"){
               $('.kind-div:last-child .title-kind:last-child').after('<div class="title-chanel"><i class="fab fa-facebook-f"></i><i class="fab fa-google-plus-g google-color"></i></div>');
             }

             $.each(data.campaigns[i].campaign,function(){
               j++;
             });

             $('.kind-div:last-child .title-chanel:last-child').after('<div class="numberCampaing">'+  j +'  Campanhas</div>');
             // $('.kind-div:last-child .numberCampaing:last-child').after('<div class="statusCampaing"><div class="progress-bar"><div class="progress-bar-color"></div></div>'+  data.campaigns[i].healthstatus +'</div>');
             $('.kind-div:last-child .numberCampaing:last-child').after('<div class="statusCampaing"><div class="progress-bar"><div class="progress-bar-color" id="bar' + i + '"></div></div>' +  data.campaigns[i].healthstatus + '</div>');
             $('.kind-div:last-child .statusCampaing:last-child').after('<div class="createdCampaing">'+  data.campaigns[i].created +'</div>');
             $('.kind-div:last-child .createdCampaing:last-child').after('<div class="periodCampaing">'+  data.campaigns[i].period +'</div>');
             $('.kind-div:last-child .periodCampaing:last-child').after('<div class="content-campains"><div class="texts-campain">Campanha</div><div class="texts-campain">Objetivo</div><div class="texts-campain">Impressões</div><div class="texts-campain texts-campain-clic">Cliques</div><div class="texts-campain texts-campain-clic">CTR</div><div class="texts-campain texts-campain-clic">CPM(R$)</div><div class="texts-campain texts-campain-clic">CPC(R$) </div><div class="texts-campain">Custos(R$) </div></div>');
             var k;
             var health = data.campaigns[i].healthstatus;
             
             $('#bar' + i + '').css("width",health).css("background", "#3bb24c");
             for (k=0; k < j; k++){
               $('.kind-div:last-child .content-campains:last-child').after('<div class="content-campains"><div class="content-campains-item">' + data.campaigns[i].campaign[k].name + '</div><div class="content-campains-item">' + data.campaigns[i].campaign[k].goal + '</div><div class="content-campains-item">' + data.campaigns[i].campaign[k].impressions +  '</div><div class="content-campains-item content-campains-item-clic">' + data.campaigns[i].campaign[k].clicks + '</div><div class="content-campains-item content-campains-item-clic">' + data.campaigns[i].campaign[k].ctr + '</div><div class="content-campains-item content-campains-item-clic">' + data.campaigns[i].campaign[k].cpm + '</div><div class="content-campains-item content-campains-item-clic">' + data.campaigns[i].campaign[k].cpc + '</div><div class="content-campains-item">' + data.campaigns[i].campaign[k].custo + '</div></div>');
             }

           i++;
        });

        $('.block-content .kind-div').click(function(){
          $(this).find('.content-campains').toggleClass('flex-display');
        });
    });
});

$('.close-page').click(function() {
  window.location.assign('index.html');
});
