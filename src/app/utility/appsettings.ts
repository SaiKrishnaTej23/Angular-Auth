import { Http } from '@angular/http';
import { UtilityService } from './utilityservice';
export class AppSettings
{
    public ApiDomain:string = "http://localhost:3000/api/";

    public AppEnvironment:string = "DEV";

    public AppDomain:string = "http://localhost:3000/";

    constructor(private http:Http, private utilityservice: UtilityService ){
        this.SetParams();
    }

    SetParams(){
        this.utilityservice.ApiDomain().subscribe((z:string)=> this.ApiDomain = z);
    }
}