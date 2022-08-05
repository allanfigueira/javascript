document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('graficowhats', {
        chart: {
            type: 'area'
        },
        title: {
            text: 'WhatsApp - Ultimas 24 Horas'
        },
        yAxis: {
            title: {
                text: 'Notificações'
            },
            gridLineWidth: 1,
            
        },
        xAxis:{
                gridLineWidth: 1
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },
        plotOptions: {
            series: {
                fillOpacity: 0.1 
            }
        },
        series: [{
            name: 'Brasil',
            data: [0,4,2,4,8,12,1,8]
        },
        {
            name: 'Mexico',
            data: [5,7,3,3,6,8,2,9]
        }],
    });
});

