import {Component, OnInit} from '@angular/core';
import * as Highcharts from "highcharts";

@Component({
  selector: 'app-donut-dashboard',
  templateUrl: './donut-dashboard.component.html',
  styleUrls: ['./donut-dashboard.component.css']
})
export class DonutDashboardComponent implements OnInit {
  donut: any;
  browserData = [];
  versionsData = [];
  base;

  drillDataLen;
  brightness;

  constructor() {
    let colors = Highcharts.getOptions().colors,
      categories = ['New', 'Old'],
      data = [{
        y: 70,
        color: colors[2],
        drilldown: {
          name: 'New Template',
          categories: ['P20', 'P30', 'P40', 'P50'],
          data: [20, 10, 10, 10,10,10],
          color: colors[2]
        }
      }, {
        y: 50,
        color: colors[3],
        drilldown: {
          name: 'Old Template',
          categories: ['P60', 'P65', 'P67',
            'P71'],
          data: [20,10,10,10],
          color: colors[ 3]
        }
      }
      ],
      dataLen = data.length;
     //this.base = Highcharts.getOptions().colors[0];


// Build the data arrays
    for (let i = 0; i < dataLen; i += 1) {

      // add browser data
      this.browserData.push({
        name: categories[i],
        y: data[i].y,
        color: data[i].color
      });

      // add version data
      this.drillDataLen = data[i].drilldown.data.length;
      for (let j = 0; j < this.drillDataLen; j += 1) {
        this.brightness = 0.2 - (j / this.drillDataLen) / 5;
        this.versionsData.push({
          name: data[i].drilldown.categories [j],
          y: data[i].drilldown.data[j],
         color:data[i].color
         // color: Highcharts.Color(data[i].color).brighten(this.brightness).get()
            // colors.push(Highcharts.Color(base).brighten((i - 3) / 7).get();
        });
      }
    }


    this.donut = {

      chart: {
        type: 'pie'
      },
      title: {
        text: 'Product Ratio'
      },
     /* subtitle: {
        text: 'Source: <a href="http://netmarketshare.com/">netmarketshare.com</a>'
      },*/
      yAxis: {
        title: {
          text: 'Total percent market share'
        }
      },
      plotOptions: {
        pie: {
          shadow: false,
          center: ['50%', '50%']
        }
      },
      tooltip: {
        valueSuffix: '%'
      },
      series: [{
        name: 'Old Template',
        data: this.browserData,
       // color:'blue',
        size: '60%',
        dataLabels: {
          formatter: function () {
            return this.y > 5 ? this.point.name : null;
          },
          color: '#ffffff',
          distance: -30
        }
      }, {
        name: 'New Template',
        data: this.versionsData,
        size: '80%',
        innerSize: '60%',
        dataLabels: {
          formatter: function () {
            // display only if larger than 1
            return this.y > 1 ? '<b>' + this.point.name + ':</b> ' +
              this.y + '%' : null;
          }
        },
        id: 'versions'
      }],
      responsive: {
        rules: [{
          condition: {
            maxWidth: 400
          },
          chartOptions: {
            series: [{
              id: 'versions',
              dataLabels: {
                enabled: false,

              }
            }]
          }
        }]
      }
    }
  }

  ngOnInit() {
  }

}
