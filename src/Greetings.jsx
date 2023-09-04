import React from 'react';

function Greeting(props) {
  const { name, isLoggedIn } = props;

  // Conditional rendering based on whether the user is logged in
  const greetingMessage = isLoggedIn ? (
    <p>Hello, {name}! Welcome back!</p>
  ) : (
    <p>Hello, Guest! Please log in.</p>
  );

  return (
    <div>
      <h2>Greeting Component</h2>
      {greetingMessage}
    </div>
  );
}

export default Greeting;
