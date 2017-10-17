import {Component} from '@angular/core';

import {GlobalState} from '../../../global.state';

import {BaPageTopService} from './baPageTop.service';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'ba-page-top',
  templateUrl: './baPageTop.html',
  styleUrls: ['./baPageTop.scss'],
  providers: [BaPageTopService]
})
export class BaPageTop {

  public isScrolled:boolean = false;
  public isMenuCollapsed:boolean = false;

  constructor(private _state:GlobalState, private baPageTopService: BaPageTopService, private router: Router) {
    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
  }

  public toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
    return false;
  }

  public scrolledChanged(isScrolled) {
    this.isScrolled = isScrolled;
  }

  signOut() {
    this.baPageTopService.logOut().subscribe(success => {
      localStorage.clear();
      this.router.navigate(['login']);
    }, error => {
      localStorage.clear();
      this.router.navigate(['login']);
    })
  }
}
