import React from "react";
import "./style.css";
import { drawCharts } from "./drawCharts";

export function Analytics() {
  // Load Charts and the corechart and barchart packages.
  google.charts.load("current", { packages: ["corechart"] });

  // Draw the pie chart and bar chart when Charts is loaded.
  google.charts.setOnLoadCallback(drawCharts);

  return (
    <section className="analytics-section">
      <h1>Análise do estabelecimento</h1>
      <p>
        Confira como anda a sua empresa com análises de gráficos dos principais
        tópicos:
      </p>
      <div className="charts-container">
        <div className="charts-group">
          <div id="topsellingproductspiechart_div"></div>
          <button id="pdf-chart-one">Baixar PDF</button>
        </div>
        <div className="charts-group">
          <div id="topsellingpaymentpiechart_div"></div>
          <button id="pdf-chart-two">Baixar PDF</button>
        </div>
        <div className="charts-group">
          <div id="productsbycategorypiechart_div"></div>
          <button id="pdf-chart-three">Baixar PDF</button>
        </div>
        {/* <div className='charts-group'>
          <div id="revenuebycategorypiechart_div"></div>
          <button id='pdf-chart-four'>
            Baixar PDF
          </button>
        </div> */}
        <div className="charts-group">
          <div id="revenuebyproductpiechart_div"></div>
          <button id="pdf-chart-five">Baixar PDF</button>
        </div>
      </div>
    </section>
  );
}
