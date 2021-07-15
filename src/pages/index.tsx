import { useState, useEffect } from 'react';
import { Button } from 'antd';
import store from '@/store';
import { actionCreators } from '@/store/reducers/counter';

export default function IndexPage() {
  const { getState, dispatch, subscribe } = store;
  const [value, setValue] = useState<number>(0);
  useEffect(() => {
    const unsubscribe = subscribe(() => setValue(getState().counter.value));
    return unsubscribe;
  }, []);
  // TODO 这是一个加操作
  const INCREMENTED = 'INCREMENTED';

  const handleIncremented = () => dispatch(actionCreators.incremented(2));
  // TODO 这是一个减操作
  const handleDecremented = () => dispatch(actionCreators.decremented(1));
  return (
    <div>
      <div>counter: {value}</div>
      <Button onClick={handleIncremented}>+</Button>
      <Button onClick={handleDecremented}>-</Button>
    </div>
  );
}
