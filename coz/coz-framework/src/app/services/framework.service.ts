

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { Http, Response } from '@angular/http';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class FrameworkService{

    constructor(private httpService : Http){}

    public simpleArray() : void{
        
        let arr : Array<number> = [1,2,3,4,5];
        arr.map(x => x * 2)
        .filter(x => x > 5)
        .forEach((val, index) => { arr[index] = val + 10 });

        console.log(arr);
    }
    
    public observableHttp() : Observable<Response> {
        let url : string = 'https://qa.jeddo.sea.corp.expecn.com/odata/SalesforceOwnerDepartmentNotifications?$format=json';
        
        let call : Observable<Response> = this.httpService
            .get(url)
            .map(rep => rep.json());
            // .do(data => console.log('observableHttp(): do function'))
            // .catch(this.handleError);

        return call;
    }

    // private handleError(error : Response){
    //     console.log('FrameworkService::handleError(..): ');
    //     console.log(error);
    //     return Observable.throw(error.json().error);
    // }
}