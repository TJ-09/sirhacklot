import { Component } from '@angular/core';
import {LocalStorageService} from 'ng2-webstorage';
import { Message } from 'primeng/primeng';
import { GrowlModule } from 'primeng/primeng';

@Component({
    selector: 'success',
    templateUrl: './app/success/success.component.html'
})

export class SuccessComponent {


 constructor(private storage:LocalStorageService) {}



	//for temp stprage of the char name
character;
characterId;

  show: boolean = false;
password: string = '****************';

  showPassword() {
    this.show = !this.show
    if(this.show=false) {
    this.password = '****************';
    }
    else{
    	this.password = 'ilovekittens';
    }
  }

// this gets the name when the view loads from the local storage
   ngOnInit() {
      this.character = this.storage.retrieve('Char');
      this.characterId = this.storage.retrieve('CharId');
}


//this is the toaster help box
info: Message[] = [];

    addAlert() {
        this.info = [];
        this.info.push({severity:'error', summary:'You have one shot!', detail:"Pick your target better as we might only have one shot at this!"});
    }



}
