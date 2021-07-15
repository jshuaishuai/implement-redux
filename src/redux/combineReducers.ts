import {
  ReducersMapObject,
  StateFromReducersMapObject,
  Reducer,
} from './types/reducer';
import { AnyAction } from './types/actions';
import { CombinedState } from './types/store';

export default function combineReducers<S>(
  reducers: ReducersMapObject<S, any>,
): Reducer<CombinedState<S>>;
export default function combineReducers(reducers: ReducersMapObject) {
  return function combination(
    state: StateFromReducersMapObject<typeof reducers> = {},
    action: AnyAction,
  ) {
    let nextState: StateFromReducersMapObject<typeof reducers> = {};
    const reducerKeys = Object.keys(reducers);
    for (let i = 0; i < reducerKeys.length; i += 1) {
      const key = reducerKeys[i];
      nextState[key] = reducers[key](state[key], action);
    }
    return nextState;
  };
}
