import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrl: './comp2.component.scss'
})
export class Comp2Component implements OnInit{

  inputText:string="";
  constructor(private ds:DataserviceService){

  }
  ngOnInit(): void {
      this.ds.dataEmitter.subscribe((val)=>{
        this.inputText=val
      })
  }

} 
