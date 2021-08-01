import counter from './counter';

import { combineReducers } from '@/redux';

let reducers = {
  counter,
};

let combinedReducer = combineReducers(reducers);
export default combinedReducer;

type ReducersType = typeof reducers;
type CombinedState = {
  [key in keyof ReducersType]: ReturnType<ReducersType[key]>;
};
export { CombinedState };
