// TodoApp.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleTodo, removeTodo } from './slices/TodoSlice';

const TodoApp = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      dispatch(addTodo(newTodo));
      setNewTodo('');
    }
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div>
      <h1>Todo App</h1>
      <p> Implement the todo actions using the reduxjstool kit library with an examples(15 Feb).</p>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
              onClick={() => handleToggleTodo(todo.id)}
            >
              {todo.text}
            </span>
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <div>
        <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
    </div>
  );
};

export default TodoApp;