import { useState, useEffect } from 'react';
import { Button, Progress } from 'antd';
import store from '@/store';
import { bindActionCreators, Dispatch } from '@/redux';
import { actionCreators, incremented } from '@/store/reducers/counter';

export default function IndexPage() {
  const [value, setValue] = useState<number>();
  const { getState, dispatch, subscribe } = store;
  useEffect(() => {
    const unsubscribe = subscribe(() => setValue(getState().counter.value));
    return unsubscribe;
  }, []);

  // bindActionCreators 第一个参数既接受一个函数也接受一个对象，这个在ts
  // 上就需要对 bindActionCreators 进行重载
  const actionMapObject = bindActionCreators(
    actionCreators,
    dispatch as Dispatch,
  );
  // const actionMapObject = bindActionCreators(incremented, dispatch as Dispatch);
  // const dispatch: (action: AnyAction) => AnyAction
  // (alias) const incremented: (param: number) => DoIncremented
  // TODO 这是一个加操作
  const handleIncremented = () => actionMapObject.incremented(2);

  // TODO 这是一个减操作
  const handleDecremented = () => actionMapObject.decremented(2);

  return (
    <div style={{ margin: '20px' }}>
      <Progress type="circle" percent={value} />
      <Button onClick={handleDecremented}>-</Button>
      <Button onClick={handleIncremented}>+</Button>
    </div>
  );
}

// import { useState } from 'react';
// import { Button, Progress } from 'antd';

// export default function IndexPage() {
//   const [value, setValue] = useState<number>(0);

//   // TODO 这是一个加操作
//   const handleIncremented = () => setValue(value + 1);

//   // TODO 这是一个减操作
//   const handleDecremented = () => setValue(value - 1);

//   return (
//     <div style={{ margin: '20px' }}>
//       <Progress type="circle" percent={value} />
//       <Button onClick={handleDecremented}>-</Button>
//       <Button onClick={handleIncremented}>+</Button>
//     </div>
//   );
// }

// import { useState, useEffect } from 'react';
// import { Button, Progress } from 'antd';
// import store from '@/store';
// import { actionCreators } from '@/store/reducers/counter';
// export default function IndexPage() {
//   const [value, setValue] = useState<number>();
//   const { getState, dispatch, subscribe } = store;
//   useEffect(() => {
//     const unsubscribe = subscribe(() => setValue(getState().counter.value));
//     return unsubscribe;
//   }, []);

//   // TODO 这是一个加操作
//   const handleIncremented = () => dispatch(actionCreators.incremented(2));

//   // TODO 这是一个减操作
//   const handleDecremented = () => dispatch(actionCreators.decremented(1));

//   return (
//     <div style={{ margin: '20px' }}>
//       <Progress type="circle" percent={value} />
//       <Button onClick={handleDecremented}>-</Button>
//       <Button onClick={handleIncremented}>+</Button>
//     </div>
//   );
// }
