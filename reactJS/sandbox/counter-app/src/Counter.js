import React, { useState } from "react";
import "./Counter.css";

import Display from "./Display";
import ButtonsPanel from "./ButtonsPanel";
import Clock from "./Clock";
import Step from "./Step";

const Counter = (props) => {
  const [state, setState] = useState({
    counterValue: props.initValue,
    showClock: true,
    steperValue: 1,
  });

  const toggleClock = () => {
    setState((prevState) => {
      return { ...prevState, showClock: !prevState.showClock };
    });
  };

  const changeValue = (action) => {
    setState((prevState, prevProps) => {
      let currentCounterValue = prevState.counterValue;

      if (action === "add") {
        currentCounterValue += +prevState.steperValue;
      } else if (action === "reinit") {
        currentCounterValue = prevProps.initValue;
      } else {
        currentCounterValue = 0;
      }

      return { ...prevState, counterValue: currentCounterValue };
    });
  };

  const onSteperChangeHandler = (event) => {
    setState((prevState) => {
      return { ...prevState, steperValue: event.target.value };
    });
  };

  let clockElement = "";

  if (state.showClock) {
    clockElement = <Clock toggleClockMethod={toggleClock} />;
  } else {
    clockElement = (
      <span onClick={toggleClock} className="show-clock">
        show clock
      </span>
    );
  }

  return (
    <div className="counter">
      Counter:
      <Display displayValue={state.counterValue} />
      <ButtonsPanel buttonMethod={changeValue} addValue={state.steperValue} />
      <Step
        steperMethod={onSteperChangeHandler}
        steperValue={state.steperValue}
      />
      {clockElement}
    </div>
  );
};

export default Counter;
