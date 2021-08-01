export interface CountProps {
  value: number;
}
// state 初始值
export const initialState: CountProps = {
  value: 0,
};
// action-type
const INCREMENTED = 'INCREMENTED';
const DECREMENTED = 'DECREMENTED';
// action 类型别名
export type DoIncremented = {
  type: typeof INCREMENTED;
  payload: number;
};

export type DoDecremented = {
  type: typeof DECREMENTED;
  payload: number;
};
// action
export type Incremented = (param: number) => DoIncremented;
export type Decremented = (param: number) => DoDecremented;

export const incremented = (param: number): DoIncremented => {
  return {
    type: INCREMENTED,
    payload: param,
  };
};

export const decremented = (param: number): DoDecremented => {
  return {
    type: DECREMENTED,
    payload: param,
  };
};

export const actionCreators = {
  incremented,
  decremented,
};
type Action = DoIncremented | DoDecremented;

// reducer
export default function (
  state: CountProps = initialState,
  action: Action,
): CountProps {
  switch (action.type) {
    case INCREMENTED: {
      return { value: state.value + action.payload };
    }
    case DECREMENTED: {
      return { value: state.value - action.payload };
    }
    default:
      return state;
  }
}
