import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgaModule } from '../../theme/nga.module';
import { AddNewPair } from './addNewPair.component';
import { TabViewModule } from 'primeng/primeng';
import { routing } from './addNewPair.routing';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    NgaModule,
    routing,
    TabViewModule,
    FormsModule

  ],
  declarations: [
  AddNewPair,
  ],
})
export class AddNewPairModule {}
