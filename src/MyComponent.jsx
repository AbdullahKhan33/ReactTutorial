import React from 'react';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log('Constructor called');
  }

  componentDidMount() {
    console.log('Component did mount');
  }

  render() {
    console.log('Render called');
    return <div>Hello, World!</div>;
  }
}

export default MyComponent;
