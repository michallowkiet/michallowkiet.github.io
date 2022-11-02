import React from "react";
import "./Step.css";

const Step = (props) => {
  return (
    <div>
      <input
        type="number"
        min="1"
        step="1"
        onChange={props.steperMethod}
        value={props.steperValue}
      />
    </div>
  );
};

export default Step;
