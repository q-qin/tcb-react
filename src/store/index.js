import { createStore } from 'redux';
import state from './state';
import reducer from './reducer';
let store = createStore(reducer, state);

export default store