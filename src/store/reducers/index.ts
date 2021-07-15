import counter from './counter';

import { combineReducers } from '@/redux';

let reducers = {
  counter,
};
type ReducersType = typeof reducers;

type CombinedState = {
  [key in keyof ReducersType]: ReturnType<ReducersType[key]>;
};
export { CombinedState };

let combinedReducer = combineReducers(reducers);
export default combinedReducer;
