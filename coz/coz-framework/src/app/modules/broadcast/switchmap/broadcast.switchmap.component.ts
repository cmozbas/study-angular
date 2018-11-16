import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';


@Component({
    moduleId: module.id,
    selector: 'broadcast-switchmap',
    templateUrl: './broadcast.switchmap.component.html',
    styleUrls: ['../css/broadcast.css']
})


export class BroadcastSwitchMapComponent implements OnInit, OnDestroy {
    private firstData = new Subject<number>();
    private secondData = new Subject<number>();
    private thirdData = new Subject<number>();

    message: string = '';

    constructor() {
    }

    ngOnInit(): void {
        // Init the order of calls
        this.firstData.asObservable()
        .switchMap(firstData => {
            this.message += '\n firstData: ' + firstData;
            return this.secondData.asObservable();
        })
        .switchMap(secondData => {
            this.message += '\n secondData: ' + secondData;
            return this.thirdData.asObservable();
        })
        .subscribe((thirdData) => {
            this.message += '\n thirdData: ' + thirdData;
        });
    }

    send(){
        this.firstData.next(1);
        this.secondData.next(2);
        this.thirdData.next(3);
    }

    ngOnDestroy() {

    }


}
