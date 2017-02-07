import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ActionService } from './action.service';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ObserveService {

  constructor(private action:ActionService) { }

  public extractData(res: Response): any {
    let body = res.json();
    //this.action.LogAction(body);
    return body.data || {};
  }

  public extractBody(res: Response): any {
    let body = res.json();
    //this.action.LogAction(body);
    return body || {};
  }

  public handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    this.action.LogAction(errMsg);
    return Observable.throw(errMsg);
  }
}