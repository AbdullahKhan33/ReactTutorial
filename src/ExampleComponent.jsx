import React, { useState, useEffect, useLayoutEffect } from 'react';

const ExampleComponent = () => {
  const [color, setColor] = useState('red');

  useEffect(() => {
    console.log('useEffect - Component rendered');
    document.body.style.backgroundColor = color;
    return () => {
      console.log('useEffect - Cleanup');
      document.body.style.backgroundColor = '';
    };
  }, [color]);

  useLayoutEffect(() => {
    console.log('useLayoutEffect - Component rendered');
    document.body.style.color = 'white';
    return () => {
      console.log('useLayoutEffect - Cleanup');
      document.body.style.color = '';
    };
  }, [color]);

  return (
    <div>
      <button onClick={() => setColor('blue')}>Change Color</button>
    </div>
  );
};

export default ExampleComponent;
