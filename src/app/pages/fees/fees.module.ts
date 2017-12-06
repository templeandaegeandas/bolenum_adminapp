import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FeesComponent } from './fees.component';
import { routing } from './fees.routing';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DataTableModule } from 'angular2-datatable';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Ng2SmartTableModule,
    DataTableModule,
  ],
  declarations: [
    FeesComponent,
    
  ],
  providers: [],
})
export class FeesModule {}
