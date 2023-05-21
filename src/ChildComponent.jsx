import React from 'react';

const ChildComponent = ({ onIncrement }) => {
  return (
    <div>
      <button onClick={onIncrement}>Increment</button>
    </div>
  );
};

export default ChildComponent;
