import { Subject } from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

export class EventBusService
{
    bus:Subject<Event> = new Subject<Event>();

    dispatch(data:Event){
        this.bus.next(data);
    }
    
    listen(type:string):Observable<Event> {
        return this.bus.filter(event=>event.type === type);
    }
}