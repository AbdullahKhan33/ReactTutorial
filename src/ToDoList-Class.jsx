import React, { Component } from 'react';

class TodoListClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, text: 'Learn React' },
        { id: 2, text: 'Build an app' },
        { id: 3, text: 'Deploy to production' }
      ]
    };
  }

  handleDelete = (id) => {
    const updatedTodos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({ todos: updatedTodos });
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <ul>
          {this.state.todos.map(todo => (
            <li key={todo.id}>
              {todo.text}
              <button onClick={() => this.handleDelete(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoListClass;
