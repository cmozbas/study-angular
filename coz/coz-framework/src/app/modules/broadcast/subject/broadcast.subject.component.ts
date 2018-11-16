import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/Rx';
 

@Component({
    moduleId: module.id,
    selector: 'broadcast-subject',
    templateUrl: './broadcast.subject.component.html',
    styleUrls: ['../css/broadcast.css']
})

export class BroadcastSubjectComponent implements OnInit, OnDestroy { 
    private subject : Subject<number> = new Subject();
    private replaySubject : ReplaySubject<number> = new ReplaySubject();
    message : string = '';

    private subscriber1: Subscription;
    private subscriber2: Subscription;
    private subscriber3: Subscription;
    private isSubscriber1Follow: boolean = false;
    private isSubscriber2Follow: boolean = false;
    private isSubscriber3Follow: boolean = false;

    constructor(){ 
    }

    ngOnInit(): void { }

    ngOnDestroy() { }

    // broadcast
    broadcastClick() : void {
        this.message += '\n';
        this.subject.next(Math.round(Math.random() * 100));
    }

    // subscriber 1
    subscriber1Click(){
        if(!this.isSubscriber1Follow){
            this.subscriber1 = this.subject
            .subscribe(val => {
                this.message += "sub1: " + val + "\n";
            });
        }
        
        this.isSubscriber1Follow = true;
    }
    unsubscriber1Click(){
        this.subscriber1.unsubscribe();
        this.isSubscriber1Follow = false;
    }
    
    // subscriber 2
    subscriber2Click(){
        if(!this.isSubscriber2Follow){
            this.subscriber2 = this.subject.subscribe(val => {
                this.message += "sub2: " + val + "\n";
            });
        }
        
        this.isSubscriber2Follow = true;
    }
    unsubscriber2Click(){
        this.subscriber2.unsubscribe();
        this.isSubscriber2Follow = false;
    }
 }
