import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LocalStorageService} from 'ng2-webstorage';
import {ConfirmDialogModule,ConfirmationService} from 'primeng/primeng';
import { Router } from '@angular/router';
import { Message } from 'primeng/primeng';
import { GrowlModule } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ModalDirective } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
    selector: 'search',
    templateUrl: './app/search/search.component.html',
    providers: [ConfirmationService]
})

export class SearchComponent {

    constructor(private storage:LocalStorageService, private confirmationService: ConfirmationService, private router: Router) {}

searchVar = '';
character; // this stores the selected character

// when the component loads get the char from the local storage
   ngOnInit() {
      this.character = this.storage.retrieve('Char');
}

//For the sidebar
    _open: boolean = false;

  _toggleSidebar() {
    this._open = !this._open;
  }

// below is for the popup checking if they want to carry on

    confirm1() {
        this.confirmationService.confirm({
            message: 'You will not be able to conduct further research once you do.',
            accept: () => {
            	document.getElementById("openModalButton").click();
            }
        });
    }

//below is the ending dialog box vars
    display: boolean = false;
    moveOn() {
        this.display = false;
        this.router.navigate(['/phish']);
    }

//this is the toaster help box
info: Message[] = [];

    showInfo() {
        this.info = [];
        this.info.push({severity:'info', summary:'Help', detail:"Try searching your victim's name"});
    }



      public alerts:Array<Object> = [];

  public closeAlert(i:number):void {
    this.alerts.splice(i, 1);
  }

  public addAlert():void {
    this.alerts.push({msg: "I didn't see anything in our notes about that organisation...try another or close this box and do more research", type: 'danger', closable: true});
  }
}