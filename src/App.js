import React from 'react';
import Counter from './Counter';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCounter: true
    };
  }

  toggleCounter() {
    this.setState((prevState) => ({ showCounter: !prevState.showCounter }));
  }

  render() {
    return (
      <div>
        <h1>App</h1>
        <button onClick={() => this.toggleCounter()}>Toggle Counter</button>
        {this.state.showCounter && <Counter />}
      </div>
    );
  }
}

export default App;
