import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrl: './two.component.scss'
})
export class TwoComponent implements OnInit{
  ngOnInit(): void {
    this.myObservale.subscribe((value:any)=>{
      console.log(value)
    })
  }
  myObservale=Observable.create((observer:any)=>{
    setTimeout(()=>{
      observer.next("a")
    },1000)
    setTimeout(()=>{
      observer.next("b")
    },2000)
    setTimeout(()=>{
      observer.next("c")
    },3000)
    setTimeout(()=>{
      observer.next("d")
    },4000)
    
  })
}
