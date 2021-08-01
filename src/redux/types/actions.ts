export interface Action<T = any> {
  type: T;
}
export interface AnyAction extends Action {
  // 允许在操作中定义任何额外的属性。
  [extraProps: string]: any;
}

// 函数类型的接口 接受 泛型A,P ,A是 ActionCreator 函数返回值， P 的约束条件是 满足any类型的数组
// 数组结构后是ActionCreator 函数的参数

export interface ActionCreator<A, P extends any[] = any[]> {
  (...args: P): A;
}

/**
 * Object whose values are action creator functions.
 */

export interface ActionCreatorsMapObject<A = any, P extends any[] = any[]> {
  [key: string]: ActionCreator<A, P>;
}
