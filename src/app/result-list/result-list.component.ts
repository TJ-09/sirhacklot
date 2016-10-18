import { Component, OnInit, Input } from '@angular/core';
import { Result } from '../result-list/result-list.model'

@Component({
    selector: 'result-list',
    templateUrl: './app/result-list/result-list.component.html',

})

export class ResultListComponent implements OnInit {


    results: Result[];
    results2: Result[];

    constructor() {
        this.results = [
                new Result('Name Link 2', 'linky', 'descr'),
                new Result('Name Link 3', 'linky3', 'descr3'),
                new Result('Name Link 4', 'linky4', 'descr3'),
            ],

            this.results2 = [
                new Result('Name Link 5', 'linky', 'descr'),
                new Result('Name Link 6', 'linky3', 'descr3'),
                new Result('Name Link 7', 'linky4', 'descr3'),
            ];
    }

    //@Input() result: Result;

    ngOnInit() {

    }

}
