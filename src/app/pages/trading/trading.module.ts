import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TradingFees } from './trading.component';
import { routing } from './trading.routing';
import { TabViewModule } from 'primeng/primeng';
import { NgaModule } from '../../theme/nga.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    TabViewModule,
    NgaModule,

  ],
  declarations: [
        TradingFees,
  ],
}) 
export class TradingsFees {}
