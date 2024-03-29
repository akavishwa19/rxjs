import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'rxjs';

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
    setTimeout(()=>{
      observer.next("4")
    },4000)
    setTimeout(()=>{
      observer.next("5")
    },5000)

    observer.next("1");
    setTimeout(()=>{
      observer.next("1")
    },1000)
    observer.next("2");
//    observer.next("3");
//    observer.next("4");
//    observer.next("5");
  })

  ngOnInit() {
//    this.myObservable.subscribe((val)=>{
//      console.log(val)
//    })
  }

}
