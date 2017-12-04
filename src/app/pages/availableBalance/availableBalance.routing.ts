import { Routes, RouterModule }  from '@angular/router';

import { AvailableBalanceComponent } from './availableBalance.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: AvailableBalanceComponent,
    children: [
      // { path: 'treeview', component: TreeViewComponent }
    ],
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
