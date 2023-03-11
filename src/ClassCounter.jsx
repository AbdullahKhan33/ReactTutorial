import React, { Component } from 'react';

class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <h2>{this.props.message}</h2>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    );
  }
}

export default ClassCounter;
