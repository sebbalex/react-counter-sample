import React from "react";
import "./styles.css";

const Counter = props => {
  const handleIncrement = e => {
    props.incrementCount(props.elemID);
  };
  const handleDecrement = e => {
    props.decrementCount(props.elemID);
  };
  return (
    <div className="App">
      <h1>{props.count}</h1>
      <button className="btn" onClick={handleIncrement}>
        Increment
      </button>
      <button className="btn" onClick={handleDecrement}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
