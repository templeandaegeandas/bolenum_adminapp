import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';

import { UsersQueries } from './usersQueries.component';
import { routing } from './usersQueries.routing';
import { TableFilterPipe } from './table-filter.pipe';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
    imports: [
    CommonModule,
    FormsModule,
    AppTranslationModule,
    NgaModule,
    routing,
    Ng2SmartTableModule,
    NgxPaginationModule,
  ],
  declarations: [
   UsersQueries,
    TableFilterPipe,
  ],
  providers: [],
})
export class UsersQueriesModule {}
