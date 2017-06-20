// npm install --save redux @angular-redux/store

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgReduxModule } from '@angular-redux/store'

// Components
import { AppComponent } from './app.component';
import { rootReducer, IAppState, INITIAL_STATE, CounterActions } from './store'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule
  ],
  providers: [CounterActions],
  bootstrap: [AppComponent]
})
export class AppModule { }
