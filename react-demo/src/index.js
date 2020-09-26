import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer/counter";
import Hooks from "./page/Hooks";
//创建仓库
const store = createStore(reducer);

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Hooks />
    </Provider>,
    document.getElementById("root")
  );
};
render();
store.subscribe(render);
