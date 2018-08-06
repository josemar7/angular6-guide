import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-home-obs',
  templateUrl: './home-obs.component.html',
  styleUrls: ['./home-obs.component.css']
})
export class HomeObsComponent implements OnInit, OnDestroy {
  numbersObsSubscription: Subscription;
  customsObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    const myNumbers = Observable.interval(1000)
    .map(
      (data: number) => {
        return data * 2;
      }
    );
    this.numbersObsSubscription = myNumbers.subscribe(
      (number: number) => {
        console.log(number);
      }
    );

    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('first package');
      }, 2000);
      setTimeout(() => {
        observer.next('second package');
      }, 4000);
      setTimeout(() => {
        // observer.error('this does not work');
        observer.complete();
      }, 5000);
      setTimeout(() => {
        observer.next('third package');
      }, 6000);
    });
    this.customsObsSubscription = myObservable.subscribe(
      (data: string) => { console.log(data); },
      (error: string) => { console.log(error); },
      () => { console.log('completed!'); },
    );
  }

  ngOnDestroy() {
    this.numbersObsSubscription.unsubscribe();
    this.customsObsSubscription.unsubscribe();
  }


}
