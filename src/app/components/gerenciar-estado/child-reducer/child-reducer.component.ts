import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { IAppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-child-reducer',
  templateUrl: './child-reducer.component.html',
  styleUrls: ['./child-reducer.component.css']
})
export class ChildReducerComponent implements OnInit {


  constructor(
    private store: Store<{ app: IAppState}>
  ) { }

  counterWithReducer$ = this.store.select('app').pipe(map(e => e.counter));


  ngOnInit(): void {
  }

}
