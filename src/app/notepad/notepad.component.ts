import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from 'ng2-webstorage';


@Component({
    selector: 'notepad',
//    providers: [],
//	encapsulation: ViewEncapsulation.Native,  // CSS Encapsulation for this component
//styleUrls: ['./app/notepad/notepad.css'],
	templateUrl: './app/notepad/notepad.component.html'

})

export class NoteAppComponent implements OnInit {

 notes = [];
 storednotes;


  addNote(newNote: string) {
    if (newNote) {
      this.notes.push(newNote);
      this.storednotes = JSON.stringify(this.notes);
      this.storage.store('notes', this.storednotes);
    }
  }

    deleteNote() {
    var index = this.notes.indexOf(this.notes);
    this.notes.splice(index, 1);
    this.storednotes = JSON.stringify(this.notes);
    this.storage.store('notes', this.storednotes);
  }

  constructor(private storage:LocalStorageService) {}

 ngOnInit() {

var pullednotes = JSON.parse(this.storage.retrieve('notes'));

       // this.pullednotes = this.storage.retrieve('boundValue');
      this.notes = pullednotes
   }

}
