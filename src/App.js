import React, { createContext, useContext, useState } from 'react';

// Create a context object
const ThemeContext = createContext();

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    // Provide the shared data through the Provider
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div>
        <h1>App</h1>
        <Toolbar />
      </div>
    </ThemeContext.Provider>
  );
};

const Toolbar = () => {
  // Consume the shared data using the useContext hook
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div>Current Theme: {theme}</div>
    </div>
  );
};

export default App;
