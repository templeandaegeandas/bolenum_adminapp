import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';
import { NgxPaginationModule } from 'ngx-pagination';

import { Dispute } from './dispute.component';
import { routing } from './dispute.routing';
import { TableFilterPipe } from './table-filter.pipe';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DataTableModule } from 'angular2-datatable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppTranslationModule,
    NgaModule,
    routing,
    Ng2SmartTableModule,
    DataTableModule,
    NgxPaginationModule,
  ],
  declarations: [
    Dispute,
    TableFilterPipe,
  ],
  providers: [],
})
export class DisputeModule {}
