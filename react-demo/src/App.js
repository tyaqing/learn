import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./page/Home";
import Mine from "./page/Mine";
import { connect } from "react-redux";
import { increment, decrement } from "./actions/counter";

function App(props) {
  console.log(props);
  const { increment, decrement, counter } = props;
  return (
    <div className="App">
      <button
        onClick={() => {
          increment();
        }}
      >
        +
      </button>
      {counter}
      <button
        onClick={() => {
          decrement();
        }}
      >
        -
      </button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    counter: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch(increment());
    },
    decrement: () => {
      dispatch(decrement());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
