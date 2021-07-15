import { Action, AnyAction } from './types/actions';

function bindActionCreator<A extends AnyAction = AnyAction>(
  actionCreator: ActionCreator<A>,
  dispatch: Dispatch,
) {
  return function (this: any, ...args: any[]) {
    return dispatch(actionCreator.apply(this, args));
  };
}

export interface ActionCreator<A, P extends any[] = any[]> {
  (...args: P): A;
}
/**
 * Object whose values are action creator functions.
 */
export interface ActionCreatorsMapObject<A = any, P extends any[] = any[]> {
  [key: string]: ActionCreator<A, P>;
}
export interface Dispatch<A extends Action = AnyAction> {
  <T extends A>(action: T, ...extraArgs: any[]): T;
}

export default function bindActionCreators(
  actionCreators: ActionCreator<any> | ActionCreatorsMapObject,
  dispatch: Dispatch,
) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error(`bindActionCreators expected an object or a function`);
  }

  const boundActionCreators: ActionCreatorsMapObject = {};
  for (const key in actionCreators) {
    const actionCreator = actionCreators[key];
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}
