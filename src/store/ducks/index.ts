import { combineReducers } from 'redux';

import todoReducer from './todo.duck';

import exampleReducer from './example.duck';

export default combineReducers({
  exampleReducer,
  todoReducer,
});
