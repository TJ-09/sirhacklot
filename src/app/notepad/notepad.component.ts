import { Component,ViewEncapsulation } from '@angular/core';


@Component({
    selector: 'notepad',
       //   encapsulation: ViewEncapsulation.None,  // Use to disable CSS Encapsulation for this component
	//styleUrls: ['./app/notepad/notepad.css'],
templateUrl: './app/notepad/notepad.component.html'
})

export class NoteAppComponent {



  notes = ['Note 1'];
  addNote(newNote: string) {
    if (newNote) {
      this.notes.push(newNote);
    }
  }

}
