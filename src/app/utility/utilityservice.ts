import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import  {ObserveService} from './observeservice';
import { User } from '../entities/users';

@Injectable()
export class UtilityService {

    constructor(private http:Http, private observe:ObserveService) { }

    ApiDomain(): Observable<string>{
        return this.http.get('url')
            .map(
                (x: Response) => this.observe.extractData(x),
            (y : any) => this.observe.handleError(y))
            ;
    }

    Users() : Observable<User[]>{
       return this.http.get('http://localhost:8080/api/users')
            .map((x: Response) => this.observe.extractData(x),
            (y : any) => this.observe.handleError(y))
            ; 
    }

}

