import {INCREMENT,DECREMENT} from '../actions/CounterAction'

// Define initial state
const initialState = {
    count: 0,
  };
  
  // Define action creators
  export const increment = () => ({
    type: INCREMENT,
    payload: 5, // Increment value by 5
  });
  
  export const decrement = () => ({
    type: DECREMENT,
    payload: 3, // Decrement value by 3
  });

  // Define reducer
const CounterReducer = (state = initialState, action) => {
    switch (action.type) {
      case INCREMENT:
        return { count: state.count + action.payload };
      case DECREMENT:
        return { count: state.count - action.payload };
      default:
        return state;
    }
  };
  export default CounterReducer;