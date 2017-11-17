import { Component, OnInit , AfterViewInit } from '@angular/core';

import { PieChartService } from './pieChart.service';

import 'easy-pie-chart/dist/jquery.easypiechart.js';


@Component({
  selector: 'pie-chart',
  templateUrl: './pieChart.html',
  styleUrls: ['./pieChart.scss'],
})
// TODO: move easypiechart to component

export class PieChart implements OnInit {

  newBuyers: any;
  newSellers: any;
  activeUsers: any;
  activeOrders: any;

  public charts: Array<Object>;
  private _init = false;

  constructor(private _pieChartService: PieChartService) {
     this.charts = this._pieChartService.getData();
     this.getCountofUser();
  }

  getCountofUser() {
    this._pieChartService.getUserCountOnDashBoard().subscribe(successData => {
    this.newBuyers = successData.data.newBuyers;
    this.newSellers = successData.data.newSellers;
    this.activeUsers = successData.data.activeUsers;
    this.activeOrders = successData.data.activeOrders;

    }, errorData => {

    });
  }

  ngAfterViewInit() {
    if (!this._init) {
      this._loadPieCharts();
      this._updatePieCharts();
      this._init = true;
    }
  }

  ngOnInit() {

  }


  private _loadPieCharts() {

    jQuery('.chart').each(function () {
      const chart = jQuery(this);
      chart.easyPieChart({
        easing: 'easeOutBounce',
    onStep: function (from, to, percent) {
          jQuery(this.el).find('.percent').text(Math.round(percent));
        },
        barColor: jQuery(this).attr('data-rel'),
        trackColor: 'rgba(0,0,0,0)',
        size: 84,
        scaleLength: 0,
        animation: 2000,
        lineWidth: 9,
        lineCap: 'round',
      });
    });
  }

  private _updatePieCharts() {
    let getRandomArbitrary = (min, max) => { return Math.random() * (max - min) + min; };

    jQuery('.pie-charts .chart').each(function(index, chart) {
      jQuery(chart).data('easyPieChart').update(getRandomArbitrary(55, 90));
    });
  }
}
