import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgaModule } from '../../theme/nga.module';
import { Disputedetails } from './disputedetails.component';
import { TabViewModule } from 'primeng/primeng';
import { routing } from './disputedetails.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
@NgModule({
  imports: [
    CommonModule,
    NgaModule,
    routing,
    TabViewModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule
  ],
  declarations: [
 Disputedetails,
  ],
})
export class DisputedetailsModule {}
