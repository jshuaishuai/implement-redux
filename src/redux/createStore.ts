import { Action } from './types/actions';
import { Reducer } from './types/reducer';

const randomString = () =>
  Math.random().toString(36).substring(7).split('').join('.');

const ActionTypes = {
  INIT: `@@redux/INIT${/* #__PURE__ */ randomString()}`,
};

export default function createStore<S, A extends Action>(
  reducer: Reducer<S, A>,
  preloadedState?: S,
) {
  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function');
  }
  let currentState = preloadedState as S;
  let currentListeners: (() => void)[] = [];
  let isDispatching = false;

  /*
  读取存储管理的状态。
  @return应用程序的当前状态。
  */
  function getState() {
    return currentState;
  }

  function dispatch(action: A) {
    currentState = reducer(currentState, action);
    for (let i = 0; i < currentListeners.length; i += 1) {
      const listener = currentListeners[i];
      listener();
    }
    return action;
  }

  function subscribe(listener: () => void) {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function');
    }
    currentListeners.push(listener);
    return function () {
      currentListeners = currentListeners.splice(
        currentListeners.indexOf(listener),
        1,
      );
    };
  }
  dispatch({ type: ActionTypes.INIT } as A);
  return {
    getState,
    dispatch,
    subscribe,
  };
}
