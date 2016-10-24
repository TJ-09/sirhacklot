import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LocalStorageService} from 'ng2-webstorage';


@Component({
    selector: 'search',
    templateUrl: './app/search/search.component.html',
})

export class SearchComponent {

searchVar = '';

    _open: boolean = false;

  _toggleSidebar() {
    this._open = !this._open;
  }

character;
    constructor(private storage:LocalStorageService) {}

   ngOnInit() {
      this.character = this.storage.retrieve('Char');
}
}
