import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ng2DeviceDetectorModule } from 'ng2-device-detector';

import { PrivateRouteAuthGuard } from './auth-guard/private.route.auth.guard.service';
import { PublicRouteAuthGuard } from './auth-guard/public.route.auth.guard.service';

import { routing } from './pages.routing';
import { NgaModule } from '../theme/nga.module';
import { AppTranslationModule } from '../app.translation.module';

// import { AddErc20Module } from './addErc20/addErc20.module';
// import { AdderDetailsModule } from './adderDetails/adderDetails.module';
// import { DashboardModule } from './dashboard/dashboard.module';
// import { HistoricalOrder } from './historicalOrderbook/historicalOrderbook.module';
// import { kycDetailsModule } from './KycDetails/kycDetails.module';
// import { OrderDetailsModule } from './orderDetails/orderDetails.module';
// import { PendingKycModule } from './pendingKyc/pendingKyc.module';
// import { ReplyModule } from './reply/reply.module';
// import { UserDetailModule } from './userDetails/userDetail.module';

import { Pages } from './pages.component';
import { UserprofileComponent } from './userprofile/userprofile.component';



@NgModule({
  imports: [
    CommonModule,
    AppTranslationModule,
    NgaModule,
    routing,
    Ng2DeviceDetectorModule.forRoot(),
  ],
  declarations: [
    Pages,
    UserprofileComponent
  ],
  providers: [
    PrivateRouteAuthGuard,
    PublicRouteAuthGuard
  ]
})
export class PagesModule {
}
