declare const $CombinedState: unique symbol;

export type CombinedState<S> = { readonly [$CombinedState]?: undefined } & S;
