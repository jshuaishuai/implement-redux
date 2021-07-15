# 【redux 系列】从简单例子入门到如何用 TS 实现 Redux

## Getting Started

本次文章目的很简单就是想通过一个简单的例子让新手熟悉 `Redux` 在 `TS` 中的使用，以及对于老手巩固一下`Redux` 的核心实现原理。

> 文章不会过多介绍概念内容，相信你是对 `Redux` 概念是有一定理解的

### Redux 工作流程

- Redux 可以将应用程序的整个全局状态存储在一个单一的 store 对象树中
- 全局转态是不可以直接修改的，需要派发一个 action 即一个动作给 store 修改
- 为了描述 action 如何改变状态 ，你需要编写 reducer 函数，该函数基于旧状态和操作计算新状态
- 通过发布订阅模式 订阅 store 中的状态变化来更新视图

### 准备阶段

为了简单方便这里直接使用 Umi 来生成基础模板

```bash
mkdir implement-redux
cd implement-redux
yarn create @umijs/umi-app
yarn install
```

初始化好项目后，我们实现一下 Redux [github](https://github.com/reduxjs/redux/blob/master/README.md) 上的加一减一的基本示例
