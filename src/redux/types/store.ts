import { Action, AnyAction } from './actions';
declare const $CombinedState: unique symbol;

export type CombinedState<S> = { readonly [$CombinedState]?: undefined } & S;

// Dispatch 是个函数类型的接口 接受一个action 返回一个action 泛型 A 默认 为AnyAction

export interface Dispatch<A extends Action = AnyAction> {
  (action: A): A;
}
