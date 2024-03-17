import { DataserviceService } from './../dataservice.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrl: './comp1.component.scss'
})
export class Comp1Component {
  enteredString="";

  onClick(){
    console.log(this.enteredString);
    this.ds.raiseDataEmmiterEvent(this.enteredString)
  }
  
  constructor(private ds: DataserviceService){

  }
}
