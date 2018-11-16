import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
 
import { MessageService } from './message.service';
import { FrameworkService } from '../../services/framework.service';
import { IMessage } from './message.service';

@Component({
    moduleId: module.id,
    selector: 'in-memory-message',
    templateUrl: './message.component.html',
})

export class MessageComponent implements OnInit, OnDestroy { 
    message : string;
    result: string;
    incomingMessage : IMessage;
    subscription: Subscription;

    constructor(
        private messageService : MessageService,
        private frameworkService : FrameworkService
    ){ }

    sendMessage(){
        console.log(this.message);
        this.messageService.sendMessage('Message from Service: ' + this.message);
    }

    ngOnInit(): void {
        this.subscription = this.messageService.getMessage()
        .subscribe(msg => { 
            this.incomingMessage = msg 
        });
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }

    frameworkTest() : void{
        // this.frameworkService.simpleArray();
        this.frameworkService.observableHttp().subscribe(res => console.log(res));
    }
 }
