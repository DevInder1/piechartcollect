import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-semi-donut',
  templateUrl: "./semi-donut.component.html",
  styleUrls: ['./semi-donut.component.css']
})
export class SemiDonutComponent implements OnInit {
  optionsdonut: object;
  speedometer: object;

  constructor() {
    this.optionsdonut = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false
      },
      title: {
        text: 'Browser<br>shares<br>2015',
        align: 'center',
        verticalAlign: 'middle',
        y: 40
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          dataLabels: {
            enabled: true,
            distance: -50,
            style: {
              fontWeight: 'bold',
              color: 'white'
            }
          },
          startAngle: -90,
          endAngle: 90,
          center: ['50%', '75%']
        }
      },
      series: [{
        type: 'pie',
        name: 'Browser share',
        innerSize: '50%',
        data: [
          ['Firefox', 10.38],
          ['IE', 56.33],
          ['Chrome', 24.03],
          ['Safari', 4.77],
          ['Opera', 0.91],
          {
            name: 'Proprietary or Undetectable',
            y: 0.2,
            dataLabels: {
              enabled: false
            }
          }
        ]
      }]
    }
    this.speedometer = {
      chart: {
        type: 'gauge',
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false
      },

      title: {
        text: 'Speedometer'
      },

      pane: {
        startAngle: -150,
        endAngle: 150,
        background: [{
          backgroundColor: {
            linearGradient: {x1: 0, y1: 0, x2: 0, y2: 1},
            stops: [
              [0, '#FFF'],
              [1, '#333']
            ]
          },
          borderWidth: 0,
          outerRadius: '109%'
        }, {
          backgroundColor: {
            linearGradient: {x1: 0, y1: 0, x2: 0, y2: 1},
            stops: [
              [0, '#333'],
              [1, '#FFF']
            ]
          },
          borderWidth: 1,
          outerRadius: '107%'
        }, {
          // default background
        }, {
          backgroundColor: '#DDD',
          borderWidth: 0,
          outerRadius: '105%',
          innerRadius: '103%'
        }]
      },

      // the value axis
      yAxis: {
        min: 0,
        max: 200,

        minorTickInterval: 'auto',
        minorTickWidth: 1,
        minorTickLength: 10,
        minorTickPosition: 'inside',
        minorTickColor: '#666',

        tickPixelInterval: 30,
        tickWidth: 2,
        tickPosition: 'inside',
        tickLength: 10,
        tickColor: '#666',
        labels: {
          step: 2,
          rotation: 'auto'
        },
        title: {
          text: 'km/h'
        },
        plotBands: [{
          from: 0,
          to: 120,
          color: '#55BF3B' // green
        }, {
          from: 120,
          to: 160,
          color: '#DDDF0D' // yellow
        }, {
          from: 160,
          to: 200,
          color: '#DF5353' // red
        }]
      },

      series: [{
        name: 'Speed',
        data: [80],
        tooltip: {
          valueSuffix: ' km/h'
        }
      }]
    },
      function (chart) {
        if (!chart.renderer.forExport) {
          setInterval(function () {
            var point = chart.series[0].points[0],
              newVal,
              inc = Math.round((Math.random() - 0.5) * 20);

            newVal = point.y + inc;
            if (newVal < 0 || newVal > 200) {
              newVal = point.y - inc;
            }

            point.update(newVal);

          }, 3000);
        }

      }
  }

  ngOnInit() {
  }

}
