import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgaModule } from '../../theme/nga.module';
import { NotificationDetailsComponent } from './notificationDetails.component';
import { TabViewModule } from 'primeng/primeng';
import { routing } from './notificationDetails.routing';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    NgaModule,
    routing,
    TabViewModule,
    FormsModule,
    

  ],
  declarations: [
  NotificationDetailsComponent,
  ],
})
export class NotificationDetailsModule {}
