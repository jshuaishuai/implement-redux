export interface Action<T = any> {
  type: T;
}
export interface AnyAction extends Action {
  // 允许在操作中定义任何额外的属性。
  [extraProps: string]: any;
}
