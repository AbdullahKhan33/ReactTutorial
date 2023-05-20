import React from 'react';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    // Simulating an error during fetching data
    fetch('https://example.com/api/data')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => {
        this.setState({ data });
      })
      .catch(error => {
        throw error;
      });
  }

  render() {
    if (!this.state.data) {
      // Simulating an error in rendering
      throw new Error('Error in rendering MyComponent');
    }

    return (
      <div>
        <h2>MyComponent</h2>
        <p>Data: {this.state.data}</p>
      </div>
    );
  }
}

export default MyComponent;
