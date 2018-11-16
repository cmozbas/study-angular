import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Http } from '@angular/http';

import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';


@Component({
    moduleId: module.id,
    selector: 'broadcast-scan',
    templateUrl: './broadcast.scan.component.html',
    styleUrls: ['../css/broadcast.css']
})

export class BroadcastScanComponent implements OnInit, OnDestroy {
    private accumulater = new Subject<number>();
    accumNumbers: string = '';

    constructor(private http: Http) {
    }

    ngOnInit(): void { 
        var ones = this.accumulater.asObservable().mapTo(1);
        
        var seed = 10;
        // acc = last value. Starting from 10
        // one = incoming value which is 1
        var count = ones.scan((acc, one) => acc + one, seed);
        count.subscribe(x => this.accumNumbers += x + ', ');
    }

    accumNumber() {
        this.accumulater.next(1);
    }

    ngOnDestroy() {

    }


}
