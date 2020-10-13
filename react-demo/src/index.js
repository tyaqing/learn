import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer/counter";
import Hooks from "./App.js";
//创建仓库
const store = createStore(reducer);

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Hooks></Hooks>
    </Provider>,
    document.getElementById("root")
  );
};
render();
store.subscribe(render);
