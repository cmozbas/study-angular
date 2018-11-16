import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Http } from '@angular/http';

import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
// import 'rxjs/add/observable/forkJoin';


@Component({
    moduleId: module.id,
    selector: 'broadcast-forkjoin',
    templateUrl: './broadcast.forkjoin.component.html',
    styleUrls: ['../css/broadcast.css']
})

// https://coryrylan.com/blog/angular-multiple-http-requests-with-rxjs
// https://www.youtube.com/watch?v=b59tcUwfpWU
export class BroadcastForkJoinComponent implements OnInit, OnDestroy {

    message: string = '';

    constructor(private http: Http) {
    }

    ngOnInit(): void { }

    send() {
        let loadedCharacter: any = null;

        let character = this.http.get('https://swapi.co/api/people/1/?format=json').map(res => res.json());
        let characterHomeworld = this.http.get('http://swapi.co/api/planets/1/?format=json').map(res => res.json());

        Observable.forkJoin([character, characterHomeworld]).subscribe(results => {
            // results[0] is our character
            // results[1] is our character homeworld
            let character = results[0];
            character.homeworld = results[1];

            this.message = character.name + ', homeworld is: ' + character.homeworld.name;
        });
    }

    ngOnDestroy() {

    }


}
