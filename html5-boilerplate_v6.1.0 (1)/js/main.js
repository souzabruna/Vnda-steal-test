// $('#shipments').css("background", "red");

// var data = {
// labels : ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
//  datasets : [
//  {
//  fillColor : "rgba(99,123,133,0.4)",
//  strokeColor : "rgba(220,220,220,1)",
//  pointColor : "rgba(220,220,220,1)",
//  pointStrokeColor : "#fff",
//  data : [65,54,30,81,56,55,40]
//  },
//  {
//  fillColor : "rgba(219,186,52,0.4)",
//  strokeColor : "rgba(220,220,220,1)",
//  pointColor : "rgba(220,220,220,1)",
//  pointStrokeColor : "#fff",
//  data : [20,60,42,58,31,21,50]
//  },
//  ]
// }
// var canvas = document.getElementById("shipments");
// var ctx = canvas.getContext("2d");
// new Chart(ctx).Line(data, options);
let primeiroGrafico = document.getElementById('primeiroGrafico').getContext('2d');


let chart = new Chart(primeiroGrafico, {
    type: 'line',
    data: {
        labels: ['2000', '2001', '2002', '2003', '2004', '2005'],
        datasets: [{
                label: 'Crecimento Populacional',
                data: [173448346, 175885229, 178276128, 180619108, 182911487, 185150806],
                backgroundColor: "rgba(255, 34, 0, 0.3)",
                borderColor: "#0000ff"
            },
            {
                label: 'Exemplo de Gráfico Comparativo',
                data: [173448346, 185150806, 175885229, 182911487, 178276128, 180619108],
                backgroundColor: "rgba(0, 255, 0, 0.3)",
                borderColor: "#002200"
            }
        ]
    }
});