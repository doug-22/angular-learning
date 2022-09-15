import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrementaContador, IAppState, incrementaContador } from 'src/app/store/app.state';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-gerenciar-estado',
  templateUrl: './gerenciar-estado.component.html',
  styleUrls: ['./gerenciar-estado.component.css']
})
export class GerenciarEstadoComponent implements OnInit {

  counter: number = 0;

  constructor(
    private store: Store<{ app: IAppState}>
  ) { }

  //adicionar 0 $ na variável quer dizer que ela é um Observable
  counterWithReducer$ = this.store.select('app').pipe(map(e => e.counter));

  ngOnInit(): void {
  }

  incrementaContador() {
    this.store.dispatch(incrementaContador())
  }
  decrementaContador() {
    this.store.dispatch(decrementaContador())
  }

}
