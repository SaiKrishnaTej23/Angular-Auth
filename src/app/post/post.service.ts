import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import  {ObserveService} from '../utility/observeservice';
import {  Post} from '../entities/post';
import { AppSettings } from '../utility/appsettings';

@Injectable()
export class PostService {
    constructor(private http:Http,
     private observe:ObserveService,
     private appsettings:AppSettings
     ) {

     }
    _baseAPI:string='https://jsonplaceholder.typicode.com';

    _baselocal:string = this.appsettings.DataApiDomain;
    

     Posts():Observable<Post[]>{
         return this.http.get(this._baselocal + '/posts')
             .map((x: Response) => this.observe.extractBody(x))
             .catch((y)=> this.observe.handleError(y));
     }

     Post(id:number):Observable<Post>{
        return this.http.get(this._baseAPI+'/posts/'+id)
             .map((x: Response) => this.observe.extractBody(x))
             .catch((y)=> this.observe.handleError(y));
     }

     AddPost(body:Post):Observable<boolean>{
         return this.http.post(this._baselocal + '/addpost',body)
         .map((x: Response) => this.observe.extractBody(x))
         .catch((err)=> this.observe.handleError(err)) ;
     }

     UpdatePost(body:Post):Observable<boolean>{
         return this.http.post(this._baseAPI+ '/updatepost',body)
         .map((x: Response) => this.observe.extractBody(x))
         .catch((err)=> this.observe.handleError(err)) ;
     }

     DeletePost(Id:number):Observable<boolean>{
         return this.http.get(this._baseAPI+ '/deletepost',Id)
         .map((x: Response) => this.observe.extractBody(x))
         .catch((err)=> this.observe.handleError(err)) ;
     }
}