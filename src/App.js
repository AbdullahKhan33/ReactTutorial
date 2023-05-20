import { useState } from 'react';
import React from 'react';
import Button from './Button';
import ExampleComponent from './ExampleComponent';
import UseEffectSyntax from './UseEffectSyntax';
import ProductDetails from './ManagingDependencies';

// function App() {
//   return (
//     <div>
//       {/* <ExampleComponent /> */}
//       <UseEffectSyntax />
//       <TimerCleanup />
//     </div>
//   );
// }

// export default App;



//Uncomment the above to work with the other two components.
const App = () => {
  const [productId, setProductId] = useState('');

  const handleInputChange = (event) => {
    setProductId(event.target.value);
  };

  return (
    <div>
      <h1>Product Details</h1>
      <input
        type="text"
        value={productId}
        onChange={handleInputChange}
        placeholder="Enter Product ID"
      />
      <ProductDetails productId={productId} />
    </div>
  );
};

export default App;
