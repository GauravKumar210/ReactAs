import React from "react";
import { Provider } from "react-redux";
import CounterStore from "./stores/CounterStore";
import CounterComponent from "./CounterComponent";

function App4() {
  return (
    <div>
      <Provider store={CounterStore}>
        <CounterComponent />
      </Provider>
    </div>
  );
}

export default App4;