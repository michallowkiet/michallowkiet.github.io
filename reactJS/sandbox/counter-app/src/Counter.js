import React, { Component } from "react";
import "./Counter.css";

import Display from "./Display";
import ButtonsPanel from "./ButtonsPanel";
import Clock from "./Clock";
import Step from "./Step";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counterValue: this.props.initValue,
      showClock: true,
      steperValue: 1,
    };
  }

  changeValue = (action) => {
    // ES6 method

    this.setState((prevState, prevProps) => {
      let currentCounterValue = prevState.counterValue;

      if (action === "add") {
        currentCounterValue += +prevState.steperValue;
      } else if (action === "reinit") {
        currentCounterValue = prevProps.initValue;
      } else {
        currentCounterValue = 0;
      }

      return {
        counterValue: currentCounterValue,
      };
    });
  };

  onSteperChangeHandler = (event) => {
    this.setState((prevState) => {
      return { steperValue: event.target.value };
    });
  };

  toggleClock = () => {
    this.setState((prevState) => {
      return {
        showClock: !prevState.showClock,
      };
    });
  };

  render() {
    let clockElement = "";

    if (this.state.showClock) {
      clockElement = <Clock toggleClockMethod={this.toggleClock} />;
    } else {
      clockElement = (
        <span onClick={this.toggleClock} className="show-clock">
          show clock
        </span>
      );
    }

    return (
      <div className="counter">
        Counter:
        <Display displayValue={this.state.counterValue} />
        <ButtonsPanel
          buttonMethod={this.changeValue}
          addValue={this.state.steperValue}
        />
        <Step
          steperMethod={this.onSteperChangeHandler}
          steperValue={this.state.steperValue}
        />
        {clockElement}
      </div>
    );
  }
}

export default Counter;
