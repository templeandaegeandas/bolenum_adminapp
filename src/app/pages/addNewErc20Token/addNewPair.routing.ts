import { Routes, RouterModule }  from '@angular/router';

import { AddNewErc20TokenComponent } from './addNewErc20Token.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: AddNewErc20TokenComponent,
    children: [
      // { path: 'treeview', component: TreeViewComponent }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
