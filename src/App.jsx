import React from 'react';
import Greeting from './Greeting';
import Person from './Person';

function App() {
  return (
      <div>
        {/* <Greeting name="Sara"/> */}
        {/* <Greeting name="Sara" age={25}/> */}
        <Person name="Sara" age="30" gender="female" /> 
      </div>
  )
}

export default App;
