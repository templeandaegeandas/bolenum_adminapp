import { Routes, RouterModule } from '@angular/router';

import { Dispute } from './dispute.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: Dispute,
    children: [
      //{ path: 'treeview', component: TreeViewComponent }
    ],
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
