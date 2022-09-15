import { createAction, createReducer, on } from "@ngrx/store";

export interface IAppState {
  counter: number;
}

export const appInitialState: IAppState = {
  counter: 0
}

//criando as actions
export const incrementaContador = createAction('[App] Aumenta contador');
export const decrementaContador = createAction('[App] Diminui contador');

export const appReducer = createReducer(
  //estado inicial
  appInitialState,
  //função para incrementar
  on(incrementaContador, (state) => {
    //é necessário sempre atualizar o state com o =
    state = {
      ...state,
      counter: state.counter + 1
    }
    return state;
  }),
  //função para decrementar
  on(decrementaContador, (state) => {
    //é necessário sempre atualizar o state com o =
    state = {
      ...state,
      counter: state.counter - 1
    }
    return state;
  }),

)
