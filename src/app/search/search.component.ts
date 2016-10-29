import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LocalStorageService} from 'ng2-webstorage';
import {ConfirmDialogModule,ConfirmationService} from 'primeng/primeng';
import { Router } from '@angular/router';
import {Message} from 'primeng/primeng';
import {GrowlModule} from 'primeng/primeng';


@Component({
    selector: 'search',
    templateUrl: './app/search/search.component.html',
    providers: [ConfirmationService]
})

export class SearchComponent {

    constructor(private storage:LocalStorageService, private confirmationService: ConfirmationService, private router: Router,
) {}

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
    this.router.navigate(['/phish']);
            }
        });
    }

info: Message[] = [];

    showInfo() {
        this.info = [];
        this.info.push({severity:'info', summary:'Help', detail:"Try searching your victim's name"});
    }
}