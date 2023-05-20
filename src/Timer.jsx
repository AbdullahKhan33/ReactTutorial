import React from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0
    };
    this.timerId = null;
  }

  componentDidMount() {
    console.log('Component did mount');
    this.timerId = setInterval(() => {
      this.setState((prevState) => ({ seconds: prevState.seconds + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    console.log('Component will unmount');
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div>
        <h1>Timer</h1>
        <p>Seconds: {this.state.seconds}</p>
      </div>
    );
  }
}

export default Timer;
