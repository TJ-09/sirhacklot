import { Component } from '@angular/core';
import {LocalStorageService} from 'ng2-webstorage';
import { Message } from 'primeng/primeng';
import { GrowlModule } from 'primeng/primeng';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ModalDirective } from 'ng2-bootstrap/ng2-bootstrap';
import { Router } from '@angular/router';

@Component({
    selector: 'success',
    templateUrl: './app/success/success.component.html'
})

export class SuccessComponent {


 constructor(private storage:LocalStorageService, private router: Router) {

 }

pause: string = 'doing';

	//for temp stprage of the char name
character;
characterId;
helpmsg:string

  show: boolean = false;
password: string = '****************';
charPassword:string;
charEmail:string;


  showPassword() {
    this.show = !this.show
    if(this.show=false) {
    this.password = '****************';
    }
    else{
    	this.password = this.charPassword;
    }
  }

// this gets the name when the view loads from the local storage
   ngOnInit() {
      this.character = this.storage.retrieve('Char');
      this.characterId = this.storage.retrieve('CharId');

      if(this.characterId === '1'){
this.charPassword = 'ilovekittens'
      }
   else{
     if(this.characterId === '2') {
this.charPassword = 'ilovepuppies'
      }
      else {
        this.charPassword = 'burnbabyburn'
      }
    }
      if(this.characterId === '1'){
this.charEmail = 'tony@bigweights.com'
      }
   else{
     if(this.characterId === '2') {
this.charEmail = 'joe@loneywizards.net'
      }
      else {
        this.charEmail = 'sarh@fluffyclouds.com'
      }
    }

this.helpmsg = this.character + "'s Email: " + this.charEmail +"  Password: " + this.charPassword

setTimeout(() =>{
        this.pause = 'done'
},2000);

}


//this is the toaster help box
info: Message[] = [];

    addInfo() {
        this.info = [];
        this.info.push({severity:'error', summary:'Clever Clogs', detail:"Did you really think that is the best option?"});
    }

    openBank() {
        document.getElementById("openBank").click();
    }

    checkPassword() {
    var both1 = this.userbx + this.passbx
    var both = both1.toLowerCase();
    console.log(both)
      if(both == 'tony@bigweights.comilovekittens' || both == 'joe@loneywizards.netilovepuppies' || both == 'sarh@fluffyclouds.comburnbabyburn') {
                this.router.navigate(['steal']);
} else {
                this.router.navigate(['jail']);
}
}


  public alerts:Array<Object> = [];

  public closeAlert(i:number):void {
    this.alerts.splice(i, 1);
  }

  public addAlert():void {
    this.alerts.push({msg: "Narclay's servers are not currently working so we are unable to process your request. Your money is safe trust us!", type: 'danger', closable: true});
  }

    public addHelp():void {
    this.alerts.push({msg: this.helpmsg, type: 'info', closable: true});
  }

  userbx: string;
  passbx: string;

}
