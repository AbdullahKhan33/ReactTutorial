import React, { Component } from 'react';

class MyComponentExt extends Component {
  render() {
    return (
      <div className="my-component">
        <h1 className="my-title">Hello, world!</h1>
        <p className="my-text">This is a simple class-based component.</p>
        <button className="my-button">Click me!</button>
      </div>
    );
  }
}

// Note that the styles for these classes would need to be defined elsewhere in the application's CSS.

export default MyComponentExt;
