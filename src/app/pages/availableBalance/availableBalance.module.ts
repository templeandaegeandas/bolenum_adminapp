import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgaModule } from '../../theme/nga.module';
import { AvailableBalanceComponent } from './availableBalance.component';
import { TabViewModule } from 'primeng/primeng';
import { routing } from './availableBalance.routing';
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
  AvailableBalanceComponent,
  ],
})
export class AvailableBalanceModule {}
