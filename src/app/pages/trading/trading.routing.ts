import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { TradingFees } from './trading.component';


// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: TradingFees,
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

