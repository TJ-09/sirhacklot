import { Component } from '@angular/core';

@Component({
    selector: 'jail',
    templateUrl: './app/jail/jail.component.html'
})

export class JailComponent {

  _open: boolean = false;

  _toggleSidebar() {
    this._open = !this._open;
  }

}
