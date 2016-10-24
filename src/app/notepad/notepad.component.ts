import { Component } from '@angular/core';


@Component({
    selector: 'notepad',
//	encapsulation: ViewEncapsulation.Native,  // CSS Encapsulation for this component
//styleUrls: ['./app/notepad/notepad.css'],
	templateUrl: './app/notepad/notepad.component.html'
})

export class NoteAppComponent {

  notes = ['Sample Note'];
  addNote(newNote: string) {
    if (newNote) {
      this.notes.push(newNote);
    }
  }

    deleteNote() {
    var index = this.notes.indexOf(this.notes);
    this.notes.splice(index, 1);
  }

}
