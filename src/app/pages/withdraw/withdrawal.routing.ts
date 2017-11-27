import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { WithdrawalFees } from './withdrawal.component';


// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: WithdrawalFees,
   
  },
];


export const routing: ModuleWithProviders = RouterModule.forChild(routes);


