import { Component } from '@angular/core';
import {ProgressBarModule} from 'primeng/primeng';
import {DropdownModule} from 'primeng/primeng';
import {SelectItem} from 'primeng/primeng';
import {LocalStorageService} from 'ng2-webstorage';
import {Message} from 'primeng/primeng';
import {GrowlModule} from 'primeng/primeng';
import {ConfirmDialogModule,ConfirmationService} from 'primeng/primeng';
import { Router } from '@angular/router';

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
 constructor(private storage:LocalStorageService, private confirmationService: ConfirmationService, private router: Router) {
        this.options1 = [];
        this.options1.push({label:'Select Address', value:null});
        this.options1.push({label:'Hogwarts', value:{id:1, name: 'Hogwarts', line1: 'Tower 25, Room 394', line2: 'Ross and Cromarty, DR01 6DF', phone:'01458 459-7435'}});
        this.options1.push({label:'Mt Doom', value:{id:2, name: 'Mt Doom', line1: 'Lava Walkway 6, Dungeon 14', line2: 'Northwest of the Black Land of Mordor', phone:'+99 475-7890'}});
        this.options1.push({label:'Endor', value:{id:3, name: 'Endor', line1: 'Tree House 675K, Eastern Block', line2: 'Moddell sector, Endor system', phone:'(745) 224-8810'}});
        this.options1.push({label:'Cloud 9', value:{id:4, name: 'Cloud 9', line1: 'Number 12 Gold Plated Row', line2: 'Sector 14, Fluffy Cloud C', phone:'(225) 451-0166'}});
        this.options1.push({label:'Doncaster', value:{id:5, name: 'Doncaster', line1: '12 Paker Street', line2: 'Yorkshire and the Humber, DN1 4JH', phone:'01302 574 115'}});

        this.options2 = [];
        this.options2.push({label:'Select animal', value:null});
        this.options2.push({label:'Dragon', value:{id:1, name: 'Dragon'}});
        this.options2.push({label:'Rino', value:{id:2, name: 'Rino'}});
        this.options2.push({label:'Dove', value:{id:3, name: 'Dove'}});
        this.options2.push({label:'Dog', value:{id:4, name: 'Dog'}});
        this.options2.push({label:'Snail', value:{id:5, name: 'Snail'}});

                this.options3 = [];
        this.options3.push({label:'Select Name', value:null});
        this.options3.push({label:'Gandalf', value:{id:1, name: 'Gandalf'}});
        this.options3.push({label:'Snuffles', value:{id:2, name: 'Snuffles'}});
        this.options3.push({label:'VP3-9C', value:{id:3, name: 'VP3-9C'}});
        this.options3.push({label:'Barbell', value:{id:4, name: 'Barbell'}});
        this.options3.push({label:'Paul', value:{id:5, name: 'Paul'}});

                this.options4 = [];
        this.options4.push({label:"Select Vet's Name", value:null});
        this.options4.push({label:'Walden Macnair', value:{id:1, name: 'Walden Macnair'}});
        this.options4.push({label:'Elron of Rivendell', value:{id:2, name: 'Elron of Rivendell'}});
        this.options4.push({label:'Mr D. Vader', value:{id:3, name: 'Mr D. Vader'}});
        this.options4.push({label:'Noah Genesis', value:{id:4, name:'Noah Genesis'}});
        this.options4.push({label:'Stevo Steve', value:{id:5, name: 'Stevo Steve'}});
    }

//this is for the notepad to open and close

  _open: boolean = false;

  _toggleSidebar() {
    this._open = !this._open;
  }

//to confirm if you want to move on
    confirm1() {
        this.confirmationService.confirm({
            message: 'Are you sure you are happy with your phishing email above?',
            accept: () => {
           this.router.navigate(['/success']);
            }
        });
    }

//below is for the toaster

msgs: Message[] = [];

    showWarn() {
        this.msgs = [];
        this.msgs.push({severity:'warn', summary:"You Don't want to do that!", detail:"That is our evil link! You don't want to steal your own password!"});
    }
}
