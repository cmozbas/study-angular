import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/Rx';
 

@Component({
    moduleId: module.id,
    selector: 'broadcast',
    templateUrl: './broadcast.component.html',
    styleUrls: ['./css/broadcast.css']
})

export class BroadcastComponent implements OnInit, OnDestroy { 
    
    // keys : Subject<KeyValue<string, boolean>>;
    behaviourSubject: boolean = false;
    flatmap: boolean = false;
    switchmap: boolean = false;
    map: boolean = false;
    mergemap: boolean = false;
    observable: boolean = false;
    subject: boolean = false;
    replaySubject: boolean = false;
    forkjoin: boolean = false;
    scan: boolean = true;

    constructor(){ 
    }

    ngOnInit(): void { 
    }

    ngOnDestroy() { }

    toggle(key){
        if(key == 'replaySubject')
            this.replaySubject = !this.replaySubject;
        if(key == 'subject')
            this.subject = !this.subject;
        if(key == 'observable')
            this.observable = !this.observable;
        if(key == 'map')
            this.map = !this.map;
        if(key == 'flatmap')
            this.flatmap = !this.flatmap;
        if(key == 'behaviourSubject')
            this.behaviourSubject = !this.behaviourSubject;
        if(key == 'switchmap')
            this.switchmap = !this.switchmap;
        if(key == 'mergemap')
            this.mergemap = !this.mergemap;
        if(key == 'forkjoin')
            this.forkjoin = !this.forkjoin;
        if(key == 'scan')
            this.scan = !this.scan;
    }
    
    openAll(){
        this.behaviourSubject = true;
        this.flatmap = true;
        this.map = true;
        this.observable = true;
        this.subject = true;
        this.replaySubject = true;
        this.switchmap = true;
        this.mergemap = true;
        this.forkjoin = true;
        this.scan = true;
    }

    closeAll(){
        this.behaviourSubject = false;
        this.flatmap = false;
        this.map = false;
        this.observable = false;
        this.subject = false;
        this.replaySubject = false;
        this.switchmap = false;
        this.mergemap = false;
        this.forkjoin = false;
        this.scan = false;
    }
 }

class KeyValue<K, V>{
    key: K;
    value: V;
}
