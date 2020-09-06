# React 文档

## JSX 简介

### 为什么使用 JSX

React 认为渲染逻辑本质上与其他 UI 逻辑内在耦合，比如，在 UI 中需要绑定处理事件、在某些时刻状态发生变化时需要通知到 UI，以及需要在 UI 中展示准备好的数据。

React 并没有采用将标记与逻辑进行分离到不同文件这种人为地分离方式，而是通过将二者共同存放在称之为“组件”的松散耦合单元之中，来实现关注点分离。

### JSX 防止注入攻击

React DOM 在渲染所有输入内容之前，默认会进行转义。它可以确保在你的应用中，永远不会注入那些并非自己明确编写的内容。所有的内容在渲染之前都被转换成了字符串。这样可以有效地防止 XSS（cross-site-scripting, 跨站脚本）攻击。

`JSX会自动删除空格符，换行符,原理可用正则替换`

## 元素渲染

**元素是构成 React 应用的最小砖块。**

特点:

1. 与浏览器的 DOM 元素不同，React 元素是创建开销极小的普通对象。React DOM 会负责更新 DOM 来与 React 元素保持一致。
2. React 只更新它需要更新的部分

```js
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById("root"));
}

setInterval(tick, 1000);
```

尽管每一秒我们都会新建一个描述整个 UI 树的元素，React DOM 只会更新实际改变了的内容，也就是例子中的文本节点。

## 组件 & Props

> 组件，从概念上类似于 JavaScript 函数。它接受任意的入参（即 “props”），并返回用于描述页面展示内容的 React 元素。

### 渲染组件

当 React 元素为用户自定义组件时，它会将 JSX 所接收的属性（attributes）以及子组件（children）转换为单个对象传递给组件，这个对象被称之为 “props”。

### Props 的只读性

组件无论是使用函数声明还是通过 class 声明，都决不能修改自身的 props。
所有 React 组件都必须像纯函数一样保护它们的 props 不被更改。

## State & 生命周期

### State

State 与 props 类似，但是 state 是私有的，并且完全受控于当前组件。

### 正确地使用 State

1. 不要直接修改 State
   - 使用 setState();
   - 构造函数是唯一可以给 this.state 赋值的地方
2. State 的更新可能是异步的
   - 出于性能考虑，React 可能会把多个 setState() 调用合并成一个调用。
   - this.props 和 this.state 可能会异步更新，所以你不要依赖他们的值来更新下一个状态
   - 具体可参考 [这个](href=https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/17)
   ```js
   // 正确的访问方法
   this.setState((state, props) => ({
     // 这里相当于回调,当state更新完后,这里的回调才会执行,且state也是最新的
     counter: state.counter + props.increment,
   }));
   ```
3. State 的更新会被合并
   - 当你调用 setState() 的时候，React 会把你提供的对象合并到当前的 state。
   - 这里的合并是浅合并

### 生命周期

```js
// 组件第一次被渲染到 DOM 中的时候
componentDidMount(){}
//当 DOM中组件被删除的时候
componentWillUnmount(){}
```

## 数据是向下流动的

不管是父组件或是子组件都无法知道某个组件是有状态的还是无状态的，并且它们也并不关心它是函数组件还是 class 组件。

这就是为什么称 state 为局部的或是封装的的原因。除了拥有并设置了它的组件，其他组件都无法访问。

组件可以选择把它的 state 作为 props 向下传递到它的子组件中：

## 事件处理

- 在 JavaScript 中，class 的方法默认不会绑定 this

```js
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // 为了在回调中使用 `this`，这个绑定是必不可少的
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? "ON" : "OFF"}
      </button>
    );
  }
}

ReactDOM.render(<Toggle />, document.getElementById("root"));
```

- 解决方法 1: class fields

```js
class LoggingButton extends React.Component {
  // 此语法确保 `handleClick` 内的 `this` 已被绑定。
  // 注意: 这是 *实验性* 语法。
  handleClick = () => {
    console.log("this is:", this);
  };

  render() {
    return <button onClick={this.handleClick}>Click me</button>;
  }
}
```

- 解决方法 2: 使用箭头函数

`此语法问题在于每次渲染 LoggingButton 时都会创建不同的回调函数。在大多数情况下，这没什么问题，但如果该回调函数作为 prop 传入子组件时，这些组件可能会进行额外的重新渲染。我们通常建议在构造器中绑定或使用 class fields 语法来避免这类性能问题。`

```js
class LoggingButton extends React.Component {
  handleClick() {
    console.log("this is:", this);
  }

  render() {
    // 此语法确保 `handleClick` 内的 `this` 已被绑定。
    return <button onClick={() => this.handleClick()}>Click me</button>;
  }
}
```

## 条件渲染

- 与运算符 &&
- 三目运算符

## 列表 & Key

### key

- 如果列表项目的顺序可能会变化，我们不建议使用索引来用作 key 值，因为这样做会导致性能变差，还可能引起组件状态的问题。

- key 只是在兄弟节点之间必须唯一

## 表单

### 受控组件

在 HTML 中，表单元素（如 `<input>`、` <textarea>` 和 `<select>`）通常自己维护 state，并根据用户输入进行更新。而在 React 中，可变状态（mutable state）通常保存在组件的 state 属性中，并且只能通过使用 setState()来更新。

我们可以把两者结合起来，使 React 的 state 成为“唯一数据源”。渲染表单的 React 组件还控制着用户输入过程中表单发生的操作。被 React 以这种方式控制取值的表单输入元素就叫做“受控组件”。

### 处理多个输入

这里使用了 ES6 计算属性名称的语法更新给定输入名称对应的 state 值：

```js
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
```

### 受控输入空值

在受控组件上指定 value 的 prop 会阻止用户更改输入。如果你指定了 value，但输入仍可编辑，则可能是你意外地将 value 设置为 undefined 或 null。

**也就是说,当 value 为 undefined 或 null 时,input 是可编辑的,为字符串时,是不可编辑的,需要通过输入事件来更新 state**

## 状态提升

> 通常，多个组件需要反映相同的变化数据，这时我们建议将共享状态提升到最近的共同父组件中去。让我们看看它是如何运作的。

- 在 React 应用中，任何可变数据应当只有一个相对应的唯一“数据源”。通常，state 都是首先添加到需要渲染数据的组件中去。然后，如果其他组件也需要这个 state，那么你可以将它提升至这些组件的最近共同父组件中。你应当依靠自上而下的数据流，而不是尝试在不同组件间同步 state。
- 虽然提升 state 方式比双向绑定方式需要编写更多的“样板”代码，但带来的好处是，排查和隔离 bug 所需的工作量将会变少。由于“存在”于组件中的任何 state，仅有组件自己能够修改它，因此 bug 的排查范围被大大缩减了。此外，你也可以使用自定义逻辑来拒绝或转换用户的输入。

## 组合 VS 继承

> 我们推荐使用组合而非继承来实现组件间的代码重用。

- 插槽的形式

```js
function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">{props.left}</div>
      <div className="SplitPane-right">{props.right}</div>
    </div>
  );
}

function App() {
  return <SplitPane left={<Contacts />} right={<Chat />} />;
}
```
