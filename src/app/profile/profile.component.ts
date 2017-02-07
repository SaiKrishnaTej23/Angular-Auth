import { Component, OnInit } from '@angular/core';
import { UserService } from "../utility/user.service";
import { User } from '../entities/users';
@Component({
    selector: 'profile-app',
    templateUrl: 'profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    constructor(private user : UserService) { }
    User:User;
    Back:string;
    ngOnInit() { 
        this.user.userDetails().subscribe((user:User) => this.User = user );
    }
}