import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-area-shipment',
  templateUrl: './area-shipment.component.html',
  styleUrls: ['./area-shipment.component.css']
})
export class AreaShipmentComponent implements OnInit {
  areashipment: any;

  constructor() {
    this.areashipment = {
      chart: {
        type: 'area'
      },
      title: {
        text: 'History of Orders and shipped '
      },
      legend: {
        enabled: true,
        layout: 'vertical',
        align:  'right',
        width: 100,
        verticalAlign: 'middle',
        useHTML: true,
        labelFormatter: function () {
          return '<div style="text-align: left; width:130px;float:left;">' + this.name + '</div>';
        }
      },
      xAxis: {
        categories: ['January', 'February','March','April','May','June','July','August','September','October','November','December']
      },
      yAxis: {
        min: 0,
      },
      tooltip: {
        pointFormat:'{series.name} <b> {point.y}'
      },
      plotOptions: {
        area:  {
          marker: {
            enabled: false,
            symbol: 'circle',
            radius: 2,
            states: {
              hover: {
                enabled: true
              }
            }
          }
        }
      },
      series: [{
        name: 'Total Orders',
        data: [20, 24, 25, 28, 32, 36, 45, 50, 55, 60, 65, 70]
      }, {
        name: 'Shipped',
        data: [5, 12, 15, 17, 18, 25, 28, 30, 31, 32, 33, 40]
      },
        {
          name: 'with sample',
          data: [4, 12, 10, 16, 10, 23, 21, 28, 30, 12, 30, 40]
        }]
    }
  }

  ngOnInit() {
  }

}
