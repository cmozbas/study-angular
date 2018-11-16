import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Http } from '@angular/http';

import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';


@Component({
    moduleId: module.id,
    selector: 'broadcast-mergemap',
    templateUrl: './broadcast.mergemap.component.html',
    styleUrls: ['../css/broadcast.css']
})

// https://coryrylan.com/blog/angular-multiple-http-requests-with-rxjs
// https://www.youtube.com/watch?v=b59tcUwfpWU
export class BroadcastMergeMapComponent implements OnInit, OnDestroy {
    private urlData: string = 'https://swapi.co/api/people/1/?format=json';

    message: string = '';

    constructor(private http: Http) {
    }

    ngOnInit(): void { }

    send() {
        let loadedCharacter: any = null;

        // WITH MULTIPLE SUBSCRIBE
        // this.http.get(this.urlData)
        //     .map(res => {
        //         // Map will return the result by json
        //         return res.json();
        //     })
        //     .subscribe(character => {
        //         // Here the caracter is the result returned by map value
        //         // Then we load the caracter homeworld
        //         this.http.get(character.homeworld).subscribe(homeworld => {
        //             character.homeworld = homeworld;
        //             loadedCharacter = character;

        //             this.message = loadedCharacter.name;
        //         });
        //     });

        // SAMETHING WITH MERGEMAP
        this.http.get(this.urlData)
            .map(character => {
                // Map will return the result by json
                return character.json();
            })
            .mergeMap(character => {
                // Here the caracter is the result returned by map value
                // Then we load the caracter homeworld
                return this.http.get(character.homeworld)
                    .map(homeworld => {
                        // Here we initialize the homeworld of the caracter
                        character.homeworld = homeworld.json();
                        // And as a return, I return the caracter but I could return also homeworld
                        // Then the subscribe method would have the homeworld instead of the caracter
                        return character;
                    });
            })
            .subscribe((character: any) => {
                // This
                this.message = character.name + ', homeworld is: ' + character.homeworld.name;
            });
    }

    ngOnDestroy() {

    }


}
