// CounterComponent.js
import React from 'react';
import { connect } from 'react-redux';
import { increment,decrement } from './reducers/CounterReducer';


const CounterComponent = ({ count, increment, decrement }) => {
  return (
    <div>
    <p>Define the action increment and decrement using redux without react and increase the count value by 5 and decrease the count value by 3(13 Feb).</p>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment by 5</button>
      <button onClick={decrement}>Decrement by 3</button>
    </div>
  );
};

// Connect component to Redux store
const mapStateToProps = (state) => ({
  count: state.count,
});

const mapDispatchToProps = {
  increment,
  decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);