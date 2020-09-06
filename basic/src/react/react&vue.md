# React VS Vue 以及各自的特点 优缺点

## React

### 优点

- 引入了虚拟 DOM 和 diff 算法，提高了 Web 性能

`VDOM` :通过 JS 的对象模拟出 dom 的节点,然后通过 render 方法将虚拟 dom 转换成真实的 dom

算法复杂度为 O(n)
虚拟 dom 如何计算 diff
key 属性的作用

`Diff算法`:根据两个虚拟节点比较,返回一个 patch 对象,完成页面重新渲染

差异计算

先序深度优先遍历

## 为什么更快了

当然如果真的这样大面积的操作 DOM，性能会是一个很大的问题，所以 React 实现了一个虚拟 DOM，组件 DOM 结构就是映射到这个虚拟 DOM 上，React 在这个虚拟 DOM 上实现了一个 diff 算法，当要更新组件的时候，会通过 diff 寻找到要变更的 DOM 节点，再把这个修改更新到浏览器实际的 DOM 节点上，所以实际上不是真的渲染整个 DOM 树。这个虚拟 DOM 是一个纯粹的 JS 数据结构，所以性能会比原生 DOM 快很多。

- 组件化，模块化开发。便于我们后期维护性
- 单向数据流，比较有序，便于数据管理。

### 缺点

- react 中只是 MVC 模式的 View 部分，所以在 react 开发中要依赖很多其他模块。

- 当父组件进行重新渲染时，即使子组件的 props 或 state 没有任何改变，也会同样进行重新渲染。（react 如何避免重复渲染）

### 特点

1. 声明式设计（React 采用声明式，可以轻松描述应用。）
2. 高性能（React 通过对 DOM 的模拟，最大限度地减少与 DOM 的交互。）
3. 灵活（React 可以与已知的库或框架很好地配合。）

## 在 React 如何做性能优化？

1. 给 DOM 的遍历上加上唯一的 key。提高 diff 算法效率。
   尽量不要用 index,如果说在 DOM 中删了某一个节点，index 也就会发生变化，这时候就会重新渲染，所以 key 值最好使用 id。
2. 能用 const 声明的就用 const。在 render 里面尽量减少新变量的创建以及函数的指向改变问题。
3. 减少对真实 DOM 的操作。
4. 如果是用 webpack 搭建环境的话，当一个包过大加载过慢时，可分成多个包来优化。
5. 使用 react-loadable，按需加载路由
6. 定时器，超时器使用过后在 unmount 中清除。
7. immutable 对象管理状态 让状态不能被更改
8. 把 component 更换成 pureComponent 也可以进行优化

## 你对 pureComponent 的理解

1. 当更新时，如果组件的 props 或者 state 都没有改变，render 函数就不会触发。
2. 省去虚拟 DOM 的生成和对比过程，达到提升性能的目的。
3. 具体原因是因为 react 自动帮我们做了一层浅比较

## react 如何避免重复渲染

React 官方提供了 PureRenderMixin 插件，它的功能就是在不需要重新渲染的情况下让 shouldComponentUpdate 返回 false, 使用这个插件就能够减少不必要的重新渲染，性能得到也得到一些提升。

但是在 React 的新版本里面，提供了 React.PureComponent，而不需要使用这个插件。 所以说一个较大的组件决定重渲染的时候，我们可以在每一个子组件中绑定（新的）shouldComponentUpdate 方法，这样可以减少子组件重新渲染的次数。

## 无状态组件和有状态组件有什么区别

### 无状态组件

> 无状态组件的创建形式使代码的可读性更好，而且减少了大量冗余的代码，以至于只有一个 render 方法。组件不会被实例化组件不能访问 this 对象，也不能访问生命周期方法无状态组件只能访问输入的 props ，同样的 props 渲染同样的结果，而且没有副作用。

### 有状态组件

> React.Component 创建的组件，其成员函数不会自动绑定 this，如果我们没有手动绑定 this，就不能获取当前组件实例对象。React.Component 创建的组件，其状态 state 是在 constructor 中像初始化组件属性一样去声明。

`补充：React.Component 有三种手动绑定方法`

```javascript
constructor(props) {
  super(props);
  this.handleClick = this.handleClick.bind(this); //构造函数中绑定
}
```

```jsx
<div onClick={this.handleClick.bind(this)}></div> //使用 bind 来绑定
```

```jsx
<div onClick={() => this.handleClick()}></div> //使用 arrow function 来绑定
```

如何选择哪种方式创建组件只要有可能，尽量使用无状态组件。如果需要 state、生命周期方法等，使用 class 的创建组件

## react 在哪个生命周期做优化?

可以在 shouldComponentUpdate 这个方法进行优化，用来判断是否调用 render 方法重绘 dom。
因为 dom 的重绘非常消耗性能，所以可以在这个方法中去做 dom 的 diff 算法的优化，这样就可以极大的提高性能。

但对于我们中级工程师来说，一般我不会去修改 shouldComponentUpdate 这个方法。而是直接去使用。True/false

## react 组件间传值

- props 传值，父组件通过 props 向子组件传值，子组件通过回调函数向父组件传值
- redux 跨级通信。
- 通过 prop-types 的 context 实现跨级通信
  跨级组件间双向通信：使用 context 对象，根组件和其他所有子孙通信，不太适合组件间通信（可以实现，不好维护）
- 使用事件订阅实现非嵌套组件间通信，也可以实现跨级组件间通信

## porps 和 state 的区别

`props`:组件中通讯使用,自上而下传递,只读
`state`:组件内的状态维护,可以更新子组件的 props

## 对 react 中事件机制的理解

Reac 事件是合成事件，不是原生事件。

合成事件和原生事件的区别：

（1） 写法不同：合成事件是 camal 命名法，原生事件是全部小写

（2） 绑定位置不同：合成事件全部委派到 document 上，原生事件绑定到真实 dom 上。所以一般是在 componentDidMount 中或者 ref 回调函数中绑定，在 componentWillUnmount 阶段进行解绑，防止内存泄漏。

（3） 执行顺序不同：先执行原生事件，事件冒泡至 document 上，再执行合成事件。

## react 在哪个生命周期做优化

可以在 shouldComponentUpdate 这个方法进行优化，用来判断是否调用 render 方法重绘 dom。
因为 dom 的重绘非常消耗性能，所以可以在这个方法中去做 dom 的 diff 算法的优化，这样就可以极大的提高性能。

但对于我们中级工程师来说，一般我不会去修改 shouldComponentUpdate 这个方法。而是直接去使用。True/false
