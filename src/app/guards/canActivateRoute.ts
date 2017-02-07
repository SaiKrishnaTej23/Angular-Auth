import { RouterModule, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate ,Router } from '@angular/router';
import { Injectable  } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {UserService  } from '../utility/user.service';

@Injectable()
export class CanActivateRoute implements CanActivate {
  constructor(private router: Router,private user: UserService) {}
  
  canActivate( route: ActivatedRouteSnapshot,    state: RouterStateSnapshot  ): Observable<boolean>|Promise<boolean>|boolean {
      var HasAccess = this.user.isLoggedIn();
      if(!HasAccess)
      this.router.navigateByUrl('/restrict');
    return HasAccess;
  }
}

