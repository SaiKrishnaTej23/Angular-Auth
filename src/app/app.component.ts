import {Component, OnInit} from '@angular/core';
import { Router, NavigationStart , NavigationEnd, NavigationError } from '@angular/router';
import 'rxjs/add/operator/filter';
import { ActionService } from './utility/action.service';
import { UserService } from './utility/user.service';
import { EventBusService } from './utility/eventbus.service';
import { NavItem } from './entities/navitem';
@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls : ['./app.component.css']
})
export class AppComponent implements OnInit {
  isCompleted:boolean = false;
  AppNavItems: NavItem[] = new Array<NavItem>();
   private options:any ={
    position: ["bottom", "right"],
    timeOut: 5000,
    lastOnBottom: true,
    pauseOnHover:true,
    preventLastDuplicates:true, 
};
   constructor(
    private router:Router,
   private action:ActionService,
   private user:UserService,
   private eventbus:EventBusService
   ) {
            setTimeout(() => {    this.isCompleted = true;  }, 1000);
              
              router.events
              .filter(event => event instanceof NavigationStart)
              .subscribe((event:NavigationStart) => {
                this.isCompleted = false;
              });

              router.events
              .filter(event => event instanceof NavigationEnd)
              .subscribe((event:NavigationEnd) => {
                this.isCompleted = true;
              
              });

              this.eventbus.listen('LoggedIn').subscribe((e)=>{this.setNavBar()})
  }

  handleTabChange(value){
    //this.action.LogAction(value,1);
  }

  logout(){
    this.action.LogAction("Logout Succesfull !");
    this.setNavBar();
  }

  setNavBar() {
        this.AppNavItems = new Array<NavItem>();
        
        if (this.user.isLoggedIn()) {
            this.AppNavItems.push(new NavItem("", "/home", "Home", ""));

            this.AppNavItems.push(new NavItem("", "/about", "About", ""));
            //this.NavItems.push(new NavItem("","/github","Github",""));
            this.AppNavItems.push(new NavItem("", "/contact", "Contact", ""));
            this.AppNavItems.push(new NavItem("", "/posts", "Posts", ""));
        }
    }

    ngOnInit(){
      this.setNavBar();
    }

}
