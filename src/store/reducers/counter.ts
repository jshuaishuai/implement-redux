export interface CountProps {
  value: number;
}
// state 初始值
export const initialState: CountProps = {
  value: 0,
};
// action-type
export const INCREMENTED = 'INCREMENTED';
export const DECREMENTED = 'DECREMENTED';
// action 类型别名
type DoIncremented = {
  type: typeof INCREMENTED;
  payload: number;
};

type DoDecremented = {
  type: typeof DECREMENTED;
  payload: number;
};
// action

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
      return { value: state.value + action.payload };
    }
    default:
      return state;
  }
}
