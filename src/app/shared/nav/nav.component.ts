import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { UserService } from '../../utility/user.service';
import { User } from '../../entities/users';
import { ActionService } from '../../utility/action.service';
import { NavItem } from '../../entities/navitem';
import { EventBusService } from '../../utility/eventbus.service';

@Component({
    selector: 'nav-app',
    templateUrl: 'nav.component.html',
    styleUrls: ['nav.component.css']
})
export class NavComponent implements OnInit {
    constructor(private user: UserService, private action:ActionService, private eventbus:EventBusService) { 
         this.eventbus.listen('LoggedIn').subscribe((e)=>{this.UserName()})
    }
    @Input() NavItems: Array<NavItem>;
    Name: string;
    IsLoggedIn: boolean = false;
    ngOnInit() {
              this.UserName();    
    }

    UserName(){
        this.IsLoggedIn = this.user.isLoggedIn();
        
        if (this.user.isLoggedIn()) {
            console.log("entered on init");
            this.user.userDetails().subscribe((res: User) => this.Name = res.Name);
        }
    }

    logout() {
        this.user.logout();
        this.IsLoggedIn = false;
        this.action.LogAction("logged out successfully!",1);
        this.eventbus.dispatch(new Event("LoggedIn"));
    }
}

