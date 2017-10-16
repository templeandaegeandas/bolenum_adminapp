import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgaModule } from '../../theme/nga.module';
import { AddNewErc20TokenComponent } from './addNewErc20Token.component';
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
  AddNewErc20TokenComponent,
  ],
})
export class AddNewErcModule {}
