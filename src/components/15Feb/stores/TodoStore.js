// store.js
import { configureStore } from '@reduxjs/toolkit';
import { todoReducer } from '../slices/TodoSlice';

const TodoStore = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default TodoStore;