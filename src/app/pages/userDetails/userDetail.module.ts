import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgaModule } from '../../theme/nga.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { UserDetail } from './userDetail.component';
import { TabViewModule } from 'primeng/primeng';
import { routing } from './userDetail.routing';
import { ImageZoomModule } from 'angular2-image-zoom';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    NgaModule,
    routing,
    TabViewModule,
    ModalModule,
    FormsModule,
    ImageZoomModule,
    NgxPaginationModule
      ],
  declarations: [
    UserDetail,
  ],
})
export class UserDetailModule {}
