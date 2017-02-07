import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { UserService } from '../utility/user.service';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { ActionService } from '../utility/action.service';
import { EventBusService } from '../utility/eventbus.service';
@Component({
    selector: 'login-app',
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    constructor(
    private user:UserService,
    private router:Router,
    private notify:NotificationsService,
    private action:ActionService,
    private eventbus:EventBusService
    ) { }


    email:string;
    password:string;
    ngOnInit() { }
    
    login(){
        
        this.user.login(this.email, this.password).subscribe((result) => {
      if (result) {
          this.router.navigateByUrl('/home');
          this.eventbus.dispatch(new Event("LoggedIn"));
          this.notify.alert("Login Succesfull !"," Happy browsing ...");
      }
      else{
          this.action.LogAction("Login failed",1);
          this.router.navigateByUrl('/restrict');
      }
    });
    }
}