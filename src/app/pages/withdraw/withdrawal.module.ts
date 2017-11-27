import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WithdrawalFees } from './withdrawal.component';
import { routing } from './withdrawal.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
  
  
  ],
  declarations: [
        WithdrawalFees,
        
   
  ],
})
export class WithdrawFess {
}
