import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { ToastrModule } from 'toastr-ng2';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient } from './app.client.interceptor';
import { NgxPaginationModule } from 'ngx-pagination';
import { StompService } from 'ng2-stomp-service';
import { WebsocketService } from './pages/webSocket/web.socket.service';
import { AppEventEmiterService } from './app.event.emmiter.service';
/*
 * Platform and Environment providers/directives/pipes
 */
import { routing } from './app.routing';

// App is our top level component
import { App } from './app.component';
import { AppState, InternalStateType } from './app.service';
import { GlobalState } from './global.state';
import { NgaModule } from './theme/nga.module';
import { PagesModule } from './pages/pages.module';


// Application wide providers
const APP_PROVIDERS = [
  AppState,
  GlobalState,
  HttpClient,
];

export type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void,
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [App],
  declarations: [
    App,
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    HttpModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgaModule.forRoot(),
    NgbModule.forRoot(),
    ModalModule.forRoot(),
    ToastrModule.forRoot( { preventDuplicates: true } ),
    BrowserAnimationsModule,
    PagesModule,
    NgxPaginationModule,
    routing,
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    APP_PROVIDERS,
    StompService,
    WebsocketService,
    AppEventEmiterService,
  ],
})

export class AppModule {

  constructor(public appState: AppState) {
  }
}
