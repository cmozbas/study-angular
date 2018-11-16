import {Observable} from 'rxjs/Observable';
import "rxjs/Rx";

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';


describe('Second test', function(){
    /*
    Here is what happen. If we send three ajax call A1 A2 A3 and if we have to wait
    for the 
    */
    it('Test case', () => {
        
        //timerOne emits first value at 1s, then once every 4s
        const timerOne = Observable.timer(100, 200).take(3);
        //timerTwo emits first value at 2s, then once every 4s
        const timerTwo = Observable.timer(150, 200).take(3);
        //timerThree emits first value at 3s, then once every 4s
        const timerThree = Observable.timer(180, 200).take(3);

        //when one timer emits, emit the latest values from each timer as an array
        const combined = Observable.combineLatest(
            timerOne,
            timerTwo,
            timerThree
        );

        const subscribe = combined.subscribe(latestValues => {
            //grab latest emitted values for timers one, two, and three
            const [timerValOne, timerValTwo, timerValThree] = latestValues;
            /*
                Example:
                timerOne first tick: 'Timer One Latest: 1, Timer Two Latest:0, Timer Three Latest: 0
                timerTwo first tick: 'Timer One Latest: 1, Timer Two Latest:1, Timer Three Latest: 0
                timerThree first tick: 'Timer One Latest: 1, Timer Two Latest:1, Timer Three Latest: 1
            */
            console.log(`Timer One Latest: ${timerValOne}`);
            console.log(`Timer Two Latest: ${timerValTwo}`);
            console.log(`Timer Three Latest: ${timerValThree}`);
            console.log('_');
        });
    });
});
