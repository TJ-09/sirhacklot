import {Component, OnInit, ViewContainerRef } from '@angular/core';


@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
})

export class AppComponent implements OnInit {
    ngOnInit() {
        console.log('AppComponent initializing...');
    }
  private viewContainerRef: ViewContainerRef;

  public constructor(viewContainerRef:ViewContainerRef) {
    // You need this small hack in order to catch application root view container ref
    this.viewContainerRef = viewContainerRef;
  }
}
