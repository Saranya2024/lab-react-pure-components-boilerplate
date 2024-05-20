
import React, { PureComponent } from 'react';

class PureCounterComponent extends PureComponent {
  state = {
    counter: 0,
    toggle: false
  };

  handleToggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  handleIncrement = () => {
    if (this.state.toggle) {
      this.setState({ counter: this.state.counter + 1 });
    }
  };

  render() {
    console.log("This is Pure Component");
    return (
      <div>
        <h2>Pure Component</h2>
        <p>{this.state.counter}</p>
        <button onClick={this.handleToggle}>Set toggle</button>
        <button onClick={this.handleIncrement}>Counter</button>
      </div>
    );
  }
}

export default PureCounterComponent;



