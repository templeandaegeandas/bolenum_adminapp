import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TradingFees } from './trading.component';
import { routing } from './trading.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
  ],
  declarations: [
        TradingFees,
  ],
}) 
export class TradingsFees {}
