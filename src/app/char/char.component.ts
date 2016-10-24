import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from 'ng2-webstorage';


@Component({
    selector: 'char',
    templateUrl: './app/char/char.component.html'
})

export class CharComponent {
 attribute;
  constructor(private storage:LocalStorageService) {}

    saveValueTony() {
      this.storage.store('Char', 'Tony Tonne');
    }
        saveValueSarah() {
      this.storage.store('Char', 'Sarah Gabriel');
    }
        saveValueJoe() {
      this.storage.store('Char', 'Joe Merlin');
    }

 ngOnInit() {
 	this.storage.clear();
 }

}
