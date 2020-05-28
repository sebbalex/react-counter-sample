import React from "react";
import "./styles.css";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
  }
  incrementCount() {
    this.setState(state => ({
      count: state.count + 1
    }));
  }
  decrementCount() {
    this.setState(state => ({
      count: state.count - 1
    }));
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.count}</h1>
        <button className="btn" onClick={this.incrementCount}>
          Increment
        </button>
        <button className="btn" onClick={this.decrementCount}>
          Decrement
        </button>
      </div>
    );
  }
}

