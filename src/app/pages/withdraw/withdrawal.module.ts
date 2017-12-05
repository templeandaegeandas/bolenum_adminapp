import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WithdrawalFees } from './withdrawal.component';
import { routing } from './withdrawal.routing';
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
        WithdrawalFees,
        
   
  ],
})
export class WithdrawFess {
}
