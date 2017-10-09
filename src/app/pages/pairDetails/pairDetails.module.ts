import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgaModule } from '../../theme/nga.module';
import { PairDetails } from './pairDetails.component';
import { TabViewModule } from 'primeng/primeng';
import { routing } from './pairDetails.routing';
@NgModule({
  imports: [
    CommonModule,
    NgaModule,
    routing,
    TabViewModule,

  ],
  declarations: [
  PairDetails,
  ],
})
export class PairDetailsModule {}
