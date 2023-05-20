import React, { useEffect, useState } from 'react';

const ExampleComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Perform the side effect here
    fetchData();
  }, []);

  const fetchData = async () => {
    // Simulate fetching data from an API
    const response = await fetch('https://jsonplaceholder.typicode.com/comments');
    const result = await response.json();
    setData(result);
  };

  return (
    <div>
      {/* Display the fetched data */}
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExampleComponent;
