import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from 'ng2-webstorage';

@Component({
    selector: 'home',
    templateUrl: './app/home/home.component.html'
})

export class HomeComponent {


   constructor(private storage:LocalStorageService) {}

	 ngOnInit() {
 	this.storage.clear();
 }
}
