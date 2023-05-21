import React, { useState } from 'react';

const FormComponent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    // Perform form submission logic with name and email values
    console.log('Form submitted:', name, email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={event => setName(event.target.value)}
        placeholder="Name"
      />
      <input
        type="email"
        value={email}
        onChange={event => setEmail(event.target.value)}
        placeholder="Email"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;