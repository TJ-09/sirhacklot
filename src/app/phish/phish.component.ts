import { Component } from '@angular/core';
import {ProgressBarModule} from 'primeng/primeng';
import {DropdownModule} from 'primeng/primeng';
import {SelectItem} from 'primeng/primeng';
import {LocalStorageService} from 'ng2-webstorage';
import {Message} from 'primeng/primeng';
import {GrowlModule} from 'primeng/primeng';


@Component({
    selector: 'phish',
  //  styleUrls: ['./app/phish/paper-bootstrap-wizard.css'],
 //  encapsulation: ViewEncapsulation.Native,
    templateUrl: './app/phish/phish.component.html'
})

export class PhishComponent {

  public dynamic:number = 20;
  public max:number = 5;
  public type:string;

  //for the stepping through
steps:number = 1;

      countUp() {
        this.steps++;
    }
          countDown() {
        this.steps--;
    }

 //below are the vars for the email selection
 public victim:string;
 public dogname:string;
 public vetname:string;
 public nastylink:string;

//progress bar
    value5: number =50;

//for the char name
character;

// this gets the name when the view loads
   ngOnInit() {
      this.character = this.storage.retrieve('Char');
}

//First Selection Box
    options1: SelectItem[];
    selectedOption1: string;

    //Second Selection Box
    options2: SelectItem[];
    selectedOption2: string;

    //push all the data in the arrays
 constructor(private storage:LocalStorageService) {
        this.options1 = [];
        this.options1.push({label:'Select City', value:null});
        this.options1.push({label:'New York', value:{id:1, name: 'New York', code: 'NY'}});
        this.options1.push({label:'Rome', value:{id:2, name: 'Rome', code: 'RM'}});
        this.options1.push({label:'London', value:{id:3, name: 'London', code: 'LDN'}});
        this.options1.push({label:'Istanbul', value:{id:4, name: 'Istanbul', code: 'IST'}});
        this.options1.push({label:'Paris', value:{id:5, name: 'Paris', code: 'PRS'}});

        this.options2 = [];
        this.options2.push({label:'Select City', value:null});
        this.options2.push({label:'York', value:{id:1, name: 'New York', code: 'NY'}});
        this.options2.push({label:'boston', value:{id:2, name: 'Rome', code: 'RM'}});
        this.options2.push({label:'on', value:{id:3, name: 'London', code: 'LDN'}});
        this.options2.push({label:'nbul', value:{id:4, name: 'Istanbul', code: 'IST'}});
        this.options2.push({label:'s', value:{id:5, name: 'Paris', code: 'PRS'}});
    }

//this is for the notepad to open and close

  _open: boolean = false;

  _toggleSidebar() {
    this._open = !this._open;
  }


//below is for the toaster

msgs: Message[] = [];

    showWarn() {
        this.msgs = [];
        this.msgs.push({severity:'warn', summary:"You Don't want to do that!", detail:"That is our evil link! You don't want to steal your own password!"});
    }
}
