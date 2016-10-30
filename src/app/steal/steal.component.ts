import { Component } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/ng2-bootstrap';
import {LocalStorageService} from 'ng2-webstorage';

@Component({
    selector: 'steal',
    templateUrl: './app/steal/steal.component.html'
})

export class StealComponent {


 constructor(private storage:LocalStorageService) {}


    openAdvice() {
        document.getElementById("openAdviceBox").click();
    }

	//for temp stprage of the char name
character;
characterId;

// this gets the name when the view loads from the local storage
   ngOnInit() {
      this.character = this.storage.retrieve('Char');
      this.characterId = this.storage.retrieve('CharId');

}



