import React, { Component } from 'react';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      loading: true
    };
  }

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users/${this.props.userId}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ user: data, loading: false });
      });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.userId !== this.props.userId) {
      this.setState({ loading: true });
      fetch(`https://jsonplaceholder.typicode.com/users/${this.props.userId}`)
        .then(response => response.json())
        .then(data => {
          this.setState({ user: data, loading: false });
        });
    }
  }

  componentWillUnmount() {
    console.log('UserProfile is unmounting');
  }

  render() {
    const { user, loading } = this.state;
    if (loading) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h1>{user.name}</h1>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
      </div>
    );
  }
}

export default UserProfile;
