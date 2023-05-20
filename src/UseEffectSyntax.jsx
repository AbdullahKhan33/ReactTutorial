import React, { useEffect, useState } from 'react';

const UseEffectSyntax = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Effect function
    console.log('Effect ran');
    
    // Cleanup function
    return () => {
      console.log('Cleanup ran');
    };
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default UseEffectSyntax;
