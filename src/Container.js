import React from "react";
import "./styles.css";
import Counter from "./Counter";
import GranTotal from "./GranTotal";

const initialData = [
  { id: 1, value: 0 },
  { id: 2, value: 0 },
  { id: 3, value: 0 }
];

export default class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: initialData,
      granTotal: 0
    };
    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
    this.resetAll = this.resetAll.bind(this);
  }

  incrementCount = id => {
    this.setState(state => ({
      counters: state.counters.map(x =>
        x.id === id ? { ...x, value: x.value + 1 } : x
      )
    }));
  };
  decrementCount(id) {
    this.setState(state => ({
      counters: state.counters.map(x =>
        x.id === id ? { ...x, value: x.value - 1 } : x
      )
    }));
  }
  resetAll() {
    this.setState(state => ({
      counters: state.counters.map(x => ({ ...x, value: 0 }))
    }));
  }

  render() {
    const counters = this.state.counters.map(elem => (
      <Counter
        key={elem.id}
        elemID={elem.id}
        count={elem.value}
        incrementCount={this.incrementCount}
        decrementCount={this.decrementCount}
      />
    ));
    return (
      <>
        {counters}
        <GranTotal
          granTotal={this.state.counters.reduce(
            (inc, val) => inc + val.value,
            0
          )}
          resetAll={this.resetAll}
        />
      </>
    );
  }
}
