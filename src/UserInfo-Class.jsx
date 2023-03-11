import React, { Component } from 'react';

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      city: ''
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, age, city } = this.state;
    alert(`Name: ${name}, Age: ${age}, City: ${city}`);
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
          </label>
          <label>
            Age:
            <input type="text" name="age" value={this.state.age} onChange={this.handleInputChange} />
          </label>
          <label>
            City:
            <input type="text" name="city" value={this.state.city} onChange={this.handleInputChange} />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default UserInfo;
