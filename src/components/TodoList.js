import React from 'react';
import Todo from './Todo';
import { List } from '@material-ui/core';

function TodoList({ todos, toggleComplete, removeTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <Todo 
        key={todo} 
        todo={todo} 
        toggleComplete={toggleComplete} 
        removeTodo= {removeTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
