import React from "react";
import "./Step.css";

const Step = (props) => {
  return (
    <div>
      <input
        type="number"
        min="1"
        step="1"
        defaultValue="1"
        ref={props.inputRef}
        onChange={props.steperMethod}
      />
    </div>
  );
};

export default Step;
