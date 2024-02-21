// store.js
import { legacy_createStore } from 'redux';
import CounterReducer from '../reducers/CounterReducer';

// Create store
const CounterStore = legacy_createStore(CounterReducer);

export default CounterStore;