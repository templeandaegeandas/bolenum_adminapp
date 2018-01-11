import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgaModule } from '../../theme/nga.module';
import { AvailableBalanceComponent } from './availableBalance.component';
import { TabViewModule } from 'primeng/primeng';
import { routing } from './availableBalance.routing';
import { FormsModule } from '@angular/forms';
import { QRCodeModule } from 'angular2-qrcode';
import { ClipboardModule } from 'ngx-clipboard';
@NgModule({
  imports: [
    CommonModule,
    NgaModule,
    routing,
    TabViewModule,
    FormsModule,
    QRCodeModule,
    ClipboardModule,

  ],
  declarations: [
  AvailableBalanceComponent,
  ],
})
export class AvailableBalanceModule {}
