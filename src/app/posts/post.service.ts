import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import  {ObserveService} from '../utility/observeservice';
import {  Post} from '../entities/post';

@Injectable()
export class PostService {

    _baseAPI:string='https://jsonplaceholder.typicode.com';

    constructor(private http:Http, private observe:ObserveService) {

     }

     Posts():Observable<Post[]>{
         return this.http.get(this._baseAPI + '/posts')
             .map((x: Response) => this.observe.extractBody(x))
             .catch((y)=> this.observe.handleError(y));
     }

     Post(id:number):Observable<Post>{
        return this.http.get(this._baseAPI+'/posts/'+id)
             .map((x: Response) => this.observe.extractBody(x))
             .catch((y)=> this.observe.handleError(y));;
     }
}