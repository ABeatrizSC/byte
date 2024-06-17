import React from 'react'
import './style.css'

export function Analytics() {
  // Load Charts and the corechart and barchart packages.
  google.charts.load('current', {'packages':['corechart']});

  // Draw the pie chart and bar chart when Charts is loaded.
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
      ['Game Over', 3],
      ['Ctrl + Eat', 1],
      ['Data Dinner', 1],
      ['No Cooler', 1],
      ['Coca-cola', 2]
    ]);

    var piechart_options = {
      title:'Produtos mais vendidos',
      width:400,
      height:300,
      is3D: true
    };
    var piechart = new google.visualization.PieChart(document.getElementById('topsellingpiechart_div'));
    piechart.draw(data, piechart_options);

    var barchart_options = {
      title:'Produtos mais vendidos',
      width:400,
      height:300,
      legend: 'none'
    };
    var barchart = new google.visualization.BarChart(document.getElementById('topsellingbarchart_div'));
    barchart.draw(data, barchart_options);
  }

  return (
    <section className='analytics-section'>
      <h1>Análise do estabelecimento</h1>
      <div className='charts-container'>
        <div className='charts-group'>
          <div id="topsellingpiechart_div"></div>
          <div id="topsellingbarchart_div"></div>
        </div>
      </div>
    </section>
  )
}
