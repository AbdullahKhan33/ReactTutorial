import React, { useState } from 'react';

function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn(!isOn);
  };

  const buttonText = isOn ? 'ON' : 'OFF';

  return (
    <button onClick={handleClick}>{buttonText}</button>
  );
}

export default ToggleButton;