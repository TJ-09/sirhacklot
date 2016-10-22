import { Component } from '@angular/core';
import { Result } from '../result-list/result-list.model'
import { CommonModule } from '@angular/common';

@Component({
    selector: 'search',
    templateUrl: './app/search/search.component.html'
})

export class SearchComponent {

searchVar = '';


    _open: boolean = false;

  _toggleSidebar() {
    this._open = !this._open;
  }

}
