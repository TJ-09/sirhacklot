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
        this.value5=(25*this.steps-25);
    }
          countDown() {
        this.steps--;
        this.value5=(25*this.steps-25);
    }

 //below are the vars for the email selection
 public victim:string;
 public dogname:string;
 public vetname:string;
 public nastylink:string;


// Set the addresses for the user to pick from
       addresses = [
        {label:'New York', value:{id:1, name: 'New York', code: 'NY'}},
        {label:'New York', value:{id:1, name: 'New York', code: 'NY'}},
        {label:'New York', value:{id:1, name: 'New York', code: 'NY'}}
        ];

//progress bar
    value5: number;

//for temp stprage of the char name
character;

// this gets the name when the view loads from the local storage
   ngOnInit() {
      this.character = this.storage.retrieve('Char');
}
// set the variables for the data to be populated into
//First Selection Box
    options1: SelectItem[];
    selectedOption1: string;

    //Second Selection Box
    options2: SelectItem[];
    selectedOption2: string;

        //third Selection Box
    options3: SelectItem[];
    selectedOption3: string;

        //forth Selection Box
    options4: SelectItem[];
    selectedOption4: string;

    //push all the data in the arrays for the selectors
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

                this.options3 = [];
        this.options3.push({label:'Select City', value:null});
        this.options3.push({label:'New York', value:{id:1, name: 'New York', code: 'NY'}});
        this.options3.push({label:'Rome', value:{id:2, name: 'Rome', code: 'RM'}});
        this.options3.push({label:'London', value:{id:3, name: 'London', code: 'LDN'}});
        this.options3.push({label:'Istanbul', value:{id:4, name: 'Istanbul', code: 'IST'}});
        this.options3.push({label:'Paris', value:{id:5, name: 'Paris', code: 'PRS'}});

                this.options4 = [];
        this.options4.push({label:'Select City', value:null});
        this.options4.push({label:'New York', value:{id:1, name: 'New York', code: 'NY'}});
        this.options4.push({label:'Rome', value:{id:2, name: 'Rome', code: 'RM'}});
        this.options4.push({label:'London', value:{id:3, name: 'London', code: 'LDN'}});
        this.options4.push({label:'Istanbul', value:{id:4, name: 'Istanbul', code: 'IST'}});
        this.options4.push({label:'Paris', value:{id:5, name: 'Paris', code: 'PRS'}});
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
