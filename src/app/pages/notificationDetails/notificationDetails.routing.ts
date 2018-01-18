import { Routes, RouterModule }  from '@angular/router';

import { NotificationDetailsComponent } from './notificationDetails.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    
    path: '',
    component: NotificationDetailsComponent,
    children: [
      // { path: 'treeview', component: TreeViewComponent }
    ],
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
