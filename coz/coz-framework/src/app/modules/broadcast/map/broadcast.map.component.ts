import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';


@Component({
    moduleId: module.id,
    selector: 'broadcast-map',
    templateUrl: './broadcast.map.component.html',
    styleUrls: ['../css/broadcast.css']
})

export class BroadcastMapComponent implements OnInit, OnDestroy {
    private demoInput: Element;
    message: string;

    constructor() {
    }

    ngOnInit(): void {
        this.demoInput = document.querySelector('#demo');

        /*
        ** This won't work becouse fromEvent will the click object: 
        ** Event {isTrusted: true, type: "input", target: input#demo, currentTarget: input#demo, eventPhase: 2…}
        */
        let obs1 = Observable.fromEvent(this.demoInput, 'keyup');
        obs1.subscribe(fromEvent => {
            // Event {isTrusted: true, type: "input", target: input#demo, currentTarget: input#demo, eventPhase: 2…}
            console.log(fromEvent);
        });

        let obs2 = Observable.fromEvent(this.demoInput, 'keyup')
            .map((e: any) => {
                return e.target.value;
            })
            .filter(value => value > 0)
            .map(v => {
                return {
                    value: v,
                    length: v.length
                };
            });
            
        obs2.subscribe( (val: any) => { 
            this.message = 'value: ' + val.value + ', length: ' + val.length; 
        });

        // ADD A LISTENER
        // let pointEnterEvent: PointerEvent;
        // this.demoInput.addEventListener("pointerenter", (evt:PointerEvent ) => {
        //     console.log('point entered');
        //     pointEnterEvent = evt;
        // });

    }

    ngOnDestroy() {

    }


}
