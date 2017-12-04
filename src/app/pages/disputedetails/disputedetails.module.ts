import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgaModule } from '../../theme/nga.module';
import { Disputedetails } from './disputedetails.component';
import { TabViewModule } from 'primeng/primeng';
import { routing } from './disputedetails.routing';
@NgModule({
  imports: [
    CommonModule,
    NgaModule,
    routing,
    TabViewModule,

  ],
  declarations: [
 Disputedetails,
  ],
})
export class DisputedetailsModule {}
