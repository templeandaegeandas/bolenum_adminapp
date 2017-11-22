import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ForgotPassword } from './forgotPassword.component';
import { routing } from './forgotPassword.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
  
  
  ],
  declarations: [
        ForgotPassword,
        
   
  ],
})
export class forgotPassword {
}
