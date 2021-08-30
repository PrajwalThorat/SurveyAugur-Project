import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
//import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{
    ticks:{
    beginAtZero:true}}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'center',
      }
    }
  };
  public barChartLabels: Label[] = ['Survey Status']
  public barChartType: ChartType = 'horizontalBar';
  public barChartLegend = true;
  //public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [25], label: 'Active Surveys',backgroundColor:'pink' },
    { data: [35], label: 'InActive Surveys',backgroundColor:'blue' }
  ];

  constructor() { }

  ngOnInit(): void {

  }
}
