import React from 'react';
import Timer from './Timer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showTimer: true
    };
  }

  toggleTimer() {
    this.setState((prevState) => ({ showTimer: !prevState.showTimer }));
  }

  render() {
    return (
      <div>
        <h1>App</h1>
        <button onClick={() => this.toggleTimer()}>Toggle Timer</button>
        {this.state.showTimer ? <Timer /> : null}
      </div>
    );
  }
}

export default App;
