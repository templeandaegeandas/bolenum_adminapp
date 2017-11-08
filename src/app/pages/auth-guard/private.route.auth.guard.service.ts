import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { WebsocketService } from '../webSocket/web.socket.service';

@Injectable()
export class PrivateRouteAuthGuard implements CanActivate {

    constructor(private router: Router, private websocketService: WebsocketService) {
      if (localStorage.getItem('token')) {
          this.websocketService.connectForLoggedInUser(1);
      }
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('token')) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}
