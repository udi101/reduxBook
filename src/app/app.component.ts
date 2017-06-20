import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { CounterActions, IAppState, rootReducer, INITIAL_STATE } from './store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title = 'app';

  @select() count$: Observable<number>;
  @select() name$: Observable<string>;


  constructor(private ngRedux: NgRedux<IAppState>,
    private actions: CounterActions) {

  }

  ngOnInit() {
    this.ngRedux.configureStore(rootReducer, INITIAL_STATE);
  // this.subscription = this.ngRedux.select<number>('count').subscribe(newCount => this.count = newCount);
  }

  increment(): void {
    this.ngRedux.dispatch(this.actions.increment());
  };
  decrement(): void {
    this.ngRedux.dispatch(this.actions.decrement());
  };
  lower(): void {
    this.ngRedux.dispatch(this.actions.lowerString());
  }
}
