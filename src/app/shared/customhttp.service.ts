import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptionsArgs } from '@angular/http';
@Injectable()
export class HttpClient {

    private headers: Headers = new Headers();

    private options : RequestOptionsArgs;

    public Token:string = "ajsdflasdflajsdf";

    constructor(private http:Http) {
            this.options =  this.createAuthorizationHeader(this.headers); 
     }

    createAuthorizationHeader(headers: Headers) {
     headers.append('Token', this.Token);
     return this.headers; 
    }

    get(url:string,body:any){
        return this.http.get(url,body).map((response: Response) => response.json());
    }

    post(url:string,body:any){
        return this.http.post(url,body,this.options).map((response: Response) => response.json());
    }
    update(url:string,body:any){
         return this.http.put(url,body,this.options).map((response: Response) => response.json());
    }

    delete(url:string,body:any){
         return this.http.post(url,body,this.options).map((response: Response) => response.json());
    }
}