import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor() { }

  dataEmitter=new Subject<string>();
  
  raiseDataEmmiterEvent(data:string){
    this.dataEmitter.next(data)
  }

}
