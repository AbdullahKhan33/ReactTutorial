import React, { useReducer, useState } from 'react';

const initialState = {
  todos: [],
  filter: 'all',
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, { id: Date.now(), text: action.payload, completed: false }],
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload),
      };
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

const TodoApp = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [todoText, setTodoText] = useState('');

  const handleAddTodo = () => {
    dispatch({ type: 'ADD_TODO', payload: todoText });
    setTodoText('');
  };

  const handleToggleTodo = todoId => {
    dispatch({ type: 'TOGGLE_TODO', payload: todoId });
  };

  const handleDeleteTodo = todoId => {
    dispatch({ type: 'DELETE_TODO', payload: todoId });
  };

  const handleSetFilter = filter => {
    dispatch({ type: 'SET_FILTER', payload: filter });
  };

  const filteredTodos = state.todos.filter(todo => {
    if (state.filter === 'all') {
      return true;
    } else if (state.filter === 'completed') {
      return todo.completed;
    } else if (state.filter === 'incomplete') {
      return !todo.completed;
    }
    return true;
  });

  return (
    <div>
      <h2>Todo List</h2>
      <input type="text" value={todoText} onChange={e => setTodoText(e.target.value)} />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {filteredTodos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleTodo(todo.id)}
            />
            {todo.text}
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={() => handleSetFilter('all')}>All</button>
        <button onClick={() => handleSetFilter('completed')}>Completed</button>
        <button onClick={() => handleSetFilter('incomplete')}>Incomplete</button>
      </div>
    </div>
  );
};

export default TodoApp;
