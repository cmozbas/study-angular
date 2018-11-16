import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';


@Component({
    moduleId: module.id,
    selector: 'broadcast-flatmap',
    templateUrl: './broadcast.flatmap.component.html',
    styleUrls: ['../css/broadcast.css']
})

export class BroadcastFlatMapComponent implements OnInit, OnDestroy {
    consoleMessage: string = '';
    likeCount: number = 0;
    unlikeCount: number = 0;
    private tweets = new Subject<Tweet>();

    constructor() { }

    ngOnInit(): void {
        // Here subscribe to tweets
        this.tweets.subscribe(tweet => {
            this.consoleMessage += "\n A new tweet added: " + tweet.text;
        });

        // Here, subscribe to observable of each tweet
        // This is quite similar to mergeMap
        this.tweets.asObservable()
            .flatMap(tweet => tweet.likes)
            .subscribe(like => {
                if(like == LikeAction.Like)
                    this.likeCount += 1;
                else if(like == LikeAction.Unlike)
                    this.unlikeCount += 1;
            });
    }

    ngOnDestroy() {
    }

    like() {
        let tweet = new Tweet("new like tweet text");
        // This will invoke component tweets subscribe
        this.tweets.next(tweet);
        // This will invoke tweet subscribe
        tweet.addTweet(LikeAction.Like);
    }
    unlike() {
        let tweet = new Tweet("new unlike tweet text");
        // This will invoke component tweets subscribe
        this.tweets.next(tweet);
        // This will invoke tweet subscribe
        tweet.addTweet(LikeAction.Unlike);
    }
}

enum LikeAction {
    Like = 1,
    Unlike = -1
}
class Tweet {
    likes = new Subject<LikeAction>();

    constructor(public text: string) { }
    
    addTweet(likeAction: LikeAction) {
        this.likes.next(likeAction);
    }
}
