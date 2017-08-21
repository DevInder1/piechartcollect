import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-oder-status-bar',
  templateUrl: './oder-status-bar.component.html',
  styleUrls: ['./oder-status-bar.component.css']
})
export class OderStatusBarComponent implements OnInit {
  orderstatusbar: object;

  constructor() {
    this.orderstatusbar = {
      chart: {
        type: 'column',
       // backgroundColor:'rgba(0, 0, 0, 0.5',

        width: 800
      },
      title: {
        text: ''
      },
      legend: {
        enabled: true,
        layout: 'vertical',
        align: 'right',
        width: 200,
        verticalAlign: 'middle',
        useHTML: true,
        labelFormatter: function () {
          return '<div style="text-align: left; width:130px;float:left;">' + this.name + '</div>';
        }
      },
      xAxis: {
        categories: ['August', 'May-July', 'Feb-Apr', 'Sep 2016- jan 2017']
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Break down in % of the various order status in bar chart'
        }
      },
      /*legend: {
        reversed: true,
       // backgroundColor:(('rgba(0, 0, 0, 0.5)') || '#ffa3d2')
      },*/
      plotOptions: {
        column: {
          stacking: 'normal',
          dataLabels:{
            enabled:false,

          }
        }
      },
      series: [{
        name: 'Draft',
        data: [15, 12, 2, 2]
      }, {
        name: 'Accepted or Submitted',
        data: [12, 2, 1, 1]
      }, {
        name: 'Confirmed',
        data: [5, 14, 1, 1]
      }, {
        name: 'At Fabkey',
        data: [2, 10, 1, 1]
      }, {
        name: 'Final',
        data: [1, 34, 4, 1]
      }, {
        name: 'Shipment',
        data: [1, 110, 130, 265]
      }, {
        name: 'Cancelled',
        data: [2, 5, 10, 56]
      },
        {
          name: 'On Hold',
          data: [0, 3, 2, 22]
        }]
    }
  }

  ngOnInit() {
  }

}
