import React, { useState } from 'react';

function TodoListFunction(props) {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React' },
    { id: 2, text: 'Build an app' },
    { id: 3, text: 'Deploy to production' }
  ]);

  const handleDelete = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  }

  return (
    <div>
      <h1>{props.title}</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoListFunction;
