import React, { useRef } from 'react';

const TextInput = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input type="text" ref={(element) => (inputRef.current = element)} />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
};

export default TextInput;
