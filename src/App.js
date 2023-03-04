import React from 'react';
import Button from './Button';

function App() {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div>
      <Button onClick={handleClick} label="Click me" />
    </div>
  );
}

export default App;
