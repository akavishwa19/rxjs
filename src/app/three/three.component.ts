import { Component, OnInit } from '@angular/core';
import { of,from, map, filter } from 'rxjs';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrl: './three.component.scss'
})
export class ThreeComponent implements OnInit {
  ngOnInit(): void {
      this.filteredObservable.subscribe((value)=>{
        console.log(value)
      })
  }

  arr1=[1,2,3,4,5];
  arr2=['a','b','c','d'];

  // myObservable=of(this.arr1,this.arr2)

  myObservable=from(this.arr1)

  transformedObservable=this.myObservable.pipe(map((val)=>{
    return val*5
  }))

  filteredObservable=this.transformedObservable.pipe(filter((val)=>{
    return val>30
  }))

  // transformedObservable=this.myObservable.pipe(map((val)=>{
  //   return val*5
  // }),
  // filter((val)=>{
  //   return val>20
  // }))

}
