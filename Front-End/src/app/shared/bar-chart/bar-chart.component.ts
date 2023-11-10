import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnInit {
  public chart: any;

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    this.chart = new Chart('MyChart', {
      type: 'pie', //this denotes tha type of chart

      data: {
        labels: [
          'Muy buena',
          'Buena',
          'Regular',
          'Mala',
          'Muy mala',
          'No responde',
        ],
        datasets: [
          {
            label: 'n° de Votos',
            data: [10, 9, 7, 5, 2, 3],
            borderWidth: 1,
            backgroundColor: [
              'green',
              'blue',
              'yellow',
              'orange',
              'red',
              'grey',
            ],
          },
        ],
      },
      options: {
        aspectRatio: 2.5,
      },
    });
  }
}
