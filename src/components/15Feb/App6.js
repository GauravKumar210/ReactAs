import React from "react";
import { Provider } from "react-redux";
import TodoStore from "./stores/TodoStore";
import TodoApp from "./TodoApp";

function App6() {
  return (
    <div>
      <Provider store={TodoStore}>
        <TodoApp />
      </Provider>
    </div>
  );
}

export default App6;