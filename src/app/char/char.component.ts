import { Component } from '@angular/core';
import {LocalStorageService} from 'ng2-webstorage';


@Component({
    selector: 'char',
    templateUrl: './app/char/char.component.html'
})

export class CharComponent {

   constructor(private storage:LocalStorageService) {}

    saveValueTony() {
      this.storage.store('Char', 'Tony Tonne');
      this.storage.store('CharId', '1');
    }
        saveValueSarah() {
      this.storage.store('Char', 'Sarah Gabriel');
         this.storage.store('CharId', '3');
    }
        saveValueJoe() {
      this.storage.store('Char', 'Joe Merlin');
         this.storage.store('CharId', '2');
    }

}
