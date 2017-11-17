import { Injectable } from '@angular/core';
import { BaThemeConfigProvider, colorHelper } from '../../../theme';
import { HttpClient } from '../../../app.client.interceptor';

@Injectable()
export class PieChartService {

  constructor(private _baConfig: BaThemeConfigProvider, private http: HttpClient) {
  }

  getUserCountOnDashBoard() {
      return this.http.get('api/v1/admin/buyer/seller')
      .map(res => res.json());
  }
  getData() {
    const pieColor = this._baConfig.get().colors.custom.dashboardPieChart;
    return [
      {
        color: '#3498DB',
        description: 'dashboard.new_visits',
        stats: '57,820',
        icon: 'person',


      }, {
        color: '#F1C40F  ',
        description: 'dashboard.purchases',
        stats: '89,745',
        icon: 'money',
      }, {
        color: '#8E44AD',
        description: 'dashboard.active_users',
        stats: '178,391',
        icon: 'face',
      }, {
        color: '#EC7063  ',
        description: 'dashboard.returned',
        stats: '32,592',
        icon: 'refresh',
      },
    ];
  }
}
