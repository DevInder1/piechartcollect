import {Component, OnInit} from '@angular/core';

@Component({
  selector: "app-order-status",
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.css']
})
export class OrderStatusComponent implements OnInit {
  orderstatus: object;
  orderstatus1: object;
  orderstatus2: object;
  orderstatus3: object;

  constructor() {
    this.orderstatus = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        width: 400,
        height: 400,
      },
      title: {
        text: '1 Month Data(1 August -16 August)'
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
          showInLegend: false
        }
      },
      series: [{
        name: '',
        colorByPoint: true,
        data: [{
          name: 'Draft',
          y: 15
        }, {
          name:'Accepted-Submitted',
          y: 12,
          sliced: true,
          selected: true
        }, {
          name: 'Confirmed',
          y: 5
        }, {
          name: 'At Fabkey',
          y: 2
        },
          {
            name: 'Final',
            y: 1
          },
          {
            name: 'Shipment',
            y: 1
          },
          {
            name: 'cancelled',
            y: 2
          }
          , {
            name: 'On Hold',
            y: 0
          }
        ]
      }]
    }
    this.orderstatus1 = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        width: 400,
        height: 400,
      },
      title: {
        text: 'May - July'
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
          showInLegend: false
        }
      },
      series: [{
        name: '',
        colorByPoint: true,
        data: [{
          name: 'Draft',
          y: 12
        }, {
          name: 'Accepted or Submitted',
          y: 2,
          sliced: true,
          selected: true
        }, {
          name: 'Confirmed',
          y: 14
        }, {
          name: 'At Fabkey',
          y: 10
        },
          {
            name: 'Final',
            y: 34
          },
          {
            name: 'Shipment',
            y: 110
          },
          {
            name: 'cancelled',
            y: 5
          }
          , {
            name: 'On Hold',
            y: 3
          }
        ]
      }]
    }
    this.orderstatus2 = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        width: 400,
        height: 400,
      },
      title: {
        text: 'February - April '
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
          showInLegend: false
        }
      },
      series: [{
        name: '',
        colorByPoint: true,
        data: [{
          name: 'Draft',
          y: 2
        }, {
          name: 'Accepted or Submitted',
          y: 1,
          sliced: true,
          selected: true
        }, {
          name: 'Confirmed',
          y: 1
        }, {
          name: 'At Fabkey',
          y: 1
        },
          {
            name: 'Final',
            y: 4
          },
          {
            name: 'Shipment',
            y: 130
          },
          {
            name: 'cancelled',
            y: 10
          }
          , {
            name: 'On Hold',
            y: 2
          }
        ]
      }]
    }
    this.orderstatus3 = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
       /* width:  500,
        height:400,*/

      },
      title: {
        text: 'September 2016 - January 2017'
      },
      /* legend: {
       enabled: true,
       floating: true,
       verticalAlign: 'middle',
       layout: 'vertical',
       align: 'right',
       x:95,
       //width:170,
       },*/
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

      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      }
      ,
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false
          }
          ,
          showInLegend: true

        }
      }
      ,
      series: [{
        name: '',
        colorByPoint: true,
        data: [{
          name: 'Draft',
          y: 2
        }, {
          name: 'Accepted-Submitted',
          y: 1,
          sliced: true,
          selected: true
        }, {
          name: 'Confirmed',
          y: 1
        }, {
          name: 'At Fabkey',
          y: 1
        },
          {
            name: 'Final',
            y: 1
          },
          {
            name: 'Shipment',
            y: 265
          },
          {
            name: 'cancelled',
            y: 55
          }
          , {
            name: 'On Hold',
            y: 22
          }
        ]
      }]
    }
  }


  ngOnInit() {
  }

}
