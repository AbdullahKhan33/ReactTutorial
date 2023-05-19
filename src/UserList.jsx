import React from 'react';

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: true
    };
  }

  componentDidMount() {
    // Simulating an API call to fetch user data
    setTimeout(() => {
      const fetchedUsers = ['User 1', 'User 2', 'User 3'];
      this.setState({ users: fetchedUsers, isLoading: false });
    }, 2000);
  }

  render() {
    const { users, isLoading } = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h1>User List</h1>
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default UserList;
