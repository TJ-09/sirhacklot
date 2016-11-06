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
import { PdfViewerComponent } from 'ng2-pdf-viewer';
import { Search } from './search';


@Component({
    selector: 'search',
    templateUrl: './app/search/search.component.html',
    providers: [ConfirmationService]
})

export class SearchComponent {

    constructor(private storage:LocalStorageService, private confirmationService: ConfirmationService, private router: Router) {}

public searchVar = '';

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
    showWarn() {
        this.info = [];
        this.info.push({severity:'error', summary:'Server Error', detail:'That page cannot be displayed'});
    }


      public alerts:Array<Object> = [];

  public closeAlert(i:number):void {
    this.alerts.splice(i, 1);
  }

  public addAlert():void {
    this.alerts.push({msg: "I didn't see anything in our notes about that organisation...try another or close this box and do more research", type: 'danger', closable: true});
  }

searchBox: string = '';


    searchClick() {
this.searchVar = 'load'
var lowerSearch = this.model.name.toLowerCase().trim();

setTimeout(() =>{
if(lowerSearch === 'tony tonne') {
this.searchVar = 'tony'
} else{
    if(lowerSearch === 'sarah gabriel') {
  this.searchVar = 'sarah'
    }
    else {
        if(lowerSearch === 'joe merlin') {
     this.searchVar = 'joe'
        }else{
          this.searchVar = 'no'
        }
    }
}
},1000);
    }


    tonyTw() {
        this.searchVar = 'load'
setTimeout(() =>{
        this.searchVar = 'tonyTW'
},500);
    }

    tonyFb() {
        this.searchVar = 'load'
setTimeout(() =>{
        this.searchVar = 'tonyFB'
},500);
    }
    tonyBack() {
        this.searchVar = 'load'
setTimeout(() =>{
        this.searchVar = 'tony'
},500);
    }

    sarahTw() {
        this.searchVar = 'load'
setTimeout(() =>{
        this.searchVar = 'sarahTW'
},500);
    }

    sarahFb() {
        this.searchVar = 'load'
setTimeout(() =>{
        this.searchVar = 'sarahFB'
},500);
    }
    sarahBack() {
        this.searchVar = 'load'
setTimeout(() =>{
        this.searchVar = 'sarah'
},500);
    }

    joeTw() {
        this.searchVar = 'load'
setTimeout(() =>{
        this.searchVar = 'joeTW'
},500);
    }
    joeFb() {
        this.searchVar = 'load'
setTimeout(() =>{
        this.searchVar = 'joeFB'
},500);
    }
    joeBack() {
        this.searchVar = 'load'
setTimeout(() =>{
        this.searchVar = 'joe'
},500);
    }

  public model = new Search(18, '','Chuck Overstreet');

}