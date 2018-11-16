
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class MessageService{
    private subject = new Subject<IMessage>();

    sendMessage(msg: string){
        this.subject.next({ from: "Cem", message: msg });
    }

    clearMessage(){
        this.subject.next();
    }

    getMessage() : Observable<IMessage>{
        return this.subject.asObservable();
    }
}

export class IMessage{
    message: string;
    from: string;
}

