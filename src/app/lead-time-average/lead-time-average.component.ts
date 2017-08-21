import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-lead-time-average',
  templateUrl: './lead-time-average.component.html',
  styleUrls: ['./lead-time-average.component.css']
})
export class LeadTimeAverageComponent implements OnInit {
  leadtime: object;

  constructor() {
    this.leadtime = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        width: 400
      },
      title: {
        text: 'Break down of the lead time of individual orders for key status and desks '
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
        name: '',
        colorByPoint: true,
        data: [{
          name: 'EEPROM',
          y: 12
        }, {
          name: 'Engineering',
          y: 2,
          sliced: true,
          selected: true
        }, {
          name: 'Completion',
          y: 14
        }, {
          name: 'Shipment',
          y: 10
        },
      ]
      }]

    }
  }

  ngOnInit() {
  }

}
