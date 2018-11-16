import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

 

@Component({
    moduleId: module.id,
    selector: 'broadcast-observable',
    templateUrl: './broadcast.observable.component.html',
    styleUrls: ['../css/broadcast.css']
})

export class BroadcastObservableComponent implements OnInit, OnDestroy { 
    private observable : Observable<number>;
    message : string = '\n';

    private subscriber1: Subscription;
    private subscriber2: Subscription;

    constructor(){ 
    }

    ngOnInit(): void { }

    ngOnDestroy() { }

    // broadcast
    broadcastClick() : void {
        
        this.observable = Observable.create(function(source : Subject<number>){
            this.message += '\n';
            source.next(Math.round(Math.random() * 100));
        });
    }

    // subscriber 1
    subscriber1Click(){
        if(!!this.observable){
            this.subscriber1 = this.observable
            .subscribe(val => {
                this.message += "sub1: " + val + "\n";
            });
        }
    }
    unsubscriber1Click(){
        this.subscriber1.unsubscribe();
    }
    
    // subscriber 2
    subscriber2Click(){
        if(!!this.observable){
            this.subscriber2 = this.observable.subscribe(val => {
                this.message += "sub2: " + val + "\n";
            });
        }
    }
    unsubscriber2Click(){
        this.subscriber2.unsubscribe();
    }
 }
