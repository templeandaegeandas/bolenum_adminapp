import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgaModule } from '../../theme/nga.module';
import { SetValueComponent } from './setValue.component';
import { TabViewModule } from 'primeng/primeng';
import { routing } from './setValue.routing';
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
  SetValueComponent,
  ],
})
export class SetValueModule {}
