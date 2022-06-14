google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    // 1. Definición de las datos
    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],  // Titulo
        ['Trabajo',     11],
        ['Comer',      4],
        ['Commute',  2],
        ['Watch TV', 3],
        ['Sleep',    7]
    ]);

    // 2. Opciones del dataviz
    var options = {
        title: 'My Daily Activities',
        is3D: true,
        //legend: 'none',
        //pieHole: 0.3,
    };

    // 3. Creación del objeto chart con el contructor PieChart, donde se pasa como parametro el elemento
    //    donde se visualizara el PieChart
    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    // 4. el objeto chart llama al metodo draw que recibe como parametro la data a mostrar y las opciones
    //      personalizadas y este dibuja el chart.
    chart.draw(data, options);
}