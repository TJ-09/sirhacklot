import { Component, OnInit, Input } from '@angular/core';
import { Result } from '../result-list/result-list.model'


@Component({
    selector: 'result-item',
    templateUrl: './app/result-item/result-item.component.html',

})

export class ResultItemComponent implements OnInit {
    @Input() result: Result;

    ngOnInit() {

    }

}
