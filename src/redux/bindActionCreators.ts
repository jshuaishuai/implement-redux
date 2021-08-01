import {
  AnyAction,
  ActionCreator,
  ActionCreatorsMapObject,
} from './types/actions';
import { Dispatch } from './types/store';

function bindActionCreator<A extends AnyAction = AnyAction>(
  actionCreator: ActionCreator<A>,
  dispatch: Dispatch,
) {
  return function (this: any, ...args: any[]) {
    return dispatch(actionCreator.apply(this, args));
  };
}

export default function bindActionCreators<A, C extends ActionCreator<A>>(
  actionCreator: C,
  dispatch: Dispatch,
): C;

// export default function bindActionCreators<
//   A extends ActionCreator<any>,
//   B extends ActionCreator<any>,
// >(actionCreator: A, dispatch: Dispatch): B;

// export default function bindActionCreators<
//   A,
//   M extends ActionCreatorsMapObject<A>,
// >(actionCreators: M, dispatch: Dispatch): M;

export default function bindActionCreators<
  M extends ActionCreatorsMapObject,
  N extends ActionCreatorsMapObject,
>(actionCreators: M, dispatch: Dispatch): N;

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
