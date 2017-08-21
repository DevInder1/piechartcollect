import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orderpie: object;

  constructor() {
    this.orderpie = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Break down in % the various groups of orders'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false
          },
          showInLegend: true
        }
      },
      series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
          name: 'Require Sample',
          y: 1230
        }, {
          name: 'Handled by Engineering',
          y: 845,
          sliced: true,
          selected: true
        }, {
          name: 'Without Sample',
          y: 346
        }]
      }]
    }
  }


  ngOnInit() {
  }

}
