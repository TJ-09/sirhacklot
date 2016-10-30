import {Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
})

export class AppComponent implements OnInit {


    ngOnInit() {
        console.log('AppComponent initializing...');
         this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            document.body.scrollTop = 0;
        });
    }
  private viewContainerRef: ViewContainerRef;

  public constructor(viewContainerRef:ViewContainerRef,private router: Router) {
    // You need this small hack in order to catch application root view container ref
    this.viewContainerRef = viewContainerRef;
  }

}
