import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import * as Rx from 'rxjs/Rx';
import { StompService } from 'ng2-stomp-service';
import { AppEventEmiterService } from '../../app.event.emmiter.service';

@Injectable()
export class WebsocketService {

  private subscription: any;
  private openSubscription: any;

  constructor(private stomp: StompService, private appEventEmiterService: AppEventEmiterService) {
    stomp.configure({
      host: environment.socketUrl,
      debug: true,
      queue: { 'init': false }
    });
  }

  connectForLoggedInUser(userId) {
    this.stomp.startConnect().then(() => {
      this.stomp.done('init');

      //subscribe
      this.subscription = this.stomp.subscribe('/websocket/broker/listner/admin', this.response);
    })
  }

  sendMessage(receiver, messageType) {
    this.stomp.send('/websocket/app/sender/admin', {
      receiver: receiver,
      messageType: messageType
    });
  }

  disconnect() {
    this.stomp.disconnect().then(() => {
      console.log( 'Connection closed' )
    })
  }

  response = (data) => {
    this.appEventEmiterService.changeMessage(data);
  }
}
