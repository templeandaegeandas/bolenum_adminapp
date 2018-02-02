import {Component ,  EventEmitter} from '@angular/core';
import {GlobalState} from '../../../global.state';
import {BaMenuItem} from '../baMenu/components/baMenuItem/baMenuItem.component'

@Component({
  selector: 'ba-content-top',
  styleUrls: ['./baContentTop.scss'],
  templateUrl: './baContentTop.html',
})
export class BaContentTop {

  public activePageTitle:string = '';

  constructor(private _state:GlobalState , private BaMenuItem:BaMenuItem) {
   
    this._state.subscribe('menu.activeLink', (activeLink) => {
      if (activeLink) {
        console.log(activeLink);
        this.activePageTitle = activeLink.title;
      }
    });
  }

  onToggleSubMenu(a,b){
      console.log("dbjndf", b);
    }

    getSubMenuData(data) {
      console.log('-------', data)
    }
}
