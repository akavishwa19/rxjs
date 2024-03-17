import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrl: './one.component.scss'
})
export class OneComponent implements OnInit{
  ngOnInit() {
//    this.myObservable.subscribe((value)=>{
//      console.log(value)
//    },
//    (error)=>{
//      alert(error.message)
//    },
//    ()=>{
//      alert('observable completed')
//    })
  }
  myObservable=new Observable((observer)=>{
    console.log('observable starts');
    setTimeout(()=>{
      observer.next("1")
    },1000)
    setTimeout(()=>{
      observer.next("2")
    },2000)
    setTimeout(()=>{
      observer.next("3")
    },3000)
//    setTimeout(()=>{
//      observer.error(new Error('something went wrong'))
//    },3500)
    setTimeout(()=>{
      observer.next("4")
    },4000)
    setTimeout(()=>{
      observer.next("5")
    },5000)
    setTimeout(()=>{
      observer.complete()
    },6000)
  })
}
