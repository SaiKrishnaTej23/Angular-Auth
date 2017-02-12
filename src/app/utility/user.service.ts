// user.service.ts
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { User } from '../entities/users';
// import localStorage from 'localStorage';
import { AppSettings } from '../utility/appsettings';

@Injectable()
export class UserService {
 private loggedIn = false;

    constructor(private http: Http, private appsettings:AppSettings) {
        this.loggedIn = !!localStorage.getItem('auth_token');
    }
       
    base_address: string = this.appsettings.DataApiDomain;
    
    login(email, password) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', 'http://localhost:3000')

        return this.http.post(this.base_address + '/login',JSON.stringify({ email, password }),{ headers })
            .map(res => res.json())
            .map((res) => {
                if (res.success) {
                    localStorage.setItem('auth_token', res.auth_token);
                    localStorage.setItem('userId', res.userId);
                    console.log(res.auth_token + res.userId)
                    this.loggedIn = true;
                }

                return res.success;
            });
    }

    logout() {
        localStorage.removeItem('auth_token');
        this.loggedIn = false;
    }

    isLoggedIn() {
        return this.loggedIn;
    }

    userDetails(){
      var userId =  localStorage.getItem('userId');

      return this.http.get(this.base_address + '/users/'+userId.toString())
       .map(res => res.json());
    }

    register(User:User){
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', 'http://localhost:3000')

        return this.http.post(this.base_address + '/register',JSON.stringify({ User }),{ headers })
            .map(res => res.json())
            .map((res) => {
                return res.success;
            });
    }
    
    users(){
        return this.http.get(this.base_address + '/users/')
       .map(res => res.json());
    }
}