import { Component, OnInit } from '@angular/core';
import { User } from '../entities/users';
import { UserService } from '../utility/user.service';
import { Router } from '@angular/router';
import { ActionService } from '../utility/action.service';
import { Post } from '../entities/post';
import { NotificationsService } from 'angular2-notifications';
@Component({
    selector: 'regis-app',
    templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
    constructor(
        private user: UserService,
         private router: Router,
         private action:ActionService,
         private notify:NotificationsService) { }
    User: User = new User();
    ngOnInit() { 
        this.User.Id =0;
        this.User.Name = '';
        this.User.Username = '';
        this.User.Password = '';
        this.User.HasAccess = false;
        this.User.Permissions =[];
        this.User.PhotoUrl = '';
        this.User.Posts = new Array<Post>();
    }

    register() {
        if (this.User.Username != "" && this.User.Password != "" && this.User.HasAccess) {
            var users = new Array<number>();
            var max = 0;
            this.user.users().subscribe((res: User[]) => {
                res.forEach(element => {
                    users.push(element.Id);
                });
                max = users.sort().reverse()[0];
                this.action.LogAction("New User Id :" + (max + 1).toString(), 1  );
                this.User.Id = max + 1;
                this.User.Permissions = ['/home', 'about', '/login'];
                this.user.register(this.User).subscribe((res) => {
                    if (res) {
                        this.router.navigateByUrl('/login');
                    }
                });
            });

        }
        else {

           this.notify.error("Please complete the form!"," Warning")
        }
    }
}