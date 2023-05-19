import React from 'react';
import MyComponent from './MyComponent';
import UserList from './UserList';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>My App</h1>
        {/* <MyComponent /> */}
        <UserList/>
      </div>
    );
  }
}

export default App;
