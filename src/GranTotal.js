import React from "react";
import "./styles.css";

const GranTotal = props => {
  return (
    <div className="GranTotal">
      <h1>{props.granTotal}</h1>
      <button className="btn" onClick={props.resetAll}>
        Reset ALL counters
      </button>
    </div>
  );
};

export default GranTotal;
