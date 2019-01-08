var dadoshora = [];
var dadoshoje = [];
var dadosontem = [];
var dadosmedia = [];
var i=0;


//$( "#calendario" ).datepicker();


function dadosItem1(hora,hoje,ontem,media) {
    dadoshora.push(hora);
    dadoshoje.push(hoje);
    dadosontem.push(ontem);
    dadosmedia.push(media);
    var ctx = document.getElementById("primeiroGrafico").getContext('2d');

    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: dadoshora,
        datasets: [
          {
            data: dadoshoje,
            label: "Hoje",
            borderColor: "#7540cc",
            fill: false
          },
          {
            data: dadosontem,
            label: "Ontem",
            borderColor: "#25a1bd",
            fill: false
          },
          {
            data: dadosmedia,
            label: "Média",
            borderColor: "#444444",
            backgroundColor:"#2c2b29",
            fill: false
          }
        ]
      }
    });


}

function dadosCampanha(status, date, hour, inbound, outbound, difference){
    var status= status.split('%');
    var date = date;
    var difference= difference;
    var differenceNumber = difference.split('%');
    differenceNumber = parseFloat(differenceNumber[0]);
    var outbound = outbound;
    var hour = hour;
    var inbound = inbound;
    $('#campanha-inbound').text(inbound);
    $('#campanha-outbound').text(outbound);
    $('#campanha-date').text(date);
    $('#campanha-hour').text(hour);

    if(differenceNumber > 0) {
      $("#sub-campanha").addClass("green-background");
    }else if (differenceNumber < 0) {
      $("#sub-campanha").addClass("red-background");
    } else if (differenceNumber == 0){
      $('#sub-campanha').addClass("yellow-background");
    }

    var ct = document.getElementById("campanha").getContext('2d');
    var myChart = new Chart(ct, {
      type: 'doughnut',
      data: {
        labels:["Campaigns"],
        datasets: [
          {
            data: status,
            label: "Campaigns",
            borderColor: "#242424",
            width:"5px",
            padding:"0",
            margin:"0",
            backgroundColor:"#3ab24e",
            fill: false
          }
        ],
        options:[
        {
            cutoutPercentage:"90",
        }
        ]
      }
    });
}

function dadosNotification(notfications, date, hour, inbound, outbound, difference){
    var notfications= notfications.split('%');
    var resto = 100 - notfications[0];
    var date = date;
    var hour = hour;
    var outbound = outbound;
    var inbound = inbound;
    $('#notification-inbound').text(inbound);
    $('#notification-outbound').text(outbound);
    $('#notification-date').text(date);
    $('#notification-hour').text(hour);

    var difference= difference;
    var differenceNumber = difference.split('%');
    differenceNumber = parseFloat(differenceNumber[0]);

    if(differenceNumber > 0) {
      $("#sub-not").addClass("green-background");
    }else if (differenceNumber < 0) {
      $("#sub-not").addClass("red-background");
    } else if (differenceNumber == 0){
      $('#sub-not').addClass("yellow-background");
    }


    var nots = document.getElementById("notification").getContext('2d');
    var myChart = new Chart(nots, {
      type: 'doughnut',
      data: {
        labels:["Notfications"],
        datasets: [
          {
            data: notfications,
            label: "Campaigns",
            borderColor: "#242424",
            backgroundColor:"#efc92a",
            cutoutPercentage:"90",
          }
        ]
      }
    });
}


function dadosTransaction(transactions, date, hour, inbound, outbound, difference){
    var transactions= transactions.split('%');
    var date = date;
    var hour = hour;
    var outbound = outbound;
    var inbound = inbound;
    var difference= difference;
    var differenceNumber = difference.split('%');
    differenceNumber = parseFloat(differenceNumber[0]);

    $('#transaction-inbound').text(inbound);
    $('#transaction-outbound').text(outbound);
    $('#transaction-date').text(date);
    $('#transaction-hour').text(hour);

    if(differenceNumber > 0) {
      $("#sub-transaction").addClass("green-background");
    }else if (differenceNumber < 0) {
      $("#sub-transaction").addClass("red-background");
    } else if (differenceNumber == 0){
      $('#sub-transaction').addClass("yellow-background");
    }


    var trans = document.getElementById("transactions").getContext('2d');
    var myChart = new Chart(trans, {
      type: 'doughnut',
      data: {
        labels:["Transactions"],
        datasets: [
          {
            data: transactions,
            label: "Transactions",
            borderColor: "#242424",
            backgroundColor:"#3bb24c",
            cutoutPercentage:"90",
          }
        ]
      }
    });
}

$(document).ready(function(){
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "http://pmweb.agencia.pmweb.com.br/teste-frontend/api/intranet/healthstatus.json"
    }).done(function(data){
        $.each(data.chartdata,function(){
           dadosItem1(data.chartdata[i].hora, data.chartdata[i].hoje, data.chartdata[i].ontem, data.chartdata[i].media);
            i++;
        });
    });
});

$(document).ready(function(){
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "http://pmweb.agencia.pmweb.com.br/teste-frontend/api/intranet/campaigns.json"
    }).done(function(data){
        dadosCampanha(data.healthstatus, data.date, data.time, data.inbound, data.outbound, data.difference);
    });
});

$(document).ready(function(){
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "http://pmweb.agencia.pmweb.com.br/teste-frontend/api/intranet/notification.json"
    }).done(function(data){
        dadosNotification(data.healthstatus, data.date, data.time, data.inbound, data.outbound, data.difference);
    });
});

$(document).ready(function(){
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "http://pmweb.agencia.pmweb.com.br/teste-frontend/api/intranet/transaction.json"
    }).done(function(data){
       dadosTransaction(data.healthstatus,  data.date, data.time, data.inbound, data.outbound, data.difference);
    });
});

$('#open-modal').click(function(){
    $('.modal').toggle(".modal-open");
});

$('.modal-close').click(function(){
    $('.modal').toggle(".modal-open");
});
