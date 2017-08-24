import {Component, OnInit} from '@angular/core';
import * as Highcharts from "highcharts";

@Component({
  selector: 'app-lead-time',
  templateUrl: './lead-time.component.html',
  styleUrls: ['./lead-time.component.css']
})
export class LeadTimeComponent implements OnInit {
  options: any;
  oderwise: any;
  overall: any;
  monthwise: any;

  constructor() {
    /*this.options = {
     title: {
     text: 'Break down of the lead time of individual orders for key status and desks '
     },
     xAxis: {
     categories: ['Customer', 'ROM Desk', 'EEPROM Desk', 'Engineering', 'Shipment']
     },
     labels: {
     items: [{
     html: 'Total number of orders',
     style: {
     left: '50px',
     top: '18px',
     color: 'black'
     }
     }]
     },
     series: [{
     type: 'column',
     name: 'Jane',
     data: [3, 2, 1, 3, 4]
     }, {
     type: 'column',
     name: 'John',
     data: [2, 3, 5, 7, 6]
     }, {
     type: 'column',
     name: 'Joe',
     data: [4, 3, 3, 9, 3]
     }, {
     type: 'spline',
     name: 'Average',
     data: [2, 2.67, 3, 6.33, 3.33],
     marker: {
     lineWidth: 2,
     lineColor: Highcharts.getOptions().colors[3],
     fillColor: 'white'
     }
     }, {
     type: 'pie',
     name: 'Total consumption',
     data: [{
     name: 'Jane',
     y: 13,
     color: Highcharts.getOptions().colors[0] // Jane's color
     }, {
     name: 'John',
     y: 23,
     color: Highcharts.getOptions().colors[1] // John's color
     }, {
     name: 'Joe',
     y: 19,
     color: Highcharts.getOptions().colors[2] // Joe's color
     }],
     center: [100, 80],
     size: 100,
     showInLegend: false,
     dataLabels: {
     enabled: false
     }
     }]

     }*/
    this.oderwise = {
      chart: {
        // width: 1300
      },
      title: {
        text: "OEF Leadtime ",
        style: {
          fontWeight: 'bold',
          fontFamily: 'serif',
        }
      },
      legend: {
        enabled: true,
        layout: 'vertical',
        align: 'right',
        width: 180,
        verticalAlign: 'middle',
        useHTML: true,
        labelFormatter: function () {
          return '<div style="text-align: left; width:130px;float:left;">' + this.name + '</div>';
        }
      },
      xAxis: {
        categories: ['O100', 'O110', 'O120', 'O130']
      },

      series: [
        {

          type: 'column',
          name: 'OEF',
          data: [20, 16, 18, 12]
        }, {

          type: 'column',
          name: 'Customer ROM',
          data: [4, 1, 2, 4]
        },
        {
          type: 'column',
          name: 'Support Desk ROM',
          data: [5, 1, 2, 4]
        },
        {
          type: 'column',
          name: 'ROM Code',
          data: [9, 2, 4, 8]
        },
        {
          type: 'column',
          name: 'Customer Fabkey',
          data: [4, 6, 3, 4]
        },
        {
          type: 'column',
          name: 'Supportdesk Fabkey',
          data: [2, 3, 1, 6]
        },
        {
          type: 'column',
          name: 'EEPROM',
          data: [6, 9, 4, 10]
        },
        {
          type: 'column',
          name: 'Engineering',
          data: [2, 2, 1, 1]
        },
        {
          type: 'column',
          name: 'Completion',
          data: [4, 1, 9, 4]
        },
        {
          type: 'column',
          name: 'Shipment',
          data: [1, 2, 4, 3]
        }]

    }
    this.overall = {
      chart: {
       // width: 1000
      },
      title: {
        text: 'OEF Leadtime Comparision',
        style: {
          fontWeight: 'bold',
          fontFamily: 'serif',
        }
      },
      legend: {
        enabled: true,
        layout: 'vertical',
        align: 'right',
        width: 100,
        verticalAlign: 'middle',
        useHTML: true,
        labelFormatter: function () {
          return '<div style="text-align: left; width:130px;float:left;">' + this.name + '</div>';
        }
      },
      xAxis: {
        categories: ['O100', 'O111', 'O133', 'O144']
      },

      series: [{
        type: 'column',
        name: 'OEF',
        data: [9, 7, 10, 13]
      },
        {
          type: 'column',
          name: ' TP',
          data: [6, 10, 8, 12]
        },
        {
          type: 'column',
          name: 'ROM Code',
          data: [3, 6, 6, 4]
        },
        {
          type: 'column',
          name: 'EEPROM',
          data: [3, 4, 2, 8]
        },]

    }
    this.monthwise = {
      chart: {
       // width: 1000
      },
      title: {
        text: 'Average Lead Time ',
        style: {
          fontWeight: 'bold',
          fontFamily: 'serif',
        }
      },
      legend: {
        enabled: true,
        layout: 'vertical',
        align: 'right',
        width: 100,
        verticalAlign: 'middle',
        useHTML: true,
        labelFormatter: function () {
          return '<div style="text-align: left; width:130px;float:left;">' + this.name + '</div>';
        }
      },
      xAxis: {
        categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      },

      series: [{

        type: 'column',
        name: 'Overall',
        data: [8, 7, 10, 14, 8, 18, 4, 18, 26, 20, 30, 36]
      },
        {
          type: 'column',
          name: 'TP',
          data: [5, 6, 9, 10, 7, 16, 3, 10, 27, 15, 30, 32]
        },
      ]

    }
  }

  ngOnInit() {
  }
}
