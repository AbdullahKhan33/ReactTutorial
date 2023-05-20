import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import MyComponent from './MyComponent';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <ErrorBoundary>
          <MyComponent />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
